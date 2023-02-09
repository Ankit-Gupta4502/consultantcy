import React,{memo} from 'react'
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import { FaStar } from "react-icons/fa"
import img3 from "../../public/images/Rectangle 19.png"
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
const ClientReview = memo(() => {
    return (
        <div className=" py-[70px] bg-[#F1F1F1] pb-[50px]">
            <div className="container">
                <p className='text-primary text-center'>Clients Review</p>
                <h3 className=' text-center '>Check what our user says</h3>
                <p className='text-gray/70 text-center mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                    tempor incididunt ut labore et dolore magna aliqua.</p>
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
                        itemClass="px-[25px] carousel-item-padding-40-px"
                        arrows={false}
                        renderDotsOutside={true}

                    >
                        <div className='border  bg-white border-white rounded-xl  overflow-hidden'>
                            <div className='border p-3 bg-white border-white rounded-xl text-center overflow-hidden'>
                                <div className='flex justify-start items-center'>

                                    <div className='border w-[65px] h-[65px] bg-slate overflow-hidden border-slate  mr-3 rounded-full'>
                                        <Image src={img3} alt="" />

                                    </div>
                                    <div>
                                        <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                                        <p className='text-gray/70 text-start text-sm'>Income Tax</p>
                                    </div>

                                </div>


                            </div>
                            <div className='border-b-[1px] text-[#dddd] h-px  '>

                            </div>
                            <div className='p-3 pb-0'>
                                <p className='text-sm leading-6 text-gray/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='flex items-center mb-3' >
                                <div className="icon-wrapper mx-2">

                                    <FaStar color='yellow' />
                                </div>
                                <span className='text-gray/70'>4.5</span>
                            </div>

                        </div>
                        <div className='border  bg-white border-white rounded-xl  overflow-hidden'>
                            <div className='border p-3 bg-white border-white rounded-xl text-center overflow-hidden'>
                                <div className='flex justify-start items-center'>

                                    <div className='border w-[65px] h-[65px] bg-slate overflow-hidden border-slate  mr-3 rounded-full'>
                                        <Image src={img3} alt="" />

                                    </div>
                                    <div>
                                        <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                                        <p className='text-gray/70 text-start text-sm'>Income Tax</p>
                                    </div>

                                </div>


                            </div>
                            <div className='border-b-[1px] text-[#dddd] h-px  '>

                            </div>
                            <div className='p-3 pb-0'>
                                <p className='text-sm leading-6 text-gray/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='flex items-center mb-3' >
                                <div className="icon-wrapper mx-2">

                                    <FaStar color='yellow' />
                                </div>
                                <span className='text-gray/70'>4.5</span>
                            </div>

                        </div>
                        <div className='border  bg-white border-white rounded-xl  overflow-hidden'>
                            <div className='border p-3 bg-white border-white rounded-xl text-center overflow-hidden'>
                                <div className='flex justify-start items-center'>

                                    <div className='border w-[65px] h-[65px] bg-slate overflow-hidden border-slate  mr-3 rounded-full'>
                                        <Image src={img3} alt="" />

                                    </div>
                                    <div>
                                        <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                                        <p className='text-gray/70 text-start text-sm'>Income Tax</p>
                                    </div>

                                </div>


                            </div>
                            <div className='border-b-[1px] text-[#dddd] h-px  '>

                            </div>
                            <div className='p-3 pb-0'>
                                <p className='text-sm leading-6 text-gray/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='flex items-center mb-3' >
                                <div className="icon-wrapper mx-2">

                                    <FaStar color='yellow' />
                                </div>
                                <span className='text-gray/70'>4.5</span>
                            </div>

                        </div>
                        <div className='border  bg-white border-white rounded-xl  overflow-hidden'>
                            <div className='border p-3 bg-white border-white rounded-xl text-center overflow-hidden'>
                                <div className='flex justify-start items-center'>

                                    <div className='border w-[65px] h-[65px] bg-slate overflow-hidden border-slate  mr-3 rounded-full'>
                                        <Image src={img3} alt="" />

                                    </div>
                                    <div>
                                        <h6 className='text-primary text-xl'>Rohit Tiwari</h6>
                                        <p className='text-gray/70 text-start text-sm'>Income Tax</p>
                                    </div>

                                </div>


                            </div>
                            <div className='border-b-[1px] text-[#dddd] h-px  '>

                            </div>
                            <div className='p-3 pb-0'>
                                <p className='text-sm leading-6 text-gray/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='flex items-center mb-3' >
                                <div className="icon-wrapper mx-2">

                                    <FaStar color='yellow' />
                                </div>
                                <span className='text-gray/70'>4.5</span>
                            </div>

                        </div>







                    </Carousel>
                </div>
            </div>

        </div>
    )
})

export default ClientReview