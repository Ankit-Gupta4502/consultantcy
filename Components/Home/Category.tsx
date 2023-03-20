import React, { useEffect, Fragment, useState, memo } from 'react'
import Image from 'next/image'
import img4 from "../../public/images/Rectangle 13.png"
import { useDispatch } from 'react-redux'
import { getSectors } from '../../redux/actions/HomeAction'
import { AppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Link from 'next/link'
import { item } from '../../interface'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../UI/Button'
import Loader from '../UI/Loader'
import Carousel from 'react-multi-carousel'
import { FiChevronRight } from "react-icons/fi"
import { MdClose } from "react-icons/md"
const Category = memo(() => {
  const dispatch: AppDispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState<item>({})
  const { IndexReducer: { categories, loading } } = useSelector((state: RootState) => state)

  // Responsive breakpoints

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    dispatch(getSectors())
  }, [])

  const closeModal = () => setIsOpen(false)
  return (
    <div
      className='py-[100px] overflow-hidden'
    >
      <div className="container ">
        <div className="flex items-center justify-between">
          <div>
            <p className='text-primary uppercase mb-[9px]'>Services</p>
            <h3 className=' font-normal mb-3.5  '>Explore our best services</h3>
            <p className='text-gray/50 font-normal mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
              tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <Link href={`/industries/${"all"}`} className='cursor-pointer font-semibold text-primary
       ' passHref >
            <div className="flex items-center">

              All Services
              <FiChevronRight className='ml-2' />
            </div>
          </Link>

        </div>


        {/* Modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-md bg-[#FFFFFF]  text-left align-middle shadow-xl transition-all">
                    <div className="bg-primary  py-3 flex items-center justify-between px-6">

                      <div className="flex items-center space-x-3">

                        <div className="img-holder relative w-[48px] h-[48px] rounded-full overflow-hidden">
                          <Image className='object-cover' src={`/basepath/${modalData?.avatar_english}`} fill alt='' />
                        </div>
                        <Dialog.Title
                          as="h6"
                          className=" mb-0 font-medium text-white leading-6 "
                        >
                          {modalData?.name_english}
                        </Dialog.Title>
                      </div>

                      <span role="button" className='text-white' onClick={() => setIsOpen(false)} >
                        <MdClose size={20} />
                      </span>

                    </div>
                    <div className="p-6">

                      <div className="mt-2">
                        <p dangerouslySetInnerHTML={{ __html: modalData?.description_english }} />


                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      {
        loading ? <Loader /> : <div className="relative ">
          <Carousel
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
            containerClass={`carousel-container md:translate-x-[10%] pb-4`}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass={`custom-dot-list-style !bottom-[-35px] `}
            itemClass="px-3 carousel-item-padding-40-px"
            arrows={false}
            renderDotsOutside={true}
          >
            {
              categories?.map?.((item: item) => {
                return (
                  <div className='border-[1px] min-h-[260px] max-h-[260px] border-[#EEEEEE] rounded-xl py-6 shadow-[0px_2px_4px_0px_#0000001A]    cursor-pointer overflow-hidden pl-[13px] pr-[18px]' key={item.id}>
                    <div className='rounded-full bg-[#EAF2FF]  overflow-hidden relative w-[60px] h-[60px] mb-[19px] flex justify-center items-center'>
                      <Image src={`/basepath/${item?.avatar_english}`} className=" object-cover" alt="" fill />
                    </div>
                    <h6 className='font-semibold text-sm mb-[6px] line-clamp-1' >{item?.name_english}</h6>
                    <p className='mb-5 line-clamp-3' dangerouslySetInnerHTML={{ __html: item?.description_english }} >

                    </p>

                    <div className="flex items-center justify-between">
                      <Link href={`/industries/${item?.slug}`} className='text-[0.813rem] font-semibold text-primary
            '>
                        Book Expert
                      </Link>


                      <button onClick={() => {
                        setIsOpen(true)
                        setModalData(item)
                      }
                      } className='text-[0.813rem] font-semibold text-gray/70
          '>
                        Check Benefits
                      </button>
                    </div>

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