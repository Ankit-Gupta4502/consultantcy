import React from 'react'
import Image from 'next/image'
import img3 from "../../public/images/john.png"
import { FaStar } from "react-icons/fa"
import Link from 'next/link'
import Button from '../UI/Button'
const ConsultantCard = ({ name = "", thumbnail = '', sector = "", rating = "", price = "", slug = "", showStatus = false }:
    {
        name?: string, thumbnail?: string, sector?: string,
        rating?: string, price?: string,
        slug?: string, value?: string, showStatus?: boolean
    }) => {
    return (
        <div className={`border p-3  bg-white  rounded-xl text-center overflow-hidden   border-primary max-w-[290px]`}>
            <div className='grid grid-cols-[25%_50%_25%]'>
                {!showStatus ? <button className='flex border border-green text-[green] bg-light-primary rounded h-6 text-xs mx-auto px-2  items-center'>
                    online
                </button> : <div></div>}


                <div className='border w-[120px] mb-2 h-[120px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                    <Image className='object-cover w-full h-full' src={img3} alt="" />
                </div>
                <div></div>
            </div>


            <div className='flex items-center justify-center' >
                <div className="icon-wrapper mx-2">

                    <FaStar color='yellow' />
                </div>
                <span>{rating || 4.5}</span>
            </div>
            <h6 className='text-primary text-xl'>{name || "John Doe "}</h6>
            <p className='text-sm'> {sector || "Food Processing"}</p>
            <span className='rounded bg-slate px-3.5 py-[6px] font-light  text-xs my-2'>
                {price || "500 hourly"}
            </span>
            <div className='flex justify-between mt-4'>
                <Link href={`/consultant/${slug}`} >
                    <Button variant='outlined' className='text-xs !px-5 !py-3 rounded-[30px]'>View Profile</Button>
                </Link>

                <Button className='text-xs !px-7 !py-3 rounded-[30px]'>Book Now</Button>

            </div>
        </div>
    )
}

export default ConsultantCard