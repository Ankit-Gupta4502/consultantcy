import React, { useEffect, memo } from 'react'
import Button from "../UI/Button";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import img3 from "../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Styles from "../../styles/CarouselDots.module.css"
import { item } from '../../interface';
import { CiSearch } from "react-icons/ci"
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getConsultants } from '../../redux/actions/HomeAction';
import ConsultantCard from '../Layout/ConsultantCard';
interface IPROPS { value?: string }
const Consultant = memo(({ value = "consult" || "" }: IPROPS) => {
    const dispatch = useAppDispatch()
    const { IndexReducer: { consultants } } = useAppSelector((state) => state)

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
        <div className={`${value == "consult" ? "bg-white pt-[100px]" : " bg-light-primary pt-[50px]"}   pb-[50px] overflow-hidden`}>
            <div className="container ">
                <div className=' flex items-start justify-between '>
                    <div className='flex w-3/6 flex-col justify-center'>

                        <h3 className=' font-semibold mb-3.5  '>Explore <span className='text-primary'>3K+</span> consultants</h3>
                        <p className=' text-gray/50 font-normal mb-14 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
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
                            return <ConsultantCard key={item.id} value="consult" />
                        })
                    }

                </Carousel>
            </div>


        </div >
    )
})

export default Consultant