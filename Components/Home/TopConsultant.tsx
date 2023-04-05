import React, { useEffect, memo } from 'react'
import Button from "../UI/Button";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import img3 from "../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Styles from "../../styles/CarouselDots.module.css"
import { FaStar } from "react-icons/fa"
import { item } from '../../interface';
import { CiSearch } from "react-icons/ci"
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getConsultants } from '../../redux/actions/HomeAction';
interface IPROPS { value?: string }
const TopConsultant = memo(({ value = "" }: IPROPS) => {
    const dispatch = useAppDispatch()
    const { IndexReducer: { consultants } } = useAppSelector((state ) => state)

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
        <div className="bg-white pt-[100px] pb-[50px] overflow-hidden">
            <div className="container ">
                <div className='grid grid-cols-[40%_10%_30%_20%]'>
                    <div className='flex flex-col justify-center'>

                        <h3 className=' font-semibold mb-3.5  '>Explore <span className='text-primary'>3K+</span> consultants</h3>
                        <p className='text-gray/50 font-normal mb-14 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>

                    </div>
                    <div className='text-end'>
                        <div className='grid md:grid-cols-[85%_15%] '>
                            <input type="text" placeholder='Book from 3000+ consultant' className='rounded-l-[30px]  border-[#ddd] bg-[#F6F6F6] px-5 py-2  text-gray/70 flex focus: outline-none w-100'>
                            </input>
                            <div className='rounded-r-[30px]  border-[#dddd] bg-[#F6F6F6] px-2 py-2  text-gray/70 flex focus: outline-none w-100 relative items-center '>
                                <CiSearch className='mx-auto ' color='text-gray/60' size={23} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>

                        <Link href={`/our-consultants`} className='cursor-pointer font-semibold text-primary' passHref >
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
                    containerClass={`carousel-container  pb-4`}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass={`custom-dot-list-style !bottom-[-30px] ${Styles.dots}`}
                    itemClass="px-[10px] carousel-item-padding-40-px"
                    arrows={false}
                    renderDotsOutside={true}

                >
                    {
                        consultants?.map?.((item: item) => {
                            return <div key={item.id} className={`border p-3  bg-white  rounded-xl text-center overflow-hidden   border-primary max-w-[290px]`}>
                                <div className='border w-[120px] h-[120px] bg-slate overflow-hidden border-slate rounded-xl mx-auto'>
                                    <Image src={item?.thmbnail ? `/basepath/${item?.thmbnail}` : img3} alt="" />
                                </div>

                                <div className='flex items-center justify-center' >
                                    <div className="icon-wrapper mx-2">

                                        <FaStar color='yellow' />
                                    </div>
                                    <span>4.5</span>
                                </div>
                                <h6 className='text-primary text-xl'>{item?.name}</h6>
                                <p className='text-sm'>Income Tax</p>
                                <span className='rounded bg-slate px-3.5 py-2 font-light  text-xs my-2'>
                                    ₹600/hourly
                                </span>
                                <div className='flex justify-between mt-4'>
                                    <Link href={`/consultant/${item?.slug}`} >
                                        <Button variant='outlined' className='text-xs !px-5 !py-3 rounded-[30px]'>View Profile</Button>
                                    </Link>

                                    <Button className='text-xs !px-7 !py-3 rounded-[30px]'>Book Now</Button>

                                </div>
                            </div>
                        })
                    }

                </Carousel>
            </div>


        </div >
    )
})

export default TopConsultant