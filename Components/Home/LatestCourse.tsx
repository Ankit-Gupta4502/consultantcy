
import React, { memo } from 'react'
import Button from "../UI/Button";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import img3 from "../../public/images/course.png"
import Image from 'next/image'
import Styles from "../../styles/CarouselDots.module.css"
import Link from "next/link";
import { CiSearch } from "react-icons/ci"
interface IPROPS { value?: string }
const LatestCourse = memo(({ value = "" }: IPROPS) => {
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
        <div className={`pt-[70px] pb-[70px] bg-white`} >
            <div className="container ">
                <div className='grid grid-cols-[40%_10%_30%_20%]'>
                    <div className='flex flex-col justify-center'>

                        <h3 className=' font-semibold mb-3.5  '>Latest <span className='text-primary'>100+</span> Courses</h3>
                        <p className='text-gray/50 font-normal mb-14 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>

                    </div>
                    <div className='text-end'>
                        <div className='grid md:grid-cols-[85%_15%] '>
                            <input type="text" placeholder='Search from 1250+ courses' className='rounded-l-[30px]  border-[#ddd] bg-[#F6F6F6] px-5 py-2  text-gray/70 flex focus: outline-none w-100'>
                            </input>
                            <div className='rounded-r-[30px]  border-[#dddd] bg-[#F6F6F6] px-2 py-2  text-gray/70 flex focus: outline-none w-100 relative items-center '>
                                <CiSearch className='mx-auto ' color='text-gray/60' size={23} />
                            </div>



                        </div>
                    </div>
                    <div className='text-center'>

                        <Link href={`/our-consultants`} className='cursor-pointer font-semibold text-primary
       ' passHref >

                            <Button className="rounded-[30px] text-xs py-3" >View All</Button>
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-[1fr_1fr_1fr] gap-x-4'>
                    <div className='border rounded-lg border-gray/30 overflow-hidden'>
                        <div className='grid grid-cols-[.3fr_.7fr] '>
                            <div className='relative'>
                                <Image src={img3} alt="img not found" />
                            </div>
                            <div className='p-2'>
                                <h5>
                                    Artificial Intelligence & Data Science
                                </h5>
                                <p className='text-gray/50 font-normal  text-xs'>12 Lectures</p>
                                <div className='flex justify-between  '>
                                    <div>
                                        <p className='text-primary font-normal  text-xs'>Add to cart</p>
                                    </div>
                                    <div>
                                        <p className='text-gray/50 font-normal  text-xs text-end'>12:04</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-lg border-gray/30 overflow-hidden'>
                        <div className='grid grid-cols-[.3fr_.7fr] '>
                            <div className='relative'>
                                <Image src={img3} alt="img not found" />
                            </div>
                            <div className='p-2'>
                                <h5>
                                    Artificial Intelligence & Data Science
                                </h5>
                                <p className='text-gray/50 font-normal  text-xs'>12 Lectures</p>
                                <div className='flex justify-between  '>
                                    <div>
                                        <p className='text-primary font-normal  text-xs'>Add to cart</p>
                                    </div>
                                    <div>
                                        <p className='text-gray/50 font-normal  text-xs text-end'>12:04</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-lg border-gray/30 overflow-hidden'>
                        <div className='grid grid-cols-[.3fr_.7fr] '>
                            <div className='relative'>
                                <Image src={img3} alt="img not found" />
                            </div>
                            <div className='p-2'>
                                <h5>
                                    Artificial Intelligence & Data Science
                                </h5>
                                <p className='text-gray/50 font-normal  text-xs'>12 Lectures</p>
                                <div className='flex justify-between  '>
                                    <div>
                                        <p className='text-primary font-normal  text-xs'>Add to cart</p>
                                    </div>
                                    <div>
                                        <p className='text-gray/50 font-normal  text-xs text-end'>12:04</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container relative ">
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
                            <Button size='sm' className='text-sm'>Check Now</Button>


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
                            <Button size='sm' className='text-sm'>Check Now</Button>


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
                            <Button size='sm' className='text-sm'>Check Now</Button>

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
                            <Button size='sm' className='text-sm'>Check Now</Button>


                        </div>
                    </div>
                </Carousel>
            </div> */}


        </div>
    )
})

export default LatestCourse