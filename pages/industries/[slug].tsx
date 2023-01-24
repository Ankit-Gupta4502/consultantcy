import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import img4 from "../../public/images/Rectangle 13.png"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { getIndustries } from '../../redux/actions/IndustryAction'
import { getSectors } from "../../redux/actions/HomeAction"
import { item } from '../../interface'
const industries = () => {
    const { slug } = useRouter().query
    const dispatch: AppDispatch = useDispatch()
    const router = useRouter();
    useEffect(() => {
        if (slug) {
            dispatch(getIndustries(slug))
        }
    }, [slug])
    useEffect(() => {
        dispatch(getSectors())
    }, [])
    const { IndustriesReducer: { categories: industries, loading } } = useSelector((state: RootState) => state)
    const { IndexReducer: { categories } } = useSelector((state: RootState) => state)

    return (
        <div className="container">
            <div className='  grid md:grid-cols-[.8fr_3.2fr] gap-[23px]  py-[40px] items-start'>
                <div className='rounded  border-2 border-[#ddd] cursor-pointer overflow-hidden '>
                    <div className=' p-2 px-5 bg-[#F6F6F6] text-base'>
                        Category
                    </div>
                    <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                    {categories.map((item:item) => {
                        return (<div key={item.id}>
                            <div className={` p-2 px-5  ${slug === item?.slug ? "text-primary" : "text-gray/70"}  text-base`}>
                                {item?.name_english}
                            </div>
                            <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                        </div>)
                    })}

                </div>

                <div>
                    <div className='grid md:grid-cols-[5%_95%]'>
                        <div className='rounded-l-lg  border-[#dddd] bg-[#F6F6F6] px-2 py-0.5 h-[44px] text-gray/70 flex focus: outline-none w-100 relative items-center '>
                            <FaSearch className='mx-auto ' color='text-gray/60' />
                        </div>
                        <input type="text" placeholder='Search Expert By Name' className='rounded-r-lg  border-[#ddd] bg-[#F6F6F6] px-2 py-1 h-[44px] text-gray/70 flex focus: outline-none w-100'>
                        </input>
                    </div>
                    <div className='grid grid-cols-4 gap-4 mt-6'>
                        <Link href="#"  >
                            <div className='border-[1px] min-h-[200px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col justify-center cursor-pointer overflow-hidden'>
                                <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-4 flex justify-center items-center'>
                                    <Image src={img4} alt="" />
                                </div>
                                <p className='text-center '>Test</p>
                            </div>
                        </Link>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default industries