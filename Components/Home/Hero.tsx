import React, { useState, useEffect } from 'react'
import img from "../../public/images/Ellipse 6.png"
import img2 from "../../public/images/Group 22.png"
import img3 from "../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Button from '../UI/Button'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { item } from '../../interface'
import { getIndustries } from '../../redux/actions/IndustryAction'
import { toast } from '../UI/Toast'
const Hero = () => {
    const { IndexReducer: { categories }, IndustriesReducer: { categories: industries } } = useSelector((state: RootState) => state)
    const dispatch: AppDispatch = useDispatch()
    const [sector, setSector] = useState("")
    useEffect(() => {
        if (sector) {
            dispatch(getIndustries(sector))
        }
    }, [sector])





    return (
        <div className=' bg-light-primary relative overflow-hidden'>
            <div className="absolute top-[-75px] left-0 ...">
                <Image src={img} alt="" />
            </div>
            <div className="absolute bottom-[-120px] left-[-10px] ...">
                <Image src={img2} alt="" />
            </div>
            <div className="container">

                <div className="grid grid-cols-1 md:gap-0 gap-2 mt-8 md:mt-0  md:grid-cols-[50%_10%_40%]">
                    <div className='flex flex-col justify-center '>
                        <h1 className='text-5xl mb-5 font-medium'><span className='text-primary'>Explore</span> real consultant<br />
                            near you !</h1>
                        <p className='text-gray/70 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='border-[1px] border-white md:bg-white  rounded'>
                            <div className="grid md:grid-cols-[35%_35%_30%] items-center grid-cols-1 gap-x-2 ">
                                <div className=''><div className=" flex md:space-x-4 cursor-pointer text-gray/70">
                                    <select name="cars" id="cars" className=' bg-white focus: outline-none cursor-pointer w-full p-4' value={sector} onChange={((({ target: { value } }) => setSector(value)))}>

                                        <option value="">Select Category</option>
                                        {
                                            categories.map((item: item) => {
                                                return <option value={item?.slug} key={item.id}>{item?.name_english}</option>
                                            })
                                        }
                                    </select>

                                </div></div>
                                <div className=''>
                                    <div className="flex space-x-4 cursor-pointer text-gray/70 ">
                                        <select name="cars" id="cars" className='focus: outline-none bg-white cursor-pointer w-full p-4'>
                                            <option value="">Select Industry</option>
                                            {
                                                industries.map((item: item) => {
                                                    return <option value={item?.slug} key={item.id}>{item?.name_english}</option>
                                                })
                                            }
                                        </select>


                                    </div></div>
                                <div className='text-center'>
                                    <Button onClick={() => toast.error("Success")} >Book Now</Button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div></div>
                    <div className='py-[38px]'>
                        <Image src={img3} alt="" height={450} className="ml-auto" />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Hero