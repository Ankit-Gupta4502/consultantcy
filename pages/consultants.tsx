import React, { useEffect } from 'react'
import ConsultantCard from '../Components/Consultant/ConsultantCard'
import ConsultantFilter from '../Components/Consultant/ConsultantFilter'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getAllConsultants } from '../redux/actions/ConsultantAction'
type consultantType = {
    id: number,
    name: string,
    consultant_sectors: { id: number, consultantAudioFee?: string, consultantVideoFee?: string, subCategory: { id: number, name_english: string } }[],
    consultant_profile: { workExperience?: string, audioFee?: number, videoFee?: number } | null
}
const consultants = () => {
    const dispatch = useAppDispatch()
    const { ConsultantReducer: { consultants } } = useAppSelector(state => state)
    const allConsultants: consultantType[] = consultants || []
    useEffect(() => {
        dispatch(getAllConsultants())
    }, [])

    return (
        <div className='py-16 bg-[#1F51FF0F] ' >
            <div className="container">
                <div className="grid items-start grid-cols-[auto_295px] gap-7">
                    <div className='px-6 py-[18px] space-y-5 bg-white rounded-[10px] shadow-[0px_0px_20px_0px_#0000001A]'>
                        {
                            allConsultants.map((item) => {
                                return <ConsultantCard key={item.id} name={item.name} sector={item.consultant_sectors.map((item) => item?.subCategory?.name_english).join(',')} experience={item.consultant_profile?.workExperience} />
                            })
                        }

                    </div>
                    <ConsultantFilter />
                </div>
            </div>
        </div>
    )
}

export default consultants