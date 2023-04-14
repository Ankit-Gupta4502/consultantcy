import React, { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { slotsType, consultantSlotType } from '../../pages/consultants'
import { Dispatch, SetStateAction } from "react"
import Select from '../UI/Select'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { useRouter } from 'next/router'
import { BiRupee } from 'react-icons/bi'
interface modalProps {
    isOpen: boolean,
    setIsOpen: Function,
    modalData: consultantSlotType[],
    setSlot?: Dispatch<SetStateAction<slotsType>>,
    slot?: slotsType,
    sectors?: { id?: number, name_english?: string }[],
    industries?: { id?: number, name_english?: string, subCategoryId?: number }[],
    amount?: number,
    handleBooking?: (() => void)
}
const BookSlotModal = ({ isOpen, setIsOpen, modalData=[], setSlot, slot, sectors, industries, amount, handleBooking }: modalProps) => {
    const toggle = () => {
        setIsOpen(!isOpen)
        if (isOpen) {
            setSlot({ sector: "", industry: "" })
        }
    }
    const { AuthReducer: { isAuthentiCated }, UserWalletReducer: { walletAmount } } = useAppSelector(state => state)
    const morningSlots = modalData?.map?.((item) => item.consultant_slots.filter((item) => item.timeZone === "morning")).flat()


    const eveningSlots =  modalData?.map?.((item) => item.consultant_slots.filter((item) => item.timeZone === "evening")).flat()
    const router = useRouter()






    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={toggle}>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex items-center justify-between">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Consultant Slots
                                        </Dialog.Title>

                                        <div className='flex items-center space-x-1 text-primary' >
                                            <BiRupee size={22} />
                                            <span className='font-bold' >

                                                {amount}
                                            </span>
                                        </div>

                                    </div>

                                    <div className="mt-5">
                                        <div className='mb-4'>
                                            <label className='block mb-3' >Choose Sector</label>
                                            <Select className='!py-2' value={slot.sector} onChange={(e) =>
                                                setSlot(
                                                    prev => {
                                                        return { ...prev, sector: e.target.value }
                                                    }
                                                )} >
                                                <option value="">Select</option>
                                                {
                                                    sectors.map((item) => {
                                                        return <option key={item.id} value={item.id}> {item.name_english} </option>
                                                    })
                                                }
                                            </Select>
                                        </div>
                                        <div className='mb-4'>
                                            <label className='block mb-3' >Choose Industry</label>
                                            <Select className='!py-2' value={slot.industry} onChange={(e) =>
                                                setSlot(
                                                    prev => {
                                                        return { ...prev, industry: e.target.value }
                                                    }
                                                )} >
                                                <option value="">Select</option>
                                                {
                                                    industries.map((item) => {
                                                        return <option key={item.id} value={item.id}> {item.name_english} </option>
                                                    })
                                                }
                                            </Select>
                                        </div>
                                        {
                                            (!morningSlots?.length && !eveningSlots?.length) &&
                                            <h5 className='font-semibold text-primary text-center' >No Slots Available</h5>
                                        }
                                        <div className="grid grid-cols-3 gap-x-4 gap-y-3 ">

                                            {morningSlots?.length ? <h5 className="col-span-3">
                                                Morning Slots
                                            </h5> : ''}

                                            {
                                                morningSlots?.map?.((item) => {
                                                    return <div role="button" key={item.id} className={`${2 === item.id ? "bg-primary text-white" : "text-primary  border border-primary"}  rounded-md py-4  `} >
                                                        <span className='block text-center text-xs'>
                                                            {item.startTime} - {item.endTime}
                                                        </span>
                                                    </div>
                                                })
                                            }

                                            {eveningSlots.length ? <h5 className="col-span-3">
                                                Evening Slots
                                            </h5> : ''}

                                            {
                                                eveningSlots?.map?.((item) => {
                                                    return <div role="button" key={item.id} className={`${1 === item.id ? "bg-primary text-white" : "text-primary  border border-primary"}  rounded-md py-4  `}  >
                                                        <span className='block text-center text-xs'>
                                                            {item.startTime} - {item.endTime}
                                                        </span>
                                                    </div>
                                                })
                                            }
                                        </div>

                                    </div>

                                    <div className="mt-4 space-y-3 ">
                                        <button
                                            type="button"

                                            className="block disabled:opacity-70 w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white   "
                                            onClick={() => isAuthentiCated ? handleBooking() : router.push('/login')}
                                        >
                                            Book Slot
                                        </button>
                                        <button
                                            type="button"
                                            className="block w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={toggle}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default React.memo(BookSlotModal)

