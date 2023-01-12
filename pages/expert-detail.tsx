import React from 'react'
import { FaVideo, FaRegHandshake, FaStar, FaYoutube } from "react-icons/fa"
import { MdCall } from "react-icons/md"
import { BsFillCalendarDateFill, BsFillClockFill } from "react-icons/bs"
import img3 from "../public/images/Rectangle 19.png"
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import TopConsultant from "../Components/Home/TopConsultant"
import LatestCourse from "../Components/Home/LatestCourse"
const expertdetail = () => {
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
        <>
            <div className="container py-14">
                <div className='grid md:grid-cols-[2fr_1fr] gap-x-[10rem] '>
                    <div>
                        <h3 className='text-3xl font-medium'>FOOD PROCESSING</h3>
                        <p className='text-[#9D9898] text-xs'>French fries, Macroni, Potato chips, Roasted peanut, </p>
                        <p className='text-[#9D9898] text-[14px]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                        <div className='flex gap-x-8 mt-9'>
                            <div className='bg-primary py-2 px-4 rounded-md text-white flex gap-x-2 items-center cursor-pointer'>Video Call<span><FaVideo fontSize={20} /></span></div>
                            <div className='bg-[#EDF2F6] py-2 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer'>Audio Call<span ><MdCall color='#2A79FF' fontSize={21} /></span></div>
                            <div className='bg-[#EDF2F6] py-2 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer'>Meeting<span><FaRegHandshake fontSize={24} color='#2A79FF' /></span></div>
                        </div>
                        <div className='rounded-md py-4 px-3 shadow-lg mt-9 grid grid-cols-[1fr_1fr_1fr]'>
                            <div className='text-sm '>
                                Date
                                <div className='flex gap-x-6 mt-2'>
                                    <div className='bg-[#EDF2F6] py-1 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer text-sm'>3/12/22</div>
                                    <div className='bg-[#EDF2F6] py-1 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer'><BsFillCalendarDateFill /></div>
                                </div>
                            </div>
                            <div className='text-sm '>
                                Time
                                <div className='flex gap-x-6 mt-2'>
                                    <div className='bg-[#EDF2F6] py-1 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer text-sm'>2:00 PM</div>
                                    <div className='bg-[#EDF2F6] py-1 px-4 rounded-md text-gray/70 flex gap-x-2 items-center cursor-pointer'><BsFillClockFill /></div>
                                </div>
                            </div>
                            <div className='flex items-end justify-end'>
                                <div className='bg-primary py-2 px-7 rounded-md text-white   items-center cursor-pointer text-center'>Book Now</div>
                            </div>

                        </div>
                    </div>
                    <div className='relative mt-14 md:mt-3' >

                        <div className=' absolute top-[-38px]  left-[39%] '>
                            <Image src={img3} alt="" width={90} height={70} />
                        </div>
                        <div className='rounded-[20px] px-20 py-5 pt-[3.5rem] shadow-lg mt-5 text-center relative'>
                            <span className='rounded-full bg-slate px-3.5 py-1 font-light text-[12px] '>
                                ₹600/hourly
                            </span>
                            <h6 className='mt-2 text-xl'>Rohit Tiwari</h6>
                            <p className='text-[#9D9898] text-[12px] mt-2'>Food Processing</p>
                            <div className='grid grid-cols-[45%_10%_45%] mt-8'>
                                <div><h4 className='text-2xl text-primary font-semibold'>
                                    200
                                </h4>
                                    <p className='text-[#9D9898] text-[12px]' >Happy Clients</p> </div>
                                <div className='border-r-2 h-[55px] border-[#dddd] mx-auto'></div>
                                <div>
                                    <div className='flex  justify-center items-baseline' >
                                        <div className="icon-wrapper mx-1">

                                            <FaStar color='#FFC107' fontSize={22} />
                                        </div>
                                        <h4 className='text-2xl text-primary font-semibold'>4.5</h4>
                                    </div>
                                    <p className='text-[#9D9898] text-[12px]' >175 Reviews</p>
                                </div>

                            </div>
                            <div className='bg-[#EC4216] py-2 px-4 mt-8 rounded-md text-white flex gap-x-2 items-center cursor-pointer justify-center'><span><FaYoutube fontSize={20} /></span>Introduction</div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="bg-primary pt-[70px] pb-[50px]">
                <div className="container text-white text-center">

                    <div className=' items-center'>
                        <h4 className='text-3xl leading-[52px]'>Happy Client</h4>


                    </div>
                    <p className=" text-white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                        tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>
                <div className="container relative ">
                    <Carousel className='my-10'
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}

                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass={`carousel-container `}
                        removeArrowOnDeviceType={["tablet", "mobile"]}

                        dotListClass={`custom-dot-list-style !bottom-[-30px] `}
                        itemClass="px-[10px] carousel-item-padding-40-px"
                        arrows={false}
                        renderDotsOutside={true}

                    >

                        <div className='border  bg-white border-white rounded-xl  overflow-hidden py-5 px-3'>

                            <div className='flex items-center mb-3' >
                                <div className="icon-wrapper mx-2 flex gap-x-2">

                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#F6F6F6' />
                                </div>

                            </div>


                            <div className='p-3 pb-0'>
                                <p className='text-sm leading-6 text-gray/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className='border  bg-white border-white rounded-xl text-center overflow-hidden'>
                                <div className='flex justify-start items-center'>

                                    <div className='border w-[60px] h-[60px] bg-slate overflow-hidden border-slate  mr-3 rounded-full'>
                                        <Image src={img3} alt="" />

                                    </div>
                                    <div>
                                        <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                                        <p className='text-gray/70 text-start text-sm'>Income Tax</p>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className='border  bg-white border-white rounded-xl  overflow-hidden py-5 px-3'>

                            <div className='flex items-center mb-3' >
                                <div className="icon-wrapper mx-2 flex gap-x-2">

                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#F6F6F6' />
                                </div>

                            </div>


                            <div className='p-3 pb-0'>
                                <p className='text-sm leading-6 text-gray/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className='border  bg-white border-white rounded-xl text-center overflow-hidden'>
                                <div className='flex justify-start items-center'>

                                    <div className='border w-[60px] h-[60px] bg-slate overflow-hidden border-slate  mr-3 rounded-full'>
                                        <Image src={img3} alt="" />

                                    </div>
                                    <div>
                                        <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                                        <p className='text-gray/70 text-start text-sm'>Income Tax</p>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className='border  bg-white border-white rounded-xl  overflow-hidden py-5 px-3'>

                            <div className='flex items-center mb-3' >
                                <div className="icon-wrapper mx-2 flex gap-x-2">

                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#F6F6F6' />
                                </div>

                            </div>


                            <div className='p-3 pb-0'>
                                <p className='text-sm leading-6 text-gray/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className='border  bg-white border-white rounded-xl text-center overflow-hidden'>
                                <div className='flex justify-start items-center'>

                                    <div className='border w-[60px] h-[60px] bg-slate overflow-hidden border-slate  mr-3 rounded-full'>
                                        <Image src={img3} alt="" />

                                    </div>
                                    <div>
                                        <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                                        <p className='text-gray/70 text-start text-sm'>Income Tax</p>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className='border  bg-white border-white rounded-xl  overflow-hidden py-5 px-3'>

                            <div className='flex items-center mb-3' >
                                <div className="icon-wrapper mx-2 flex gap-x-2">

                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#FFC107' />
                                    <FaStar color='#F6F6F6' />
                                </div>

                            </div>


                            <div className='p-3 pb-0'>
                                <p className='text-sm leading-6 text-gray/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className='border  bg-white border-white rounded-xl text-center overflow-hidden'>
                                <div className='flex justify-start items-center'>

                                    <div className='border w-[60px] h-[60px] bg-slate overflow-hidden border-slate  mr-3 rounded-full'>
                                        <Image src={img3} alt="" />

                                    </div>
                                    <div>
                                        <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                                        <p className='text-gray/70 text-start text-sm'>Income Tax</p>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </Carousel>
                </div>


            </div>
            <TopConsultant value="expertdetail"/>
            <LatestCourse value="latestcourse"/>
        </>

    )
}

export default expertdetail