import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa"
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'
import img4 from "../../public/images/Rectangle 13.png"
import { getIndustries } from '../../redux/actions/IndustryAction'
import { getSectors } from '../../redux/actions/HomeAction'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { useRouter } from 'next/router'
import Link from 'next/link'
const expertcategory = () => {
    const dispatch = useAppDispatch()
    const { slug } = useRouter().query
    const [search, setSearch] = React.useState('')
    const [hit, setHit] = React.useState(false)
    const { IndustriesReducer: { categories, loading }, IndexReducer: { categories: sectors } } = useAppSelector(state => state)
    useEffect(() => {
        dispatch(getSectors())
    }, [])

    useEffect(() => {
        if (slug) {
            dispatch(getIndustries(slug, search))
        }
    }, [slug])


    useEffect(() => {
        if (search) {
            dispatch(getIndustries(slug, search))
        }
    }, [search])



    return (


        <div className="container">
            <div className='  grid md:grid-cols-[.8fr_3.2fr] gap-[23px]  py-[40px] items-start'>
                <div className='rounded  border-2 border-[#ddd] cursor-pointer overflow-hidden '>
                    {
                        sectors.map((item: { name_english?: string, id: number, slug: string }) => {
                            return <Link href={`/category/${item.slug}`} key={item.id} className={` ${item.slug === slug ? "text-primary" : ""} block w-full p-2 px-5 bg-[#F6F6F6] text-base`}>
                                {item?.name_english}
                            </Link>
                        })
                    }



                </div>

                <div>
                    <div className='grid md:grid-cols-[5%_95%]'>
                        <div className='rounded-l-lg  border-[#dddd] bg-[#F6F6F6] px-2 py-1 h-[44px] text-gray/70 flex focus: outline-none w-100 relative items-center '>
                            <FaSearch className='mx-auto ' color='text-gray/60' />
                        </div>
                        <input value={search} onChange={({ target }) => {
                            setSearch(target.value)
                        }} type="text" placeholder='Search Expert By Name' className='rounded-r-lg  border-[#ddd] bg-[#F6F6F6] px-2 py-1 h-[44px] text-gray/70 flex focus: outline-none w-100' />

                    </div>
                    <div className='grid grid-cols-4 gap-4 mt-5'>

                        {
                            categories?.map?.((item: { name_english?: string, id: number, slug?: string, avatar_english?: string }) => {
                                return <div key={item.id} className='border-[1px] border-[#EEEEEE] rounded-xl px-3 py-6 shadow-lg text-center'>

                                    <Image src={`/basepath/${item?.avatar_english}`} className='rounded-full  object-cover w-14  h-14 mb-3 block mx-auto' width={100} height={150} alt="" />

                                    <Link href={`/category/${slug}/${item.slug}`} className='text-center'>{item.name_english}</Link>
                                </div>
                            })
                        }
                    </div>
                </div>


            </div>

        </div>




    )
}

export default expertcategory