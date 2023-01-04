import React from 'react'
import img from "../../public/images/Ellipse 6.png"
import img2 from "../../public/images/Group 22.png"
import img3 from "../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Button from '../UI/Button'
import { FaAngleDown } from 'react-icons/fa'
const Hero = () => {
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
                        <div className='border-[1px] border-white bg-white rounded'>
                            <div className="grid grid-cols-[35%_35%_30%] items-center">
                                <div className='px-4 py-4'><div className="flex space-x-4 cursor-pointer text-gray/70">
                                    <span>
                                        Select Category
                                    </span>
                                    <span className=' flex items-center' ><FaAngleDown fontSize={20} /></span>
                                </div></div>
                                <div className='px-4 py-4'><div className="flex space-x-4 cursor-pointer text-gray/70">
                                    <span>

                                        Select Industry
                                    </span>
                                    <span className=' flex items-center' ><FaAngleDown fontSize={20} /></span>
                                </div></div>
                                <div className='text-center'>
                                    <Button >Book Now</Button>
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