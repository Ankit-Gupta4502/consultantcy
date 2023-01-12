import React from 'react'
import { FaSearch } from "react-icons/fa"
import TopConsultant from '../Components/Home/TopConsultant'
import { FaStar } from "react-icons/fa"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import img3 from "../public/images/Rectangle 19.png"
import Image from 'next/image'
import Button from "../Components/UI/Button";
const expertpage = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (


        <div className="container">
            <div className='  grid md:grid-cols-[1fr_3fr] gap-[23px]  py-[40px] items-start'>
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
                        <div className='rounded-l-lg  border-[#dddd] bg-[#F6F6F6] px-2 py-1 h-[50px] text-gray/70 flex focus: outline-none w-100 relative items-center '>
                            <FaSearch className='mx-auto ' color='text-gray/60' />
                        </div>
                        <input type="text" placeholder='Search Expert By Name' className='rounded-r-lg  border-[#ddd] bg-[#F6F6F6] px-2 py-1 h-[50px] text-gray/70 flex focus: outline-none w-100'>
                        </input>


                    </div>
                    <div className='grid grid-cols-3 gap-4 mt-5'>
                        <div className='border p-3 bg-white border-[#ddd] rounded-xl text-center overflow-hidden'>
                            <div className='border w-[120px] h-[120px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                                <Image src={img3} alt="" />

                            </div>

                            <div className='flex items-center justify-center' >
                                <div className="icon-wrapper mx-2">

                                    <FaStar color='yellow' />
                                </div>
                                <span>4.5</span>
                            </div>
                            <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                            <p className='text-sm'>Income Tax</p>
                            <span className='rounded-full bg-slate px-3.5 py-1 font-light text-[16px]'>
                                ₹600/hourly
                            </span>
                            <div className='flex justify-between mt-4'>
                                <Button variant='outlined' className='text-sm !px-[18px] !py-[10px]'>View Profile</Button>
                                <Button className='text-sm !px-[26px]'>Book Now</Button>

                            </div>
                        </div>
                        <div className='border p-3 bg-white border-[#ddd] rounded-xl text-center overflow-hidden'>
                            <div className='border w-[120px] h-[120px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                                <Image src={img3} alt="" />

                            </div>

                            <div className='flex items-center justify-center' >
                                <div className="icon-wrapper mx-2">

                                    <FaStar color='yellow' />
                                </div>
                                <span>4.5</span>
                            </div>
                            <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                            <p className='text-sm'>Income Tax</p>
                            <span className='rounded-full bg-slate px-3.5 py-1 font-light text-[16px]'>
                                ₹600/hourly
                            </span>
                            <div className='flex justify-between mt-4'>
                                <Button variant='outlined' className='text-sm !px-[18px] !py-[10px]'>View Profile</Button>
                                <Button className='text-sm !px-[26px]'>Book Now</Button>

                            </div>
                        </div>
                        <div className='border p-3 bg-white border-[#ddd] rounded-xl text-center overflow-hidden'>
                            <div className='border w-[120px] h-[120px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                                <Image src={img3} alt="" />

                            </div>

                            <div className='flex items-center justify-center' >
                                <div className="icon-wrapper mx-2">

                                    <FaStar color='yellow' />
                                </div>
                                <span>4.5</span>
                            </div>
                            <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                            <p className='text-sm'>Income Tax</p>
                            <span className='rounded-full bg-slate px-3.5 py-1 font-light text-[16px]'>
                                ₹600/hourly
                            </span>
                            <div className='flex justify-between mt-4'>
                                <Button variant='outlined' className='text-sm !px-[18px] !py-[10px]'>View Profile</Button>
                                <Button className='text-sm !px-[26px]'>Book Now</Button>

                            </div>
                        </div>
                        <div className='border p-3 bg-white border-[#ddd] rounded-xl text-center overflow-hidden'>
                            <div className='border w-[120px] h-[120px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                                <Image src={img3} alt="" />

                            </div>

                            <div className='flex items-center justify-center' >
                                <div className="icon-wrapper mx-2">

                                    <FaStar color='yellow' />
                                </div>
                                <span>4.5</span>
                            </div>
                            <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                            <p className='text-sm'>Income Tax</p>
                            <span className='rounded-full bg-slate px-3.5 py-1 font-light text-[16px]'>
                                ₹600/hourly
                            </span>
                            <div className='flex justify-between mt-4'>
                                <Button variant='outlined' className='text-sm !px-[18px] !py-[10px]'>View Profile</Button>
                                <Button className='text-sm !px-[26px]'>Book Now</Button>

                            </div>
                        </div>
                        <div className='border p-3 bg-white border-[#ddd] rounded-xl text-center overflow-hidden'>
                            <div className='border w-[120px] h-[120px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                                <Image src={img3} alt="" />

                            </div>

                            <div className='flex items-center justify-center' >
                                <div className="icon-wrapper mx-2">

                                    <FaStar color='yellow' />
                                </div>
                                <span>4.5</span>
                            </div>
                            <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                            <p className='text-sm'>Income Tax</p>
                            <span className='rounded-full bg-slate px-3.5 py-1 font-light text-[16px]'>
                                ₹600/hourly
                            </span>
                            <div className='flex justify-between mt-4'>
                                <Button variant='outlined' className='text-sm !px-[18px] !py-[10px]'>View Profile</Button>
                                <Button className='text-sm !px-[26px]'>Book Now</Button>

                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>




    )
}

export default expertpage