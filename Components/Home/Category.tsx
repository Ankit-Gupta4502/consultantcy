import React, { useEffect } from 'react'
import Image from 'next/image'
import img4 from "../../public/images/Rectangle 13.png"
import { useDispatch } from 'react-redux'
import { getSectors } from '../../redux/actions/HomeAction'
import { AppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Link from 'next/link'

// Since We dont know What will be coming from api its better to use any here
interface item {
  [key: string]: any
}
const Category = () => {
  const dispatch: AppDispatch = useDispatch()
  const { IndexReducer: { categories } } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(getSectors())
  }, [])



  return (
    <div className="container py-[100px]">
      <p className='text-primary text-center'>Category</p>
      <h3 className=' text-center '>Explore our best category’s</h3>
      <p className='text-gray/70 text-center mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
        tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="md:grid-cols-3 lg:grid-cols-6  grid-cols-1 grid gap-[35px]">
        {
          categories?.slice(0, 11)?.map?.((item: item) => {
            return <Link href={`/industries/${item?.slug}`} key={item?.id} >
              <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col cursor-pointer overflow-hidden'>
                <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
                  <Image src={item?.avatar || img4} alt="" />
                </div>
                <p className='text-center'>{item?.name_english?.slice(0, 10)?.concat?.("...")}</p>
              </div>
            </Link>
          })
        }

        <Link href="#" >
          <div className='border-[1px] justify-center border-primary rounded p-3 shadow-lg flex items-center flex-col cursor-pointer overflow-hidden h-full'>
            <div className='flex justify-center items-center'>
              <h4 className='text-lg text-primary'> { categories?.length-1}+ </h4>
            </div>
          </div>
        </Link>


      </div>
    </div>
  )
}

export default Category