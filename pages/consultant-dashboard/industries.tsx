import React from 'react'
import Wrapper from '../../Components/Consultant-Dashboard/Wrapper'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Select from '../../Components/UI/Select'
import Button from '../../Components/UI/Button'
import { getSectors } from '../../redux/actions/HomeAction'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getIndustries } from '../../redux/actions/IndustryAction'
interface Isector {
    id: number,
    name_english: string
}
interface IsectorIndustry {
    sector: Array<{
        consultantId: number,
        subCategoryId: number,
        consultantAudioFee: 0,
        consultantVideoFee: 0,
        subSubCategoryId: number
    }>,
    industry: Array<{
        subSubCategoryId: number,
        subCategoryId: number,
        consultantId: number
    }>
}
const Industries = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch()
    const { IndexReducer: { categories } } = useAppSelector(state => state)
    const [data, setData] = useState<IsectorIndustry[]>([])

    const toggle = () => {
        setIsOpen(prev => !prev)
    }
    useEffect(() => {
        dispatch(getSectors())
    }, [])


    return (
        <Wrapper>
            <div className='shadow-[0px_4px_10px_0px_#0000001A]' draggable >
                <div className="py-3 px-10 flex items-center justify-between border-b border-b-[#DDDDDD]">
                    <h4 className='text-primary mb-0 font-medium '>
                        Active Industries
                    </h4>
                    <button className=' rounded px-6 py-2 justify-between bg-primary flex items-center text-white space-x-2 ' onClick={toggle} >
                        <span>
                            +
                        </span>

                        <span>
                            Add New
                        </span>

                    </button>
                </div>
                <div className="px-10 ">
                    <div className='border border-black/10 mt-5 rounded-md overflow-hidden'>

                        <table className="border-collapse  table-auto w-full text-sm">
                            <thead>
                                <tr  >
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4 pl-8  pb-3 text-slate-400  text-left">Industry name</th>
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4  pb-3 text-slate-400  text-left">Sector Name</th>
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4 pr-8  pb-3 text-slate-400  text-left"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-slate-800">
                                <tr>
                                    <td className="border-b border-b-[#DDDDDD]  p-4 pl-8 text-slate-500 ">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                    <td className="border-b border-b-[#DDDDDD] p-4 text-slate-500 ">Malcolm Lockyer</td>
                                    <td className="border-b border-b-[#DDDDDD] p-4 pr-8 text-slate-500 ">1961</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>




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
                                        Update Sector Indudtry
                                    </Dialog.Title>
                                    <div className="mt-6">
                                        <div className='mb-3' >
                                            <label htmlFor="" className='block mb-2' >Sector</label>
                                            <Select>
                                                <option value="">Select</option>
                                                {
                                                    categories.map((item: Isector) => {
                                                        return <option value={item.id} key={item.id}>
                                                            {item.name_english}
                                                        </option>
                                                    })
                                                }
                                            </Select>
                                        </div>

                                        <div className='mb-3' >
                                            <label htmlFor="" className='block mb-2' >Industry</label>
                                            <Select>
                                                <option value="">Select</option>
                                            </Select>
                                        </div>

                                    </div>

                                    <div className="mt-4">
                                        <Button>
                                            Submit
                                        </Button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </Wrapper>
    )
}

export default Industries