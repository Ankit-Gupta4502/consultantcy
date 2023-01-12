
import React from 'react'
import Button from "../UI/Button";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import img3 from "../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Styles from "../../styles/CarouselDots.module.css"

const LatestCourse = () => {
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
        <div className=" pt-[100px] pb-[70px]">
            <div className="container ">
                <p className=" text-primary mb-0">COURSES</p>
                <div className='flex justify-between items-center'>
                    <h4 className='text-3xl leading-[52px]'>Latest Courses</h4>
                    <Button variant='outlined'>View All</Button>

                </div>
                <p className=" text-gray/70 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                    tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>
            <div className="container relative ">
                <Carousel className='p-2 '
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
                    itemClass="px-2 carousel-item-padding-40-px"
                    arrows={false}
                    renderDotsOutside={true}
                >

                    <div className='border p-4 bg-white border-slate rounded-xl overflow-hidden'>
                        <div className='border w-100 h-[144px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                            <Image src={img3} alt="" />

                        </div>

                        <p className=' font-light text-xs mt-2'>PROFESSIONAL</p>
                        <h6 className='text-primary text-xl'>Artificial Intelligence & Data Science</h6>

                        <div className='flex justify-between mt-3'>
                            <span className='rounded-full bg-slate px-3.5 py-1 flex items-center font-light text-[16px]'>
                                ₹600/month
                            </span>
                            <Button className='text-sm px-[16px]'>Check Now</Button>

                        </div>
                    </div>
                    <div className='border p-4 bg-white border-slate rounded-xl overflow-hidden'>
                        <div className='border w-100 h-[144px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                            <Image src={img3} alt="" />

                        </div>

                        <p className=' font-light text-xs mt-2'>PROFESSIONAL</p>
                        <h6 className='text-primary text-xl'>Artificial Intelligence & Data Science</h6>

                        <div className='flex justify-between mt-3'>
                            <span className='rounded-full bg-slate px-3.5 py-1 flex items-center font-light text-[16px]'>
                                ₹600/month
                            </span>
                            <Button className='text-sm px-[16px]'>Check Now</Button>

                        </div>
                    </div>
                    <div className='border p-4 bg-white border-slate rounded-xl overflow-hidden'>
                        <div className='border w-100 h-[144px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                            <Image src={img3} alt="" />

                        </div>

                        <p className=' font-light text-xs mt-2'>PROFESSIONAL</p>
                        <h6 className='text-primary text-xl'>Artificial Intelligence & Data Science</h6>

                        <div className='flex justify-between mt-3 '>
                            <span className='rounded-full bg-slate px-3.5 py-1 flex items-center font-light text-[16px]'>
                                ₹600/month
                            </span>
                            <Button className='text-sm px-[16px] '>Check Now</Button>

                        </div>
                    </div>
                    <div className='border p-4 bg-white border-slate rounded-xl overflow-hidden'>
                        <div className='border w-100 h-[144px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                            <Image src={img3} alt="" />

                        </div>

                        <p className=' font-light text-xs mt-2'>PROFESSIONAL</p>
                        <h6 className='text-primary text-xl'>Artificial Intelligence & Data Science</h6>

                        <div className='flex justify-between mt-3'>
                            <span className='rounded-full bg-slate px-3.5 py-1 flex items-center font-light text-[16px]'>
                                ₹600/month
                            </span>
                            <Button className='text-sm px-[16px]'>Check Now</Button>

                        </div>
                    </div>
                </Carousel>
            </div>


        </div>
    )
}

export default LatestCourse