import React from 'react'
import { FaVideo, FaRegHandshake } from "react-icons/fa"
import { MdCall } from "react-icons/md"
import { BsFillCalendarDateFill, BsFillClockFill } from "react-icons/bs"
const expertdetail = () => {
    return (
        <div className="container py-10">
            <div className='grid grid-cols-[2fr_1fr] gap-x-[10rem] '>
                <div>
                    <h3 className='text-3xl font-medium'>FOOD PROCESSING</h3>
                    <p className='text-[#9D9898] text-xs'>French fries, Macroni, Potato chips, Roasted peanut, </p>
                    <p className='text-[#9D9898] text-[14px]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    <div className='flex gap-x-8 mt-6'>
                        <div className='bg-primary py-2 px-4 rounded-md text-white flex gap-x-2 items-center cursor-pointer'>Video Call<span><FaVideo fontSize={20} /></span></div>
                        <div className='bg-[#EDF2F6] py-2 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer'>Audio Call<span ><MdCall color='#2A79FF' fontSize={21} /></span></div>
                        <div className='bg-[#EDF2F6] py-2 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer'>Meeting<span><FaRegHandshake fontSize={24} color='#2A79FF' /></span></div>
                    </div>
                    <div className='rounded-md p-3 shadow-lg mt-5 grid grid-cols-[1fr_1fr_1fr]'>
                        <div className='text-sm '>
                            Date
                            <div className='flex gap-x-5 mt-2'>
                                <div className='bg-[#EDF2F6] py-1 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer text-sm'>3/12/22</div>
                                <div className='bg-[#EDF2F6] py-1 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer'><BsFillCalendarDateFill /></div>
                            </div>
                        </div>
                        <div className='text-sm '>
                            Time
                            <div className='flex gap-x-5 mt-2'>
                                <div className='bg-[#EDF2F6] py-1 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer text-sm'>2:00 PM</div>
                                <div className='bg-[#EDF2F6] py-1 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer'><BsFillClockFill /></div>
                            </div>
                        </div>
                        <div className='flex items-end justify-end'>
                            <div className='bg-primary py-2 px-5 rounded-md text-white   items-center cursor-pointer text-center'>Book Now</div>
                        </div>

                    </div>
                </div>
                <div>
                    bye
                </div>
            </div>
        </div>

    )
}

export default expertdetail