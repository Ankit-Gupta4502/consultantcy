import React, { useEffect } from 'react'
import Wrapper from '../../Components/Dashboard/Wrapper'
import { BiRupee } from "react-icons/bi"
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getUserWalletHistory } from '../../redux/actions/UserDashboardActions'
import moment from 'moment'
const MyWallet = () => {
    const dispatch = useAppDispatch()
    const { UserWalletReducer: { walletAmount, walletHistory }, AuthReducer: { auth, isAuthentiCated } } = useAppSelector(state => state)
    useEffect(() => {
        if (isAuthentiCated) {
            dispatch(getUserWalletHistory(auth.token))
        }
    }, [isAuthentiCated])
    console.log(walletHistory);

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
                                {walletAmount}
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
                                    Transaction Type
                                </td>

                                <td className="py-5 text-center" >
                                    Amount
                                </td>

                                <td className="py-5 text-center" >
        Remark
                                </td>

                                <td className="py-5 text-center" >
                                        Time
                                </td>

                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                walletHistory?.map?.((item) => {
                                    return <tr className="border-t border-gray/5" key={item.id} >
                                        <td className="py-8 pl-8 ">
                                            <div>
                                                <span className="block" > {item.transaction_type} </span>
                                              
                                            </div>
                                        </td>

                                        <td className="text-center" >
                                            <small className="text-gray/50" >
                                            {item.transaction_amount}
                                            </small>

                                        </td>
                                        <td className="text-center">
                                                {item.transaction_detail}
                                            
                                        </td>
                                        <td className="text-center">
                                            <span className="px-4 text-sm py-2 font-semibold rounded-full bg-[#2A79FF1A] text-primary" >
                                            {  moment(item.createdAt).format("YYYY-MM-DD HH:MM:SS")}
                                            </span>
                                        </td>

                                        
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    )
}

export default MyWallet