import React, { useState, useEffect, useCallback } from 'react'
import Wrapper from '../../Components/Consultant-Dashboard/Wrapper'
import Input from '../../Components/UI/Input'
import Select from '../../Components/UI/Select'
import { useAppSelector } from '../../hooks'
import { CiEdit } from "react-icons/ci"
import { useAppDispatch } from '../../hooks'
import axios from "axios";
import Button from '../../Components/UI/Button'
import { toast } from 'react-toastify'
// import { updateUserDetail } from '../../redux/actions/UserDashboardActions'
const MyProfile = () => {
    const { AuthReducer: { user, auth }, UserDashBoardReducer: { loading } } = useAppSelector(state => state)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [userDetails, setUserDetails] = useState({
        name: "",
        city: "",
        mobile: "",
        email: "",
        pinCode: "",
        state: "",
        gender: ""
    })
    const [Loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (auth?.name) {
            setUserDetails({
                ...userDetails,
                name: auth?.name || "",
                city: auth?.city || "",
                mobile: auth?.mobile || "",
                email: auth?.email || "",
                state: auth?.state || "",
                pinCode: auth?.pincode || "",
                gender: auth?.gender || ""
            })
        }
    }, [auth?.name])

    const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setUserDetails(prev => {
            return { ...prev, [name]: value }
        })
    }
        , [userDetails])

    const handleSubmit = (() => {
        setLoading(true)
        axios.put("/api/mobile/v1/update-consultant-detail", userDetails, {
            headers: {
                Authorization: `Bearer ${auth?.token}`
            }
        })
            .then((res) => {
                setLoading(false)
                toast.success(res.data?.message)
            }).catch((err) => {

                toast.error(err.response.data?.message);
                setLoading(false)
            })

    })



    return (
        <Wrapper>
            <div className='shadow-[0px_4px_10px_0px_#0000001A] rounded-md'>
                <div className="px-10 py-4 border-b border-gray/30 flex justify-between">
                    <h5 className='text-primary font-semibold' > My Profile</h5>

                    <CiEdit size={28} className="cursor-pointer" onClick={() => setIsEditing(prev => !prev)} />
                </div>
                <div className="px-10 mt-5 grid md:grid-cols-3 gap-x-12 gap-y-9 ">
                    <div>
                        <label htmlFor="" className='mb-4 block'  >Full Name</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded - md`} value={userDetails.name} onChange={inputHandler} name="name" />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Email Address</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded - md`} value={userDetails.email} onChange={inputHandler} name="email" />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Phone Number</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded - md`} name='mobile' value={userDetails.mobile} onChange={inputHandler} />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Gender</label>
                        <Select disabled={!isEditing} className={`${!isEditing ? "bg-gray/20" : "!bg-gray/5"} !rounded - md`} name='gender' value={userDetails.gender}  >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Select>
                    </div>


                    <div>
                        <label htmlFor="" className='mb-4 block' >Pin Code</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded - md`} name='pincode' value={userDetails.pinCode} onChange={inputHandler} />
                    </div>
                    <div>
                        <label htmlFor="" className='mb-4 block' >City</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded - md`} name='city' value={userDetails.city} onChange={inputHandler} />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >State</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded - md`} name='state' value={userDetails.state} onChange={inputHandler} />
                    </div>



                </div>

                {isEditing && <div className="flex space-x-2 md:space-y-0 space-y-2 px-10 mt-9">
                    <Button disabled={loading} onClick={handleSubmit} >
                        Submit
                    </Button>
                    <Button variant='outlined' onClick={() => setIsEditing(false)} >
                        Cancel
                    </Button>
                </div>}
            </div>
        </Wrapper>
    )
}

export default MyProfile