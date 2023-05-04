import React, { useEffect, useState, useCallback } from 'react'
import ConsultantCard from '../Components/Consultant/ConsultantCard'
import ConsultantFilter from '../Components/Consultant/ConsultantFilter'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getAllConsultants } from '../redux/actions/ConsultantAction'
import BookSlotModal from '../Components/Consultant/BookSlotModal'
import { getSectors } from '../redux/actions/HomeAction'
import { getIndustries } from '../redux/actions/IndustryAction'
import { bookConsultancy, getUserWallet } from '../redux/actions/UserAction'
import { toast } from "react-toastify"
import uuid4 from "uuid4";
import { consultantType, rating, sectorType, slotsType, consultantInfoType, consultantExpertiseType, selectedSlotType } from "../interface/consultant"

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
        slots: []
    })
    const [slot, setSlot] = useState<slotsType>({ sector: "", industry: "" })
    const [consultantExpertise, setConsultantExpertise] = useState<consultantExpertiseType>({ sector: [], industry: [] })
    const [selectedSlot, setSelectedSlot] = useState<selectedSlotType>({})
    const allConsultants: consultantType[] = consultants || []
    useEffect(() => {
        dispatch(getAllConsultants(filter.search, filter.sector, filter.industry, filter.sort, auth.token))
    }, [filter, auth?.token])

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
        const data = {
            consultancyType: consultantInfo.consultancyType,
            amount: consultantInfo.amount,
            consultantId: consultantInfo.id,
            timeSlotId: selectedSlot.timeSlotId,
            dateSlotId: selectedSlot.slotDateId,
            sector: slot.sector,
            industry: slot.industry,
            gatewayType: 'wallet'
        }
        if (consultantInfo.amount > walletAmount) {
            toast.error("Insufficient Wallet Amount Please Top Up Your Wallet")
        } else {
            dispatch(bookConsultancy(auth.token, data))
        }

    }




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
                                        avatar={item.thumbnail?`/basepath${item.thumbnail}`:""}
                                        sectors={getSectorsAndIndustry(item.consultant_sectors, 'subCategory')}
                                        industry={getSectorsAndIndustry(item.consultant_sectors, 'subSubCategory')}
                                        setConsultantExpertise={setConsultantExpertise}
                                    />
                                }) : <span className='text-center block mx-auto'>No Consultants Found</span>
                        }

                    </div>
                    <ConsultantFilter industries={industries} filter={filter} setFilter={setFilter} sectors={categories} />
                    <BookSlotModal handleBooking={handleBooking
                    } sectors={consultantExpertise.sector} industries={consultantExpertise.industry} slot={slot} amount={consultantInfo.amount} modalData={consultantInfo.slots} setSlot={setSlot} isOpen={isOpen} setIsOpen={setIsOpen} setSelectedSlot={setSelectedSlot} selectedSlot={selectedSlot} />
                </div>
            </div>
        </div>
    )
}

export default consultants