import React, { useEffect, useState, useCallback } from 'react'
import ConsultantCard from '../Components/Consultant/ConsultantCard'
import ConsultantFilter from '../Components/Consultant/ConsultantFilter'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getAllConsultants } from '../redux/actions/ConsultantAction'
import BookSlotModal from '../Components/Consultant/BookSlotModal'
import { getSectors } from '../redux/actions/HomeAction'
import { getIndustries } from '../redux/actions/IndustryAction'
import { getUserWallet } from '../redux/actions/UserAction'
import { toast } from "react-toastify"

export interface consultantSlotType {
    dateIndex?: string,
    id: number,
    consultant_slots: {
        startTime: string,
        endTime: string,
        slotDateId: string,
        id: number,
        timeZone?:"morning"|"evening"
    }[]
}
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
    consultant_slote_dates: consultantType[]
}
type rating = {
    rating?: number,
    comment?: string,
    id: number
}[]
export type sectorType = {
    subCategory: { id: number, name_english: string }
}[]
export type industryType = {

}
export type slotsType = {
    sector: string,
    industry: string
}
export interface consultantInfoType {
    consultancyType: "audio" | "video" | "",
    id: number,
    amount: number,
    slots?: consultantSlotType[]
}
export type consultantExpertiseType = {
    sector: { id?: number, name_english?: string }[],
    industry: { id?: number, name_english?: string, subCategoryId?: number }[]
}
const consultants = () => {
    const dispatch = useAppDispatch()
    const { ConsultantReducer: { consultants }, IndexReducer: { categories }, IndustriesReducer: { categories: industries }, AuthReducer: { isAuthentiCated, auth }, UserWalletReducer: { walletAmount } } = useAppSelector(state => state)
    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState<{ search: string, sector: string, industry: string, sort: string }>({
        search: "",
        sector: "",
        industry: "",
        sort: ""
    })
    const [consultantInfo, setConsultantInfo] = useState<consultantInfoType>({
        consultancyType: '',
        id: 0,
        amount: 0,
        slots:[]
    })
    const [slot, setSlot] = useState<slotsType>({ sector: "", industry: "" })
    const [consultantExpertise, setConsultantExpertise] = useState<consultantExpertiseType>({ sector: [], industry: [] })
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

    useEffect(() => {
        if (slot.sector) {
            setConsultantExpertise(prev => {
                return { ...prev, industry: prev.industry.filter((item) => item.subCategoryId === parseInt(slot.sector)) }
            })
            setSlot(prev => { return { ...prev, industry: "" } })
        }
        if (!slot.sector) {
            setSlot(prev => { return { ...prev, industry: "" } })
        }

    }, [slot.sector])

    useEffect(() => {
        if (isAuthentiCated) {
            dispatch(getUserWallet(auth?.token))
        }
    }, [isAuthentiCated])


    const getSectorsAndIndustry = useCallback((arr: any[], key: string) => {
        return arr.map((item) => item[key])
    }, [])
    const handleBooking = () => {
        if (consultantInfo.amount > walletAmount) {
            toast.error("Insufficient Wallet Amount Please Top Up Your Wallet")
        }
    }
   console.log(consultantInfo.slots);
   

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
                                        audiofee={item?.consultant_profile?.audioFee}
                                        videofee={item?.consultant_profile?.videoFee}
                                        rating={countRating(item.user_reviews) || 0}
                                        slug={item.slug} setIsOpen={setIsOpen}
                                        setConsultantInfo={setConsultantInfo}
                                        slots={item.consultant_slote_dates}
                                        id={item.id}
                                        sectors={getSectorsAndIndustry(item.consultant_sectors, 'subCategory')}
                                        industry={getSectorsAndIndustry(item.consultant_sectors, 'subSubCategory')}
                                        setConsultantExpertise={setConsultantExpertise}
                                    />
                                }) : <span className='text-center block mx-auto'>No Consultants Found</span>
                        }

                    </div>
                    <ConsultantFilter industries={industries} filter={filter} setFilter={setFilter} sectors={categories} />
                    <BookSlotModal handleBooking={handleBooking
                    } sectors={consultantExpertise.sector} industries={consultantExpertise.industry} slot={slot} amount={consultantInfo.amount} modalData={consultantInfo.slots} setSlot={setSlot} isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    )
}

export default consultants