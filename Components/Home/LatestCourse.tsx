
import React,{memo} from 'react'
import Button from "../UI/Button";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import img3 from "../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Styles from "../../styles/CarouselDots.module.css"

interface IPROPS { value?: string }
const LatestCourse = memo(({ value="" }: IPROPS) => {
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
        <div className={`pt-[70px] pb-[70px] ${value == "latestcourse" ? "bg-primary" : "bg-white"}`} >
            <div className="container ">
                {value !== "latestcourse" ? <p className=" text-primary mb-0">COURSES</p> : null}
                {value == "latestcourse" ? <h4 className={`text-white text-center text-3xl leading-[52px]`}>Experts Talk</h4> : <div className='flex justify-between items-center'>
                    <h4 className='text-3xl leading-[52px]'>Latest Courses</h4>
                    <Button variant='outlined'>View All</Button>
                </div>}


                <p className={`${value == "latestcourse" ? "text-white text-center" : "text-black"} mb-7`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
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
                            <span className='rounded-full bg-slate px-2.5 py-1 flex items-center font-light text-sm'>
                                ₹600/month
                            </span>
                            <Button size='sm'  className='text-sm'>Check Now</Button>


                        </div>
                    </div>
                    <div className='border p-4 bg-white border-slate rounded-xl overflow-hidden'>
                        <div className='border w-100 h-[144px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                            <Image src={img3} alt="" />

                        </div>

                        <p className=' font-light text-xs mt-2'>PROFESSIONAL</p>
                        <h6 className='text-primary text-xl'>Artificial Intelligence & Data Science</h6>

                        <div className='flex justify-between mt-3'>
                            <span className='rounded-full bg-slate px-2.5 py-1 flex items-center font-light text-sm'>
                                ₹600/month
                            </span>
                            <Button size='sm'  className='text-sm'>Check Now</Button>


                        </div>
                    </div>
                    <div className='border p-4 bg-white border-slate rounded-xl overflow-hidden'>
                        <div className='border w-100 h-[144px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                            <Image src={img3} alt="" />

                        </div>

                        <p className=' font-light text-xs mt-2'>PROFESSIONAL</p>
                        <h6 className='text-primary text-xl'>Artificial Intelligence & Data Science</h6>

                        <div className='flex justify-between mt-3 '>
                            <span className='rounded-full bg-slate px-2.5 py-1 flex items-center font-light text-sm'>
                                ₹600/month
                            </span>
                            <Button size='sm'  className='text-sm'>Check Now</Button>

                        </div>
                    </div>
                    <div className='border p-4 bg-white border-slate rounded-xl overflow-hidden'>
                        <div className='border w-100 h-[144px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                            <Image src={img3} alt="" />

                        </div>

                        <p className=' font-light text-xs mt-2'>PROFESSIONAL</p>
                        <h6 className='text-primary text-xl'>Artificial Intelligence & Data Science</h6>

                        <div className='flex justify-between mt-3'>
                            <span className='rounded-full bg-slate px-2.5 py-1 flex items-center font-light text-sm'>
                                ₹600/month
                            </span>
                            <Button size='sm'  className='text-sm'>Check Now</Button>


                        </div>
                    </div>
                </Carousel>
            </div>


        </div>
    )
})

export default LatestCourse