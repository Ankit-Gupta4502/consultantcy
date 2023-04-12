import React, { useEffect } from 'react'
import img from "../public/images/Rectangle 38.svg"
import OBJECTS from "../public/images/OBJECTS.svg"
import { useAppDispatch, useAppSelector } from '../hooks'
import { getConsultantServices } from "../redux/actions/HomeAction"
import { item } from '../interface'
import Image from 'next/image'
import Link from "next/link"
const allcategorypages = () => {
  const { IndexReducer: { loading, services, servicesCount }, } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getConsultantServices())
  }, [])

  return (
    <>
      <div className={` w-full h-[300px] bg-cover bg-no-repeat flex items-center`} style={{ backgroundImage: `url('${img.src}')` }}>
        <div className="container">

          <div className='max-w-[700px] mx-auto'>
            <h5 className='text-white mb-2 font-bold'>Explore for products & find verified sellers near you</h5>
            <div className='p-2 bg-white rounded-md grid grid-cols-[75%_25%]'>
              <input type="text" placeholder='search product by name' className='focus: outline-none px-2' />
              <div className='bg-primary py-3 px-1 text-white rounded text-center cursor-pointer'>
                Search
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className='py-[50px]'>
        <div className='container bg-[#d6d6d6] py-5 px-5 mb-5'>
          <div className='flex justify-between'>
            <h6 className='text-base'>
              Building & Construction
            </h6>
            <h6 className='text-primary text-base'>
              VIEW ALL
            </h6>
          </div>
          <div className='grid grid-cols-3 gap-4  mt-3'>
            {services.slice(0, 6)?.map((item: item) => {
              return (
                <div className='grid grid-cols-[40%_auto] bg-white p-4'>
                  <div className='relative h-[90px] w-[120px] rounded-md overflow-hidden '>

                    <Image src={`/basepath/${item?.thumbnail}`} className=" object-cover" alt="" fill />
                  </div>
                  <div>

                    <h6 className='font-medium'>{item?.name
                    }</h6>
                    <p className='font-medium text-sm'>{item?.name
                    }</p>
                    <Link href="#" >
                      <p className='text-primary text-sm'>View More</p>

                    </Link>
                  </div>


                </div>
              )
            })}
          </div>
        </div>
        <div className='container bg-[#d6d6d6] py-5 px-5 mb-5'>
          <div className='flex justify-between'>
            <h6 className='text-base'>
              Electronics & Electrical
            </h6>
            <h6 className='text-primary text-base'>
              VIEW ALL
            </h6>
          </div>
          <div className='grid grid-cols-3 gap-4  mt-3'>
            {services.slice(0, 6)?.map((item: item) => {
              return (
                <div className='grid grid-cols-[40%_auto] bg-white p-4'>
                  <div className='relative h-[90px] w-[120px] rounded-md overflow-hidden '>

                    <Image src={`/basepath/${item?.thumbnail}`} className=" object-cover" alt="" fill />
                  </div>
                  <div>

                    <h6 className='font-medium'>{item?.name
                    }</h6>
                    <p className='font-medium text-sm'>{item?.name
                    }</p>
                    <Link href="#" >
                      <p className='text-primary text-sm'>View More</p>

                    </Link>
                  </div>


                </div>
              )
            })}
          </div>
        </div>
        <div className='container bg-[#d6d6d6] py-5 px-5 mb-5'>
          <div className='flex justify-between'>
            <h6 className='text-base'>
              Drugs & Pharma
            </h6>
            <h6 className='text-primary text-base'>
              VIEW ALL
            </h6>
          </div>
          <div className='grid grid-cols-3 gap-4  mt-3'>
            {services.slice(0, 6)?.map((item: item) => {
              return (
                <div className='grid grid-cols-[40%_auto] bg-white p-4'>
                  <div className='relative h-[90px] w-[120px] rounded-md overflow-hidden '>

                    <Image src={`/basepath/${item?.thumbnail}`} className=" object-cover" alt="" fill />
                  </div>
                  <div>

                    <h6 className='font-medium'>{item?.name
                    }</h6>
                    <p className='font-medium text-sm'>{item?.name
                    }</p>
                    <Link href="#" >
                      <p className='text-primary text-sm'>View More</p>

                    </Link>
                  </div>


                </div>
              )
            })}
          </div>
        </div>
        <div className='container my-5 pt-[50px]'>
          <div className='grid grid-cols-[1fr_1fr]'>
            <div className='relative max-w-[530px] h-[400px] '>
              <Image src={OBJECTS} className=" object-cover" alt="" fill />
            </div>
            <div>
              <h5 className='text-center text-2xl font-semibold'>Tell us what you Need ?</h5>
              <div className='flex flex-col mt-5'>
                <input type="text" className='rounded-lg border border-[#d6d6d6] p-3 w-full mx-auto mb-5' placeholder='Enter Product Name' />
                <input type="text" className='rounded-lg border border-[#d6d6d6] p-3 w-full mx-auto mb-5' placeholder='your Full Number' />
                <input type="text" className='rounded-lg border border-[#d6d6d6] p-3 w-full mx-auto mb-5' placeholder='Mobile Number' />
                <input type="text" className='rounded-lg border border-[#d6d6d6] p-3 w-full mx-auto mb-5' placeholder='description' />
                <div className='bg-[#1F51FF] text-white p-3 rounded-lg w-full text-center'>
                  Submit Requirement
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default allcategorypages