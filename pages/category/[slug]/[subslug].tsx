import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import 'react-multi-carousel/lib/styles.css'
import img3 from "../../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Button from "../../../Components/UI/Button";
import { item } from '../../../interface'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getConsultantByIndustry } from '../../../redux/actions/SubSubCategoryAction'
import { useRouter } from 'next/router'

type consultantDetails = {
    id: number,
    consultantAudioFee: string,
    consultantVideoFee: string,
    subCategory?: {
        id?: number,
        name_english?: string
    },
    consultant: {
        name?: string,
        mobile?: string,
        slug: string
        thumbnail?: string,
        id: number

    }
}
const expertpage = () => {
    const dispatch = useAppDispatch()
    const { slug, subslug } = useRouter().query
    const [search, setSearch] = React.useState("")
    const { SubSubCategory: { consultants, loading } } = useAppSelector(state => state)
    useEffect(() => {
        if (slug && subslug) {
            dispatch(getConsultantByIndustry(slug, subslug,search))
        }
    }, [slug, subslug,search])

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
                        <input value={search} onChange={({ target }) => setSearch(target.value)} type="text" placeholder='Search Expert By Name' className='rounded-r-lg  border-[#ddd] bg-[#F6F6F6] px-2 py-1 h-[44px] text-gray/70 flex focus: outline-none w-100'>
                        </input>


                    </div>
                    <div className='grid grid-cols-3 gap-4 mt-5'>

                        {

                            consultants.map((item: consultantDetails) => {
                                return <div className='border p-3 bg-white border-[#ddd] rounded-xl text-center overflow-hidden' key={item.id}>
                                    <div className='border w-[120px] h-[120px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                                        <Image src={item.consultant.thumbnail ? `/basepath/${item.consultant.thumbnail}` : img3} alt="" />

                                    </div>

                                    <div className='flex items-center justify-center' >
                                        <div className="icon-wrapper mx-2">

                                            <FaStar color='yellow' />
                                        </div>
                                        <span>4.5</span>
                                    </div>
                                    <h6 className='text-primary text-xl'>{item.consultant.name}</h6>
                                    <p className='text-sm  capitalize '> {item.subCategory.name_english} </p>
                                    <span className='rounded-full bg-slate px-3.5 py-1 font-light text-[16px]'>
                                        ₹{item.consultantAudioFee}/hourly
                                    </span>
                                    <div className='flex justify-between mt-4'>
                                        <Button variant='outlined' className='text-sm !px-[18px]'>View Profile</Button>
                                        <Button className='text-sm !px-2.7'>Book Now</Button>

                                    </div>
                                </div>
                            })
                        }



                    </div>
                </div>


            </div>

        </div>




    )
}

export default expertpage