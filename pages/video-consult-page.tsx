import React, { useEffect } from 'react'
import img from "../public/images/Rectangle 38.svg"
import img6 from "../public/images/Group 6.svg"
import img7 from "../public/images/Group 7.svg"
import img8 from "../public/images/Group 8.svg"
import img9 from "../public/images/Group 9.svg"
import Image from 'next/image'
import OBJECTS from "../public/images/image 1.svg"
import Button from "../Components/UI/Button"
import { getConsultantServices, getSectors } from '../redux/actions/HomeAction'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../hooks'
import { item } from "../interface"
import Loader from '../Components/UI/Loader';
import Carousel from 'react-multi-carousel'
import CustomButton from '../Components/Enquiry/CustomButton'
import TopConsultant from '../Components/Home/Consultants'
const videoconsultpage = () => {
    const { IndexReducer: { loading, services, servicesCount }, } = useAppSelector((state) => state)
    const dispatch = useAppDispatch()
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
    useEffect(() => {
        dispatch(getConsultantServices())
    }, [])
    return (
        <div>
            <div className='bg-light-primary py-10'>
                <div className="container">
                    <div className='grid grid-cols-[1fr_1fr]'>
                        <div className='flex flex-col justify-center'>
                            <h6 className='font-bold text-4xl leading-[55px]'>
                                Skip The Travel!<br />
                                Take <span className='text-primary'>Online Consultant</span>
                            </h6>
                            <p className='max-w-[420px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='flex relative gap-x-[75px] items-center mb-6 mt-10 '>
                                <div>
                                    <div className='relative w-[50px] h-[50px] overflow-hidden  rounded-full'>
                                        <Image src={OBJECTS} className=" object-cover" alt="" fill />
                                    </div>
                                    <div className=' w-[50px] h-[50px] overflow-hidden  rounded-full absolute top-0 left-[32px]'>
                                        <Image src={OBJECTS} className=" object-cover" alt="" fill />
                                    </div>
                                    <div className=' w-[50px] h-[50px] overflow-hidden  rounded-full absolute top-0 left-[60px]'>
                                        <Image src={OBJECTS} className=" object-cover" alt="" fill />
                                    </div>
                                </div>
                                <div>
                                    100+ consultant online
                                </div>
                            </div>

                            <Button className="rounded-[30px] max-w-[35%]" > Consultant Now</Button>

                        </div>
                        <div>
                            <div className='relative max-w-[530px] h-[350px] overflow-hidden  rounded'>
                                <Image src={OBJECTS} className=" object-cover" alt="" fill />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='container py-10'>
                <div className='grid grid-cols-[40%_10%_30%_20%]'>
                    <div className='flex flex-col justify-center'>

                        <h3 className=' font-semibold mb-3.5  '> <span className='text-primary'>{servicesCount}+</span>  Best Sector</h3>
                        <p className='text-gray/50 font-normal mb-14 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>

                    </div>
                    <div className='text-end'>

                    </div>
                    <div className='text-end'>

                        <Link href={`/industries/${"all"}`} className='cursor-pointer font-semibold text-primary
       ' passHref >

                            <Button className="rounded-[30px] text-xs py-3" >View All</Button>
                        </Link>
                    </div>
                </div>
                {
                    loading ? <Loader /> :

                        <div className="relative">
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                ssr={false}
                                infinite={true}
                                autoPlaySpeed={1000}
                                renderButtonGroupOutside
                                keyBoardControl={true}
                                customTransition="all .5s"
                                transitionDuration={500}
                                containerClass={`carousel-container  container  pb-4`}
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass={`custom-dot-list-style !bottom-[-35px] `}
                                itemClass="px-3 carousel-item-padding-40-px"
                                arrows={false}
                                customButtonGroup={<CustomButton leftbtnStyle='!bg-white !text-primary  rounded-full shadaow-2xl' rightbtnStyle='!bg-white !text-primary  rounded-full shadaow-2xl' containerClass=' mx-auto max-w-[1280px] left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] ' />}
                            >
                                {
                                    services?.map?.((item: item) => {
                                        return (
                                            <div className=' relative border-[1px] min-h-[180px] max-h-[200px] border-[#EEEEEE] rounded-xl py-2 shadow-[0px_2px_4px_0px_#0000001A]    cursor-pointer overflow-hidden pl-[13px] pr-[18px] bg-white' key={item.id}>
                                                <div className='rounded bg-[#EAF2FF]  overflow-hidden relative w-[60px] h-[60px] mb-[19px] flex justify-center items-center'>
                                                    <Image src={`/basepath/${item?.thumbnail}`} className=" object-cover" alt="" fill />
                                                </div>
                                                <h6 className='font-semibold text-sm mb-[6px] line-clamp-1 ' >{item?.title}</h6>



                                                {/* <Link href={`/industries/${item?.slug}`} className=' absolute bottom-6 text-[0.813rem] font-semibold text-primary
            '>
                                                    View Expert
                                                </Link> */}
                                                <Button className="rounded-[30px] text-xs px-2 mt-5" > Consultant Now</Button>


                                            </div>
                                        )
                                    })
                                }
                            </Carousel>

                        </div>
                }
            </div>

            <TopConsultant value="consult" />

            <div className='container py-10'>
                <div className='grid grid-cols-[40%_10%_30%_20%]'>
                    <div className='flex flex-col justify-center'>

                        <h3 className=' font-semibold mb-3.5  '> <span className='text-primary'>{servicesCount}+</span>  Best Services</h3>
                        <p className='text-gray/50 font-normal mb-14 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>

                    </div>
                    <div className='text-end'>

                    </div>
                    <div className='text-end'>

                        <Link href={`/industries/${"all"}`} className='cursor-pointer font-semibold text-primary
       ' passHref >

                            <Button className="rounded-[30px] text-xs py-3" >View All</Button>
                        </Link>
                    </div>
                </div>
                {
                    loading ? <Loader /> :

                        <div className="relative">
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                ssr={false}
                                infinite={true}
                                autoPlaySpeed={1000}
                                renderButtonGroupOutside
                                keyBoardControl={true}
                                customTransition="all .5s"
                                transitionDuration={500}
                                containerClass={`carousel-container  container  pb-4`}
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass={`custom-dot-list-style !bottom-[-35px] `}
                                itemClass="px-3 carousel-item-padding-40-px"
                                arrows={false}
                                customButtonGroup={<CustomButton leftbtnStyle='!bg-white !text-primary  rounded-full shadaow-2xl' rightbtnStyle='!bg-white !text-primary  rounded-full shadaow-2xl' containerClass=' mx-auto max-w-[1280px] left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] ' />}
                            >
                                {
                                    services?.map?.((item: item) => {
                                        return (
                                            <div className=' relative border-[1px] min-h-[100%] h-[250px] border-[#EEEEEE] rounded-xl py-2 shadow-[0px_2px_4px_0px_#0000001A]    cursor-pointer overflow-hidden pl-[13px] pr-[18px] bg-white flex flex-col justify-center' key={item.id}>
                                                <div className='rounded bg-[#EAF2FF]  overflow-hidden relative w-[60px] h-[60px] mb-[19px] flex justify-center items-center'>
                                                    <Image src={item?.thumbnail} className=" object-cover" alt="" fill />
                                                </div>
                                                <h6 className='font-semibold text-sm mb-[6px] line-clamp-1 text-primary' >{item?.title}</h6>
                                                <p className='mb-5 line-clamp-3 text-sm' dangerouslySetInnerHTML={{ __html: item?.short_description }} >
                                                </p>


                                                {/* <Link href={`/industries/${item?.slug}`} className=' absolute bottom-6 text-[0.813rem] font-semibold text-primary
            '>
                                                    View Expert
                                                </Link> */}
                                                {/* <Button className="rounded-[30px] text-xs px-2 mt-5" > Consultant Now</Button> */}
                                                <div className='flex justify-between'>

                                                    <div className='  text-[0.813rem] font-semibold text-primary
            '>
                                                        Book Expert
                                                    </div>

                                                    <div className='  text-[0.813rem] font-semibold 
            '>
                                                        View Benifits
                                                    </div>


                                                </div>


                                            </div>
                                        )
                                    })
                                }
                            </Carousel>

                        </div>
                }
            </div>
            <div className='bg-primary h-[170px] p-5 flex items-center'>
                <div className="container">
                    <div className='grid grid-cols-4'>
                        <div className='grid grid-cols-[30%_auto]'>
                            <div className='relative h-[65px] w-[65px]'>
                                <Image src={img6} className=" object-cover" alt="" fill />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h6 className='text-3xl font-semibold'> 1000</h6>
                                Happy Users
                            </div>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <div className='relative h-[65px] w-[65px]'>
                                <Image src={img7} className=" object-cover" alt="" fill />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h6 className='text-3xl font-semibold'> 100+</h6>
                                Verified Consultant
                            </div>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <div className='relative h-[65px] w-[65px]'>
                                <Image src={img8} className=" object-cover" alt="" fill />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h6 className='text-3xl font-semibold'> 25+</h6>
                                Specialists
                            </div>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <div className='relative h-[65px] w-[65px]'>
                                <Image src={img9} className=" object-cover" alt="" fill />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h6 className='text-3xl font-semibold'> 4.5/5</h6>
                                App Rating
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default videoconsultpage