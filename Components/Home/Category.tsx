import React, { useEffect, Fragment, useState } from 'react'
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
const Category = () => {
  const dispatch: AppDispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { IndexReducer: { categories } } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(getSectors())
  }, [])

  const closeModal = () => setIsOpen(false)



  return (
    <div className="container py-[100px]">
      <p className='text-primary text-center'>Category</p>
      <h3 className=' text-center '>Explore our best category’s</h3>
      <p className='text-gray/70 text-center mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
        tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="md:grid-cols-3 lg:grid-cols-6  grid-cols-1 grid gap-[35px]">
        {
          categories?.slice(0, 11)?.map?.((item: item) => {
            return <Link href={`/industries/${item?.slug}`} key={item?.id} >
              <div className='border-[1px] border-[#EEEEEE] rounded p-3 shadow-lg flex items-center flex-col cursor-pointer overflow-hidden'>
                <div className='rounded-full bg-[#EAF2FF] w-20 h-20 mb-3 flex justify-center items-center'>
                  <Image src={item?.avatar || img4} alt="" />
                </div>
                <p className='text-center'>{item?.name_english?.slice(0, 10)?.concat?.("...")}</p>
              </div>
            </Link>
          })
        }

        <Link href={`/industries/food-proccessing`} >
          <div className='border-[1px] justify-center border-primary rounded p-3 shadow-lg flex items-center flex-col cursor-pointer overflow-hidden h-full'>
            <div className='flex justify-center items-center'>
              <h4 className='text-lg text-primary'> {categories?.length - 1}+ </h4>
            </div>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button
                      type="button"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Category