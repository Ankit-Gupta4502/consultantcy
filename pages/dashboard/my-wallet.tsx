import React from 'react'
import Wrapper from '../../Components/Dashboard/Wrapper'
import { BiRupee } from "react-icons/bi"
import { MdOutlineLocalPhone } from "react-icons/md"
const MyWallet = () => {
    return (
        <Wrapper>
            <div className="shadow-[0px_4px_10px_0px_#0000001A] rounded-md" >
                <div className='md:w-3/5 flex items-center justify-between my-20 px-14' >
                    <div>

                        <div className='flex text-primary items-end '>
                            <span className='text-xl' >
                                <BiRupee />
                            </span>
                            <h4 className=' leading-[29px] text-5xl' >
                                1200
                            </h4>

                        </div>

                        <h6 className='text-[#202020B2]/70 mt-2' >Available Wallet Amount</h6>
                    </div>
                    <button className=" block mx-auto px-5 py-2  items-center bg-green-500  text-white  font-semibold rounded-[4px]" >
                        <span className='text-2xl font-normal me-3'>
                            +
                        </span>  Add Amount
                    </button>
                </div>

                <div className='px-10' >
                    <table className=" border border-gray/5 shadow-[0px_4px_10px_rgba(0, 0, 0, 0.1)]  rounded-md overflow-hidden w-full">
                        <thead className="bg-[#FCFCFC] " >
                            <tr>
                                <td className="py-5 pl-8" >
                                    Consultant
                                </td>

                                <td className="py-5 text-center" >
                                    Amount
                                </td>

                                <td className="py-5 text-center" >
                                    Time Slot
                                </td>

                                <td>

                                </td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t border-gray/5" >
                                <td className="py-8 pl-8 ">
                                    <div>
                                        <span className="block" >Raju Raman Singh</span>
                                        <small className="text-gray/50">
                                            Anurag Chaudhary
                                        </small>
                                    </div>
                                </td>

                                <td className="text-center" >
                                    <small className="text-gray/50" >
                                        1200
                                    </small>

                                </td>
                                <td className="text-center">
                                    <span className="px-4 text-sm py-2 font-semibold rounded-full bg-[#2A79FF1A] text-primary" >
                                        11:00AM-12:00PM
                                    </span>
                                </td>

                                <td>
                                    <button className=" block mx-auto px-5 py-2  items-center bg-[#0ec15619] border border-[#0EC156] text-[#0EC156] rounded-md font-semibold" >
                                        Completed
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    )
}

export default MyWallet