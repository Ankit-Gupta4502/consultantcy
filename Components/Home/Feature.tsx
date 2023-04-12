import React, { useEffect, memo } from 'react'
import Button from "../UI/Button";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import img3 from "../../public/images/Rectangle 19.png"
import img from "../../public/images/download.jpeg"
import img2 from "../../public/images/enquiry2.png"
import Image from 'next/image'
import Styles from "../../styles/CarouselDots.module.css"
import { FaStar } from "react-icons/fa"
import { getConsultants, getTopConsultants } from '../../redux/actions/HomeAction';
import {  useSelector } from 'react-redux';
import {  RootState } from '../../redux/store';
import { item } from '../../interface';
import { CiSearch } from "react-icons/ci"
import Link from 'next/link';
import CustomRightArrow from "../Enquiry/CustomButton";
import Review_bg from "../../public/images/review_bg.png"
import { useAppDispatch } from '../../hooks';
const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const responsive2 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


interface IPROPS { value?: string }
const Feature = memo(({ value = "" }: IPROPS) => {
    const dispatch = useAppDispatch()
    const { IndexReducer: {topConsultants } } = useSelector((state: RootState) => state)

    useEffect(() => {
        dispatch(getTopConsultants())
    }, [])

    return (
        <>
            <div className="relative bg-cover bg-no-repeat bg-center min-h-[466px] grid place-content-center " style={{ backgroundImage: `url('${Review_bg.src}')` }} >
                <div className="absolute w-full h-full bg-black/50 "></div>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive1}
                    ssr={true}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    arrows={false}
                    renderDotsOutside={true}
                    containerClass="carousel-container relative"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    customButtonGroup={<CustomRightArrow leftbtnStyle="border border-white !bg-transparent" rightbtnStyle="border border-white !bg-transparent" containerClass='!max-w-[1100px] left-[50%]  translate-x-[-50%] ' />}
                    dotListClass="custom-dot-list-style"
                    showDots={false}
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className='max-w-[700px] mx-auto grid place-items-center' >
                        <Image alt='' src={img} className='w-[100px] mb-7  h-[100px] rounded-full' />
                        <p className='text-white text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span className='italic text-white' > test</span>
                    </div>

                    <div className='max-w-[700px] mx-auto grid place-items-center' >
                        <Image alt='' src={img} className='w-[100px] mb-7  h-[100px] rounded-full' />
                        <p className='text-white text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span className='italic text-white' > test2</span>
                    </div>

                </Carousel>;

            </div>



            <div className="bg-light-primary pt-[100px] pb-[50px] overflow-hidden">
                <div className="container ">
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col justify-center max-w-[450px] '>

                            <h3 className=' font-semibold mb-3.5  '> <span className='text-primary'>Top</span> Consultants</h3>
                            <p className='text-gray/50 font-normal mb-14 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        
                       
                        <div className='text-center'>

                            {/* <Link href={`/our-consultants`} className='cursor-pointer font-semibold text-primary' passHref >

                                <Button className="rounded-[30px] text-xs py-3" >View All</Button>
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className=" container relative ">
                 {topConsultants?.length &&   <Carousel className='my-10'
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive2}
                        ssr={true}
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass={`carousel-container pb-4`}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass={`custom-dot-list-style !bottom-[-30px] ${Styles.dots}`}
                        itemClass="px-[10px] carousel-item-padding-40-px"
                        arrows={false}
                        renderDotsOutside={true}
                    >
                        {
                            topConsultants?.map?.((item: item) => {
                                return <div key={item.id} className={`border p-3  bg-white  rounded-xl text-center overflow-hidden   border-[#DDDDDD] max-w-[290px]`}>
                                    <div className='border w-[220px] h-[140px] bg-slate overflow-hidden border-slate rounded mx-auto'>
                                        <Image src={item?.thmbnail ? `/basepath/${item?.thmbnail}` : img3} alt="" />
                                    </div>
                                    <p className='text-primary text-base mt-2'>{item?.name ? item?.name : "tea & coffee"}</p>

                                </div>
                            })
                        }

                    </Carousel>}
                </div>


            </div >
        </>

    )
})

export default Feature