import React, { useEffect, useState, useCallback } from 'react'
import ConsultantCard from '../Components/Consultant/ConsultantCard'
import ConsultantFilter from '../Components/Consultant/ConsultantFilter'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getAllConsultants } from '../redux/actions/ConsultantAction'
import BookSlotModal from '../Components/Consultant/BookSlotModal'
import { getSectors } from '../redux/actions/HomeAction'
import { getIndustries } from '../redux/actions/IndustryAction'
type consultantType = {
    id: number,
    name: string,
    consultant_sectors: { id: number, consultantAudioFee?: string, consultantVideoFee?: string, subCategory: { id: number, name_english: string } }[],
    consultant_profile: { workExperience?: string, audioFee?: number, videoFee?: number } | null,
    slug: string | null,
    user_reviews: {
        rating?: number,
        comment?: string,
        id: number
    }[],
    consultant_slots: {
        id: number,
        startTime?: string,
        endTime?: string,
        timeZone?: string
    }[]
}
type rating = {
    rating?: number,
    comment?: string,
    id: number
}[]
type sectorType = {
    subCategory: { id: number, name_english: string }
}[]
export type modalDataType = {
    id?: number,
    startTime?: string,
    endTime?: string,
    timeZone?: string
}

export type consultantInfoType = {
    consultancyType: "audio" | "video" | "",
    id: number
}
const consultants = () => {
    const dispatch = useAppDispatch()
    const { ConsultantReducer: { consultants }, IndexReducer: { categories }, IndustriesReducer: { categories: industries } } = useAppSelector(state => state)
    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState<{ search: string, sector: string, industry: string, sort: string }>({
        search: "",
        sector: "",
        industry: "",
        sort: ""
    })
    const [modalData, setModalData] = useState<modalDataType[]>([])
    const [consultantInfo, setConsultantInfo] = useState<consultantInfoType>({
        consultancyType: '',
        id: 0
    })
    const [slot, setSlot] = useState<modalDataType>({})
    const allConsultants: consultantType[] = consultants || []
    useEffect(() => {
        dispatch(getAllConsultants(filter.search, filter.sector, filter.industry, filter.sort))
    }, [filter])

    useEffect(() => {
        dispatch(getSectors())
    }, [])

    useEffect(() => {
        if (filter.sector) {
            dispatch(getIndustries(filter.sector, "", "id"))
            setFilter({ ...filter, industry: "" })
        }
    }, [filter.sector])

    const countRating = useCallback((rating: rating): string | number => {
        const rate = rating.reduce((accu, item) => accu += item.rating, 0) / rating.length
        return Number.isInteger(rate) ? rate.toString() + ".00" : rate
    }, [])

    const concatArr = useCallback((sector: sectorType): string => {
        return sector.map((item) => item?.subCategory?.name_english).join(',')
    }, [])

    return (
        <div className='py-16 bg-[#1F51FF0F] ' >
            <div className="container">
                <div className="grid items-start grid-cols-[auto_295px] gap-7">
                    <div className='px-6 py-[18px] space-y-5 bg-white rounded-[10px] shadow-[0px_0px_20px_0px_#0000001A]'>
                        {
                            allConsultants.length ?
                                allConsultants.map((item) => {
                                    return <ConsultantCard
                                        key={item.id}
                                        name={item.name}
                                        sector={concatArr(item.consultant_sectors)}
                                        experience={item.consultant_profile?.workExperience}
                                        fee={item?.consultant_profile?.videoFee}
                                        rating={countRating(item.user_reviews) || 0}
                                        slug={item.slug} setIsOpen={setIsOpen}
                                        setModalData={setModalData}
                                        setConsultantInfo={setConsultantInfo}
                                        slots={item.consultant_slots}
                                        id={item.id}
                                    />
                                }) : <span className='text-center block mx-auto'>No Consultants Found</span>
                        }

                    </div>
                    <ConsultantFilter industries={industries} filter={filter} setFilter={setFilter} sectors={categories} />
                    <BookSlotModal slot={slot} modalData={modalData} setSlotId={setSlot} isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    )
}

export default consultants