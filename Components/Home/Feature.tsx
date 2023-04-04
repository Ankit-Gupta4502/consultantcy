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
import { getConsultants } from '../../redux/actions/HomeAction';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { item } from '../../interface';
import { CiSearch } from "react-icons/ci"
import Link from 'next/link';
import CustomRightArrow from "../../Components/Enquiry/customRightArrow";
const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
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
interface IPROPS { value?: string }
const Feature = memo(({ value = "" }: IPROPS) => {
    const dispatch: AppDispatch = useDispatch()
    const { IndexReducer: { consultants } } = useSelector((state: RootState) => state)

    useEffect(() => {
        dispatch(getConsultants())
    }, [])

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
        <>
            <div className="  relative ">
                <Carousel className='my-0'
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive1}
                    ssr={true}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass={`carousel-container `}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass={`custom-dot-list-style !bottom-[-30px] `}
                    itemClass=" carousel-item-padding-40-px"
                    arrows={false}
                    customButtonGroup={<CustomRightArrow />}

                >
                    <div className={` w-full max-h-[350px] relative`}>
                        <Image src={img2} alt="" className='w-full' />
                        <div className='absolute top-[40%] right-[50%] '>
                            <div className=' rounded-[50%] w-[80px] h-[80px]  overflow-hidden mx-auto '>
                                <Image src={img2} alt="" />


                            </div>
                            <div className='text-center'>
                                <h6 >Raju Raman</h6>
                                <h6>Raju Raman</h6>

                            </div>

                        </div>

                    </div>
                    <div className={` w-full max-h-[350px]`}>
                        <Image src={img} alt="" className='w-full' />

                    </div>

                </Carousel>

            </div>



            <div className="bg-light-primary pt-[100px] pb-[50px] overflow-hidden">
                <div className="container ">
                    <div className='grid grid-cols-[40%_10%_30%_20%]'>
                        <div className='flex flex-col justify-center'>

                            <h3 className=' font-semibold mb-3.5  '> <span className='text-primary'>Feature</span> Product</h3>
                            <p className='text-gray/50 font-normal mb-14 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>

                        </div>
                        <div className='text-end'>
                            <div className='grid md:grid-cols-[85%_15%] '>
                                <input type="text" placeholder='Search Product By Name' className='rounded-l-[30px]  border-[#ddd] bg-[#F6F6F6] px-5 py-2  text-gray/70 flex focus: outline-none w-100'>
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
                </div>
                <div className=" container relative ">
                    <Carousel className='my-10'
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass={`carousel-container md:translate-x-[10%] pb-4`}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass={`custom-dot-list-style !bottom-[-30px] ${Styles.dots}`}
                        itemClass="px-[10px] carousel-item-padding-40-px"
                        arrows={false}
                        renderDotsOutside={true}

                    >
                        {
                            consultants?.map?.((item: item) => {
                                return <div key={item.id} className={`border p-3  bg-white  rounded-xl text-center overflow-hidden   border-[#DDDDDD] max-w-[290px]`}>
                                    <div className='border w-[220px] h-[140px] bg-slate overflow-hidden border-slate rounded mx-auto'>
                                        <Image src={item?.thmbnail ? `/basepath/${item?.thmbnail}` : img3} alt="" />
                                    </div>


                                    <p className='text-primary text-base mt-2'>{item?.name ? item?.name : "tea & coffee"}</p>

                                </div>
                            })
                        }

                    </Carousel>
                </div>


            </div >
        </>

    )
})

export default Feature