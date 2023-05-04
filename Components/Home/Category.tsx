import React, { useEffect, Fragment, useState, memo } from 'react'
import Image from 'next/image'
import { getConsultantServices, getSectors } from '../../redux/actions/HomeAction'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { item } from '../../interface'
import Button from '../UI/Button'
import Loader from '../UI/Loader'
import Carousel from 'react-multi-carousel'
import CustomButton from '../Enquiry/CustomButton'
const Category = memo(() => {
  const { IndexReducer: {  loading, services, servicesCount }, } = useAppSelector((state) => state)
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
    <div
      className='py-[100px] overflow-hidden bg-ligt-secondary'
    >
      <div className="container ">

        <div className='grid grid-cols-[40%_10%_30%_20%]'>
          <div className='flex flex-col justify-center'>

            <h3 className=' font-semibold mb-3.5  '> <span className='text-primary'>{servicesCount}+</span> best services</h3>
            <p className='text-gray/50 font-normal mb-14 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>

          </div>
          <div className='text-end'>

          </div>
          <div className='text-center'>

            <Link href={`/industries/${"all"}`} className='cursor-pointer font-semibold text-primary
       ' passHref >

              <Button className="rounded-[30px] text-xs py-3" >View All</Button>
            </Link>
          </div>
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
                customButtonGroup={<CustomButton  leftbtnStyle='!bg-white !text-primary  rounded-full shadaow-2xl' rightbtnStyle='!bg-white !text-primary  rounded-full shadaow-2xl' containerClass=' mx-auto max-w-[1280px] left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] ' />}
              >
                {
                  services?.map?.((item: item) => {
                    console.log(item?.thumbnail);
                    
                    return (
                      <div className=' relative border-[1px] min-h-[260px] max-h-[260px] border-[#EEEEEE] rounded-xl py-6 shadow-[0px_2px_4px_0px_#0000001A]    cursor-pointer overflow-hidden pl-[13px] pr-[18px] bg-white' key={item.id}>
                        <div className='rounded-full bg-[#EAF2FF]  overflow-hidden relative w-[60px] h-[60px] mb-[19px] flex justify-center items-center'>
                          <Image src={`/storage/${item?.thumbnail}`} className=" object-cover" alt="" fill />
                        </div>
                        <h6 className='font-semibold text-sm mb-[6px] line-clamp-1 text-primary' >{item?.title}</h6>
                        <p className='mb-5 line-clamp-3 text-sm' dangerouslySetInnerHTML={{ __html: item?.short_description }} >
                        </p>

                        
                          <Link href={`/industries/${item?.slug}`} className=' absolute bottom-6 text-[0.813rem] font-semibold text-primary
            '>
                            View Expert
                          </Link>
                        

                      </div>
                    )
                  })
                }
              </Carousel>
          
          </div>
      }


    </div>
  )
})

export default Category