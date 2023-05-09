import React, { useState, useEffect, useCallback } from 'react'
import Wrapper from '../../Components/Consultant-Dashboard/Wrapper'
import Input from '../../Components/UI/Input'
import Select from '../../Components/UI/Select'
import { useAppSelector } from '../../hooks'
import { CiEdit } from "react-icons/ci"
import axios from "axios";
import Button from '../../Components/UI/Button'
import { toast } from 'react-toastify'
// import { updateUserDetail } from '../../redux/actions/UserDashboardActions'
const BankDetail = () => {
    const { AuthReducer: { user, auth, isAuthentiCated }, UserDashBoardReducer: { loading } } = useAppSelector(state => state)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [userDetails, setUserDetails] = useState<{
        accountName: string,
        accountNo: string,
        ifscCode: string,
        bankName: string,
        branchName: string,

    }>({
        accountName: "",
        accountNo: "",
        ifscCode: "",
        bankName: "",
        branchName: "",
    })
    const [Loading, setLoading] = useState(false)




    const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setUserDetails(prev => {
            return { ...prev, [name]: value }
        })
    }
        , [userDetails])

    const handleSubmit = (() => {
        setLoading(true)
        axios.put("/api/mobile/v1/update-consultant-bank-detail", userDetails, {
            headers: {
                Authorization: `Bearer ${auth?.token}`
            }
        })
            .then((res) => {
                setLoading(false)
                toast.success(res.data?.message)

                setIsEditing(false)
            }).catch((err) => {
                setIsEditing(false)
                toast.error(err.response.data?.message);
                setLoading(false)
            })

    })



    return (
        <Wrapper>
            <div className='shadow-[0px_4px_10px_0px_#0000001A] rounded-md'>
                <div className="px-10 py-4 border-b border-gray/30 flex justify-between">
                    <h5 className='text-primary font-semibold' > Bank Details</h5>


                </div>
                <div className="px-10 mt-5 grid md:grid-cols-2 gap-x-12 gap-y-9 ">
                    <div>
                        <label htmlFor="" className='mb-4 block'  >Bank Name</label>
                        <Input className={` !rounded - md`} value={userDetails.bankName} onChange={inputHandler} name="bankName" />
                    </div>
                    <div>
                        <label htmlFor="" className='mb-4 block'  >Branch Name</label>
                        <Input className={` !rounded - md`} value={userDetails.branchName} onChange={inputHandler} name="branchName" />
                    </div>
                </div>
                <div className="px-10 mt-5 grid md:grid-cols-3 gap-x-12 gap-y-9 ">
                    <div>
                        <label htmlFor="" className='mb-4 block'  >Account Name</label>
                        <Input className={` !rounded - md`} value={userDetails.accountName} onChange={inputHandler} name="accountName" />
                    </div>



                    <div>
                        <label htmlFor="" className='mb-4 block' >Account Number</label>
                        <Input className={` !rounded - md`} name='accountNo' value={userDetails.accountNo} onChange={inputHandler} />
                    </div>




                    <div>
                        <label htmlFor="" className='mb-4 block' >IFSC Code</label>
                        <Input className={` !rounded - md`} name='ifscCode' value={userDetails.ifscCode} onChange={inputHandler} />
                    </div>






                </div>




                <div className='flex justify-center mt-5'>
                    <Button disabled={loading} onClick={handleSubmit} >
                        Submit
                    </Button>
                </div>

            </div>
        </Wrapper>
    )
}

export default BankDetail