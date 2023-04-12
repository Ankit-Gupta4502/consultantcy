import React from 'react'
import Image from 'next/image'
import John from "../../public/images/john.png"
import { BiCategoryAlt } from 'react-icons/bi'
import { FiCheckCircle } from "react-icons/fi"
import { AiFillStar, AiOutlineVideoCamera } from "react-icons/ai"
import Link from 'next/link'
import { VscCallIncoming } from "react-icons/vsc"
const Consultant = ({ name = "", sector = '', experience = "" }: { name?: string, sector?: string, experience?: string }) => {
  return (
    <div className="py-[15px]  rounded-[10px] pl-11 pr-9 border border-[#D9D9D9] ">

      <div className="flex justify-between">
        <div className='flex items-center space-x-11' >
          <Image src={John} alt='' width={120} height={120} className='object-cover w-[120px] h-[120px] rounded-full' />
          <div>
            <h6 className='text-primary font-semibold mb-3' > {name} </h6>
            <div className='space-y-2' >
              <div className="flex items-center md:space-x-4 ">
                <span className='text-gray/70'>
                  <BiCategoryAlt size={18} />
                </span>
                <span className="text-black/50">
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

                    4.5
                  </span>
                </div>
                <div className="bg-gray/5 rounded-[30px] px-4 py-1 border border-[#ddd] ">
                  600/hourly
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between items-end' >
          <Link href='#' className='underline text-primary' >
            View Profile
          </Link>


          <div className="flex items-center space-x-4">
            <button className='flex px-3 py-[6px] space-x-1 rounded-[30px] items-center border text-primary bg-white border-primary'>
              <AiOutlineVideoCamera />
              <span className='text-sm' >

                Video Call
              </span>
            </button>

            <button className='flex px-3 py-[6px] space-x-1 rounded-[30px] items-center  text-white bg-primary'>
              <VscCallIncoming />
              <span className='text-sm' >

                Audio Call
              </span>
            </button>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Consultant