import React from 'react'
import Wrapper from '../../Components/Consultant-Dashboard/Wrapper'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Select from '../../Components/UI/Select'
import Button from '../../Components/UI/Button'
import { getSectors } from '../../redux/actions/HomeAction'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getIndustries } from '../../redux/actions/IndustryAction'
import axios from 'axios'
import { toast } from 'react-toastify'
interface Isector {
    id: number,
    name_english: string
}
interface Iindustry {
    id: number,
    name_english: string,
    subCategoryId: string
}
interface IsectorIndustry {
    sector: Array<{
        consultantId?: number,
        subCategoryId?: string,
        consultantAudioFee?: 0,
        consultantVideoFee?: 0,
        subSubCategoryId?: string
    }>,
    industry: Array<{
        subSubCategoryId?: string,
        subCategoryId?: string,
        consultantId?: number
    }>
}
const Industries = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch()
    const { IndexReducer: { categories }, AuthReducer: {
        auth
    }, IndustriesReducer: { categories: industries } } = useAppSelector(state => state)
    const [data, setData] = useState<IsectorIndustry>({ sector: [], industry: [] })
    const [sectorInd, setSectorInd] = useState({ sector: "", industry: "" })
    const [consultantExpertise, setConsultantExpertise] = useState<{
        id: number,
        subCategory: {
            id: number,
            name_english: string
        },
        subSubCategory: {
            id: number,
            name_english: string
        },
    }[]>([])
    const toggle = () => {
        setIsOpen(prev => !prev)
    }
    const getSectorsindustry = () => {
        axios("/api/mobile/v1/get-consultant-sector-industry", {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        }).then((({ data }) => {
            setConsultantExpertise(data?.data?.consultant_sectors)

        }))
            .catch(err => toast.error(err?.response?.data))
    }
    useEffect(() => {
        dispatch(getSectors())
    }, [])
    useEffect(() => {
        if (data.sector.length) {
            dispatch(getIndustries(data.sector[0].subCategoryId, '', 'id'))
        }
    }, [data.sector.length])

    const updateSector = () => {
        axios.post("/api/mobile/v1/update-consultant-sector-industry", data, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        }).then((({ data }) => {
            toast.success(data?.message)
            toggle()
            getSectorsindustry()
        }))
            .catch((err) => {
                toast.error(err.response.data?.message)
                toggle()
            })
    }

    useEffect(() => {
        if (auth.token) {
            getSectorsindustry()
        }
    }, [auth])

    const handleDelete = (id: number) => {

        axios.delete(`/api/mobile/v1/delete-consultant-sector/${id}`, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        }).then((res) => {
            toast.success(res?.data?.message)
        }).catch((err) => {
            toast.error(err?.response?.data)
        })
    }

    return (
        <Wrapper>
            <div className='shadow-[0px_4px_10px_0px_#0000001A]'  >
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
                    <div className='border border-black/10 my-5 rounded-md overflow-hidden'>

                        <table className="border-collapse  table-auto w-full text-sm">
                            <thead>
                                <tr  >
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4 pl-8  pb-3 text-slate-400  text-left">Industry name</th>
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4  pb-3 text-slate-400  text-left">Sector Name</th>
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4 pr-8  pb-3 text-slate-400  text-left"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white ">
                                {
                                    consultantExpertise.map((item) => {

                                        return <tr key={item.id} >
                                            <td className="border-b border-b-[#DDDDDD]  p-4 pl-8 text-slate-500 ">
                                                {item.subSubCategory.name_english} </td>
                                            <td className="border-b border-b-[#DDDDDD] p-4 text-slate-500 "> {item.subCategory.name_english}</td>
                                            <td className="border-b border-b-[#DDDDDD] p-4 pr-8 text-slate-500 ">
                                                <button className=' rounded px-6 py-2 justify-between bg-[#FF00001A] flex items-center text-[#FF0000] space-x-2 border border-[#FF0000]' onClick={() => handleDelete(item?.id)}
                                                >


                                                    <span >
                                                        Remove
                                                    </span>

                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }


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
                                            <Select value={sectorInd.sector} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                setData(prev => ({
                                                    ...prev,
                                                    sector: [
                                                        {
                                                            consultantId: auth.id,
                                                            consultantAudioFee: 0,
                                                            consultantVideoFee: 0,
                                                            subCategoryId: e.target.value
                                                        }
                                                    ],
                                                    industry: []
                                                }))
                                                setSectorInd({
                                                    sector: e.target.value,
                                                    industry: ""
                                                })
                                            }} >
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
                                            <Select value={sectorInd.industry} onChange={(e) => {
                                                setData(prev => ({
                                                    sector: [{ ...prev.sector[0], subSubCategoryId: e.target.value }],
                                                    industry: [{
                                                        subCategoryId: sectorInd.sector,
                                                        subSubCategoryId: e.target.value,
                                                        consultantId: auth.id
                                                    }]
                                                }))
                                                setSectorInd(prev => ({
                                                    ...prev,
                                                    industry: e.target.value
                                                }))


                                            }

                                            } >
                                                <option value="">Select</option>
                                                {
                                                    industries.map((item: Iindustry) => {
                                                        return <option value={item.id} key={item.id} > {item.name_english} </option>
                                                    })
                                                }
                                            </Select>
                                        </div>

                                    </div>

                                    <div className="mt-4">
                                        <Button onClick={updateSector} disabled={!sectorInd.industry || !sectorInd.industry} >
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