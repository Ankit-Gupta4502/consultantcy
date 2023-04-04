import React from 'react'
import Image from 'next/image'
import img from "../../public/images/download.jpeg"
import img2 from "../../public/images/enquiry2.png"
import Input from '../UI/Input'
import Select from "../UI/Select"
import Button from '../UI/Button'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'


const Enquiry = React.memo(() => {

    return (
        <div className=' py-24'>

            <div className='container relative'>
                <div className='border rounded-tl-[80px] rounded-br-[80px] border-[#dddddd] overflow-hidden '>
                    <div className='grid md:grid-cols-[1fr_1fr] bg-primary'>
                        <div className="img-wrapper w-100 max-w-[483px] ">
                            <Image src={img2} alt='' className='w-100 rounded-br-[80px]' height={547} />
                        </div>
                        <div className='bg-primary flex flex-col justify-center  '>
                            <div className="form-wrapper max-w-[441px] w-full">
                                <h2 className='text-white'>Any Enquiry</h2>
                                <p className='text-gray/70 mb-7 text-white ' >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    tempor incididunt.
                                </p>

                                <div className='space-y-[30px]' >
                                    <Input placeholder='Full Name*' className='bg-primary !text-white placeholder-white' />
                                    <div className="flex space-x-[17px]">
                                        <Input placeholder='Email' className='bg-primary text-white placeholder-white' />
                                        <Input placeholder='Mobile' className='bg-primary text-white placeholder-white' />
                                    </div>
                                    <Select className="!bg-primary !rounded-md !text-white cursor-pointer" iconStyles="!text-white"  >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Select>
                                    <Button className='bg-white text-primary text-xs'>Send Enquery</Button>
                                </div>
                            </div></div>
                    </div>

                </div>
                <div className=' border rounded-tl-[80px] rounded-br-[80px] border-[#dddddd] overflow-hidden grid md:grid-cols-[1fr] w-full h-full bg-[#dddd] bottom-[-20px] right-[-20px] absolute z-[-1]'>
                    hi
                </div>
            </div>

        </div>
    )
})

export default Enquiry