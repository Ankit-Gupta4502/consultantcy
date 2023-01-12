import React from 'react'
import Image from 'next/image'
import img4 from "../../public/images/Rectangle 13.png"
const Category = () => {
  return (
    <div className="container py-[100px]">
      <p className='text-primary text-center'>Category</p>
      <h3 className=' text-center '>Explore our best category’s</h3>
      <p className='text-gray/70 text-center mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
        tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="md:grid-cols-3 lg:grid-cols-6  grid-cols-1 grid gap-[35px]">
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col'>
          <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
            <Image src={img4} alt="" />
          </div>
          <p className='text-center'>Income Tax</p>
        </div>
        <div className='border-[1px] border-primary rounded p-3 shadow-lg flex items-center flex-col justify-center'>
          <div className=' mb-3 flex justify-center items-center text-primary'>
            50+ More
          </div>

        </div>
      </div>
    </div>
  )
}

export default Category