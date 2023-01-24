import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import img4 from "../../public/images/Rectangle 13.png"
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { getIndustries } from '../../redux/actions/IndustryAction'
const industries = () => {
    const { slug } = useRouter().query
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        if (slug) {
            dispatch(getIndustries(slug))
        }
    }, [slug])

    return (
        <div className="container">
            <div className='  grid md:grid-cols-[.8fr_3.2fr] gap-[23px]  py-[40px] items-start'>
                <div className='rounded  border-2 border-[#ddd] cursor-pointer overflow-hidden '>
                    <div className=' p-2 px-5 bg-[#F6F6F6] text-base'>
                        Category
                    </div>
                    <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                    <div className=' p-2 px-5 text-gray/70 text-base'>
                        Income Tax
                    </div>
                    <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                    <div className=' p-2 px-5 text-gray/70 text-base'>
                        Franchise
                    </div>
                    <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                    <div className=' p-2 px-5 text-gray/70 text-base'>
                        GST
                    </div>
                    <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                    <div className=' p-2 px-5 text-gray/70 text-base'>
                        Food Processing
                    </div>
                    <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                    <div className=' p-2 px-5 text-gray/70 text-base'>
                        Food & Beverage
                    </div>
                    <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                    <div className=' p-2 px-5 text-gray/70 text-base'>
                        Home Based Products
                    </div>
                    <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                    <div className=' p-2 px-5 text-gray/70 text-base'>
                        Food Processing
                    </div>
                    <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
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