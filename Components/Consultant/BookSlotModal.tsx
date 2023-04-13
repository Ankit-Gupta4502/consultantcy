import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { modalDataType } from '../../pages/consultants'
import { Dispatch, SetStateAction } from "react"
interface modalProps {
    isOpen: boolean,
    setIsOpen: Function,
    modalData: modalDataType[],
    setSlotId?: Dispatch<SetStateAction<modalDataType>>,
    slot?: modalDataType
}
const BookSlotModal = ({ isOpen, setIsOpen, modalData, setSlotId, slot }: modalProps) => {
    const toggle = () => {
        setIsOpen(!isOpen)
        if (isOpen) {
            setSlotId({})
        }
    }
    const morningSlots = modalData.filter((item) => item.timeZone === "morning")
    const eveningSlots = modalData.filter((item) => item.timeZone === 'evening')

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
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Consultant Slots
                                    </Dialog.Title>
                                    <div className="mt-5">
                                        {
                                            (!morningSlots.length && !eveningSlots.length) &&
                                            <h5 className='font-semibold text-primary text-center' >No Slots Available</h5>
                                        }
                                        <div className="grid grid-cols-3 gap-x-4 gap-y-3 ">

                                            {morningSlots.length ? <h5 className="col-span-3">
                                                Morning Slots
                                            </h5> : ''}

                                            {
                                                morningSlots.map((item) => {
                                                    return <div role="button" key={item.id} className={`${slot.id === item.id ? "bg-primary text-white" : "text-primary  border border-primary"}  rounded-md py-4  `} onClick={() => setSlotId(slot.id === item.id ? {} : item)} >
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
                                                eveningSlots.map((item) => {
                                                    return <div role="button" key={item.id} className={`${slot.id === item.id ? "bg-primary text-white" : "text-primary  border border-primary"}  rounded-md py-4  `} onClick={() => setSlotId(prev => prev.id === item ? {} : item)} >
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
                                            className="block w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white   "
                                            onClick={toggle}
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

export default BookSlotModal

