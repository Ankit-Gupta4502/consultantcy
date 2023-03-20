import React, { useEffect } from 'react'
import { FaStar } from "react-icons/fa"
import { AiOutlineHome } from "react-icons/ai"
import img3 from "../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import TopConsultant from "../../Components/Home/TopConsultant"
import LatestCourse from "../../Components/Home/LatestCourse"
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { BsFillEmojiSmileFill } from "react-icons/bs"
import { RiMessage2Fill } from "react-icons/ri"
import { useRouter } from 'next/router'
import { getConsultantDetails } from "../../redux/actions/HomeAction"
import { MdVideocam, MdCall } from "react-icons/md"
import { FaHandshake } from "react-icons/fa"
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
const expertdetail = () => {
    const dispatch: AppDispatch = useDispatch()
    const { slug } = useRouter().query
    const { IndexReducer: { consultantDetails } } = useSelector((state: RootState) => state)

    useEffect(() => {
        if (slug) {
            dispatch(getConsultantDetails(slug))
        }
    }, [slug])
console.log(consultantDetails);


    return (
        <div className=' bg-[#D9D9D94D]'>
            <div className="container grid md:grid-cols-[auto_minmax(294px,1fr)] gap-x-5 py-16 ">
                <div className='bg-white px-[50px] py-11 rounded-[5px] grid md:grid-cols-[200px_auto] gap-x-8' >
                    <div>
                        <Image src={img3} alt="consultant" />
                        <div className='bg-primary/5 p-[14px] mt-6 rounded-[5px]' >

                            <span className='py-2 bg-[#F1F1F1] text-[#202020B2] text-sm block mx-auto w-max rounded-3xl px-4'>
                                600/hourly
                            </span>

                            <div className="mt-8">
                                <div className="flex mb-4 items-start justify-between">
                                    <div className='text-primary' >
                                        <BsFillEmojiSmileFill size={24} />
                                    </div>

                                    <div>
                                        <span className="font-bold text-xl">
                                            200
                                        </span>
                                        <span className="block text-gray/50">
                                            happy clients
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start justify-between">
                                    <div className='text-primary' >
                                        <RiMessage2Fill size={24} />
                                    </div>

                                    <div>
                                        <span className="font-bold text-xl">
                                            200
                                        </span>
                                        <span className="block text-gray/50">
                                            happy clients
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-medium'> {consultantDetails?.['name']} </h3>
                        <p className='text-primary' > Food Processing </p>
                        <p className='text-[#9D9898] text-xs'>French fries, Macroni, Potato chips, Roasted peanut, </p>
                        <p className='text-[#9D9898] text-[14px]'> {consultantDetails?.['consultant_profile']?.['ProfileSummary']} </p>
                        <div className='w-full mt-5' >
                            <div className='bg-primary text-center py-2' >

                                <span className="text-center text-white rounded-xl py-2" > About Me</span>
                            </div>

                            <div className='flex flex-wrap' >
                                <span className='py-3 font-bold fw-bold border-x border-b border-[#D5D5D5] text-center w-2/4 text-sm' >
                                    Experience
                                </span>
                                <span className='py-3 text-sm border-r border-b text-gray/50 border-[#D5D5D5] text-center w-2/4' >
                                    10 year in food processing
                                </span>
                                <span className='py-3 text-sm font-bold border-x border-b border-[#D5D5D5] text-center w-2/4' >
                                    Experience
                                </span>

                                <span className='py-3 text-sm border-r text-gray/50 border-b border-[#D5D5D5] text-center w-2/4' >
                                    10 year in food processing
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-white rounded-[5px] overflow-hidden relative ' >
                    <div className="bg-primary flex items-center  justify-between py-[13px] px-3">
                        <div className="flex space-x-3 items-center ">
                            <div className='w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-primary'>
                                <AiOutlineHome />
                            </div>
                            <span className='text-white text-sm' >
                                Book Appointment
                            </span>
                        </div>
                        <span className='text-white text-sm' >
                            5000 fee
                        </span>
                    </div>

                    <div className="px-3 py-8 space-y-7 ">
                        <div className="flex items-center justify-between">
                            <div className="flex space-x-4 items-center">
                                <div className="w-[30px] text-primary grid place-items-center rounded-full bg-primary/10 h-[30px]" >
                                    <MdVideocam />
                                </div>
                                <span className='text-[12px]' >
                                    Video Call
                                </span>
                            </div>

                            <span className='text-[12px]' >
                                10 mintue
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex space-x-4 items-center">
                                <div className="w-[30px] text-primary grid place-items-center rounded-full bg-primary/10 h-[30px]" >
                                    <MdCall />
                                </div>
                                <span className='text-[12px]' >
                                    Audio Call
                                </span>
                            </div>

                            <span className='text-[12px]' >
                                10 mintue
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-black/20 pb-8">
                            <div className="flex space-x-4 items-center">
                                <div className="w-[30px] text-primary grid place-items-center rounded-full bg-primary/10 h-[30px]" >
                                    <FaHandshake />
                                </div>
                                <span className='text-[12px]' >
                                    Meeting
                                </span>
                            </div>

                            <span className='text-[12px]' >
                                10 mintue
                            </span>
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
            <TopConsultant value="expertdetail" />
            <LatestCourse value="latestcourse" />
        </div>

    )
}

export default expertdetail