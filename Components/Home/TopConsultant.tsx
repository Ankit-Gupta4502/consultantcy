import React from 'react'
import Button from "../UI/Button";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import img3 from "../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Styles from "../../styles/CarouselDots.module.css"
import { FaStar } from "react-icons/fa"
const TopConsultant = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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
        <div className="bg-primary pt-[100px] pb-[50px]">
            <div className="container text-white">
                <p className=" text-white mb-0">TOP CONSULTANT</p>
                <div className='flex justify-between items-center'>
                    <h4 className='text-3xl leading-[52px]'>We have industry  best consultants</h4>
                    <Button variant='outlined'>View All</Button>

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

                    dotListClass={`custom-dot-list-style !bottom-[-30px] ${Styles.dots}`}
                    itemClass="px-[10px] carousel-item-padding-40-px"
                    arrows={false}
                    renderDotsOutside={true}

                >
                    <div className='border p-3 bg-white border-white rounded-xl text-center overflow-hidden'>
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
                            <Button variant='outlined' className='text-sm !px-[18px]'>View Profile</Button>
                            <Button className='text-sm !px-2.7'>Book Now</Button>

                        </div>
                    </div>
                    <div className='border p-3 bg-white border-white rounded-xl text-center overflow-hidden'>
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
                            <Button variant='outlined' className='text-sm !px-[18px]'>View Profile</Button>
                            <Button className='text-sm !px-2.7'>Book Now</Button>

                        </div>
                    </div>
                    <div className='border p-3 bg-white border-white rounded-xl text-center overflow-hidden'>
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
                            <Button variant='outlined' className='text-sm !px-[18px]'>View Profile</Button>
                            <Button className='text-sm !px-2.7'>Book Now</Button>

                        </div>
                    </div>
                    <div className='border p-3 bg-white border-white rounded-xl text-center overflow-hidden'>
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
                            <Button variant='outlined' className='text-sm !px-[18px]'>View Profile</Button>
                            <Button className='text-sm !px-2.7'>Book Now</Button>

                        </div>
                    </div>
                    <div className='border p-3 bg-white border-white rounded-xl text-center overflow-hidden'>
                        <div className='border w-[120px] h-[120px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                            <Image src={img3} alt="" />

                        </div>

                        <div className='flex items-center justify-center' >
                            <div className="icon-wrapper mx-2 ">

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
                            <Button variant='outlined' className='text-sm !px-[18px]'>View Profile</Button>
                            <Button className='text-sm !px-2.7'>Book Now</Button>

                        </div>
                    </div>
                </Carousel>
            </div>


        </div>
    )
}

export default TopConsultant