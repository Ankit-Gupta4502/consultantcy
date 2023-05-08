import React, { useState } from 'react'
import Image from 'next/image'
import John from "../../public/images/john.png"
import { BiCategoryAlt } from 'react-icons/bi'
import { FiCheckCircle } from "react-icons/fi"
import { AiFillStar, AiOutlineVideoCamera } from "react-icons/ai"
import Link from 'next/link'
import { BiRupee } from "react-icons/bi"
import { VscCallIncoming } from "react-icons/vsc"
import { Dispatch, SetStateAction } from 'react'
import { consultantInfoType,consultantExpertiseType } from '../../interface/consultant'
type cardProps = {
  name?: string,
  sector?: string,
  experience?: string,
  audiofee: number,
  slug: string,
  setIsOpen: Function,
  rating?: number | string,
  setConsultantInfo?: Dispatch<SetStateAction<consultantInfoType>>,
  setModalData?: Function,
  id: number,
  videofee: number,
  setConsultantExpertise: Dispatch<SetStateAction<consultantExpertiseType>>,
  sectors: { id?: number, name_english?: string }[],
  industry: { id?: number, name_english?: string, subCategoryId?: number }[]
  slots: any[],
  avatar:string
}
const Consultant = React.memo(({ name = "", sector = '', experience = "", audiofee, slug, setIsOpen, rating, setConsultantInfo, slots, id, videofee, setConsultantExpertise, sectors, industry,avatar }: cardProps) => {;
  
  return (
    <div className="py-[15px]  rounded-[10px] pl-11 pr-9 border border-[#D9D9D9] ">

      <div className="flex justify-between">
        <div className='flex items-center space-x-11' >
          <Image src={ John} alt='' width={120} height={120} className='object-cover w-[120px] h-[120px] rounded-full' />
          <div className='max-w-[320px]' >
            <h6 className='text-primary font-semibold mb-3' > {name} </h6>
            <div className='space-y-2' >
              <div className="flex items-center md:space-x-4 ">
                <span className='text-gray/70'>
                  <BiCategoryAlt size={18} />
                </span>
                <span className="text-black/50 line-clamp-2">
                  {sector}
                </span>
              </div>

              <div className="flex items-center md:space-x-4 ">
                <span className='text-gray/70' >
                  <FiCheckCircle size={18} />
                </span>
                <span className="text-black/50">
                  {experience} years experience overall
                </span>
              </div>

              <div className="flex items-center md:space-x-6">
                <div className="rating flex items-center md:space-x-2">
                  <AiFillStar size={20} className=' text-yellow-300 ' />
                  <span>

                    {rating}
                  </span>
                </div>
                <div className="bg-gray/5 flex items-center text-sm font-semibold rounded-[30px] px-4 py-1 border border-[#ddd] ">
                  <span className='inline-block' >
                    <BiRupee size={16} />
                  </span>
                  <span>
                    {audiofee}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between items-end' >
          <Link href={`/consultant/${slug}`} className='underline text-primary' >
            View Profile
          </Link>


          <div className="flex items-center space-x-4">
            <button className='flex px-3 py-[6px] space-x-1 rounded-[30px] items-center border text-primary bg-white border-primary' onClick={() => {
              setIsOpen(true)

              setConsultantInfo({
                consultancyType: "video",
                id,
                amount: videofee,
                 slots
              })
              setConsultantExpertise(prev => {
                return {
                  ...prev,
                  sector: sectors,
                  industry
                }
              })
            }} >
              <AiOutlineVideoCamera />
              <span className='text-sm' >
                Video Call
              </span>
            </button>

            <button className='flex px-3 py-[6px] space-x-1 rounded-[30px] items-center  text-white bg-primary' onClick={() => {
              setIsOpen(true)
              setConsultantInfo({
                consultancyType: "audio",
                id,
                amount: audiofee,
                 slots
              })
              setConsultantExpertise(prev => {
                return {
                  ...prev,
                  sector: sectors,
                  industry
                }
              })
            }}>
              <VscCallIncoming />
              <span className='text-sm'  >

                Audio Call
              </span>
            </button>

          </div>
        </div>
      </div>


    </div>
  )
})

export default Consultant