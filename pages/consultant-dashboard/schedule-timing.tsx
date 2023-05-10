import React, { useState, useEffect, useCallback, Fragment } from 'react'
import Wrapper from '../../Components/Consultant-Dashboard/Wrapper'
import { useAppSelector } from '../../hooks'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { toast } from 'react-toastify'
import { Dialog, Transition } from '@headlessui/react'
import { RxCross1 } from "react-icons/rx"
import Select from '../../Components/UI/Select'
import Input from '../../Components/UI/Input'
import { getScheduleTiming } from "../../redux/actions/ConsultantDashoboardAction"
import axios from 'axios';
import moment from "moment"
const Schedule = () => {
    let [isOpen, setIsOpen] = useState(false)
    const [startTime, setStartingTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [dateIndex, setDate] = useState("");
    const [dayIndex, setDay] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const dispatch: AppDispatch = useDispatch();
    const { AuthReducer: { user, auth, isAuthentiCated }, ConsultantDashBordRducer: { loading, scheduleList } } = useAppSelector(state => state)
    function closeModal() {
        setIsOpen(false)
    }


    useEffect(() => {
        if (isAuthentiCated) {
            dispatch(getScheduleTiming(auth.token))
        }
    }, [isAuthentiCated]);
    const addSchedule = () => {
        axios.post("/api/mobile/v1/add-consultant-slot", {
            startTime, endTime, dateIndex, dayIndex, timeZone
        }, {
            headers: {
                Authorization: `Bearer ${auth?.token}`
            }
        })
        dispatch(getScheduleTiming(auth.token));
        setIsOpen(false)
    }

    const deleteDate = (id: number) => {
        axios.put(`/api/mobile/v1/delete-consultant-slot/${id}`, {
        }, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        })
            .then((({ data }) => {
                toast.success(data?.message)
                dispatch(getScheduleTiming(auth.token))
            }))
            .catch((err) => toast.error(err?.response?.data?.message))
    }

    return (
        <Wrapper>
            <div className='shadow-[0px_4px_10px_0px_#0000001A] rounded-md'>
                <div className="px-10 py-4 border-b border-gray/30 flex justify-between">
                    <h5 className='text-primary font-semibold' > Schedule Timing</h5>


                    <button className=' rounded px-6 py-2 justify-between bg-primary flex items-center text-white space-x-2 ' onClick={() => setIsOpen(true)} >
                        <span>
                            +
                        </span>

                        <span>
                            Add New
                        </span>

                    </button>



                </div>
                <div className="px-10 mb-6 ">
                    <div className='border border-black/10 mt-5 rounded-md overflow-hidden'>

                        <table className="border-collapse  table-auto w-full text-sm">
                            <thead>
                                <tr  >
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4 pl-8  pb-3 text-slate-400  text-left">Slot Date</th>
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4  pb-3 text-slate-400  text-left">Slot Day</th>
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4  pb-3 text-slate-400  text-left">Start Time</th>
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4  pb-3 text-slate-400  text-left">End Time</th>
                                    <th className="border-b border-b-[#DDDDDD] bg-[#FCFCFC] font-medium p-4 pr-8  pb-3 text-slate-400  text-left"></th>
                                </tr>
                            </thead>
                            {scheduleList.map((item) => {
                                return (
                                    item?.consultant_slots.map((data) => {
                                        return (
                                            <tbody className="bg-white dark:bg-slate-800" key={data?.id}>
                                                <tr>
                                                    <td className="border-b border-b-[#DDDDDD]  p-4 pl-8 text-slate-500 ">{item?.dateIndex
                                                    }</td>
                                                    <td className="border-b border-b-[#DDDDDD] p-4 text-slate-500 ">{data?.dayIndex
                                                    }</td>
                                                    <td className="border-b border-b-[#DDDDDD] p-4 pr-8 text-slate-500 ">

                                                        {moment(data?.startTime, ["HH.mm"]).format("hh:mm a")}
                                                    </td>
                                                    <td className="border-b border-b-[#DDDDDD] p-4 pr-8 text-slate-500 ">

                                                        {moment(data?.endTime, ["HH.mm"]).format("hh:mm a")}
                                                    </td>

                                                    <td className="border-b border-b-[#DDDDDD] p-4 pr-8 text-slate-500 ">
                                                        <button className=' rounded px-6 py-2 justify-between bg-[#FF00001A] flex items-center text-[#FF0000] space-x-2 border border-[#FF0000]'
                                                            onClick={() => deleteDate(data.id)}   >
                                                            <span >
                                                                Remove
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        )
                                    })

                                )
                            })}

                        </table>
                    </div>
                </div>


            </div>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='flex justify-between'>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-primary"
                                        >
                                            Add Time Slot
                                        </Dialog.Title>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            <RxCross1 />
                                        </button>
                                    </div>





                                    <div className='mt-3'>
                                        <label className='text-primary'>Select Date</label>

                                        <Input type="date" id="date" name="date" className='border border-[#DDDDDD] py-2 px-1' onChange={(e) => setDate(e.target.value)}></Input>
                                    </div>
                                    <div className='mt-3'>
                                        <label className='text-primary'>Select Day</label>
                                        <Select className='cursor-pointer border-[#DDDDDD] ' onChange={(e) => setDay(e.target.value)}>
                                            <option value="">Select</option>
                                            <option value="monday">Monday</option>
                                            <option value="tuesday">Tuesday</option>
                                            <option value="wednesday">Wednesday</option>
                                            <option value="thrusday">Thrusday</option>
                                            <option value="friday">Friday</option>
                                            <option value="saturday">Saturday</option>
                                            <option value="sunday">Sunday</option>
                                        </Select>
                                    </div>
                                    <div className='mt-3'>
                                        <label className='text-primary'>Select Time Zone</label>
                                        <Select className='cursor-pointer border-[#DDDDDD] ' onChange={(e) => setTimeZone(e.target.value)}>
                                            <option value="">Select</option>
                                            <option value="morning">Morning</option>
                                            {/* <option value="Tuesday">Afternoon</option> */}
                                            <option value="evening">Evening</option>

                                        </Select>
                                    </div>
                                    <div className="mt-3 flex justify-between">
                                        {/* <p className="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent
                                            you an email with all of the details of your order.
                                        </p> */}
                                        <div>
                                            <label className='text-primary'>Select starting time</label>

                                            <Input type="time" id="appt" name="start"
                                                min="09:00" max="18:00" required className='border border-[#DDDDDD] py-2 px-1' onChange={(e) => setStartingTime(e.target.value)}></Input>
                                        </div>
                                        <div>
                                            <label className='text-primary'>Select end time</label>

                                            <Input type="time" id="appt" name="end"
                                                min="09:00" max="18:00" required className='border border-[#DDDDDD] py-2 px-1' onChange={(e) => setEndTime(e.target.value)}></Input>
                                        </div>

                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={addSchedule}
                                        >
                                            Add Schedule
                                        </button>
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

export default Schedule