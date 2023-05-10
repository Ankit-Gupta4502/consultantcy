import React, { useState, useEffect, useCallback } from 'react'
import Wrapper from '../../Components/Dashboard/Wrapper'
import Input from '../../Components/UI/Input'
import Select from '../../Components/UI/Select'
import { useAppSelector } from '../../hooks'
import { CiEdit } from "react-icons/ci"
import { useAppDispatch } from '../../hooks'
import Button from '../../Components/UI/Button'
import axios from "axios";
import { updateUserDetail } from '../../redux/actions/UserDashboardActions'
const MyProfile = () => {
    const { AuthReducer: { user, auth }, UserDashBoardReducer: { loading } } = useAppSelector(state => state)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [userDetails, setUserDetails] = useState({
        name: "",
        city: "",
        mobile: "",
        email: "",
        pincode: "",
        state: "",
        gender: "",
        thumbnail: ""
    })
    const dispatch = useAppDispatch()
    const getUserDetail = async () => {
        try {
            const { data } = await axios.get("/api/mobile/v1/get-user-details", {
                headers: { Authorization: `Bearer ${auth?.token}` }
            });
            setUserDetails({
                ...userDetails,
                name: data?.data?.name || "",
                city: data?.data?.city || "",
                mobile: data?.data?.mobile || "",
                email: data?.data?.email || "",
                state: data?.data?.state || "",
                pincode: data?.data?.pincode || "",
                gender: data?.data?.gender || "",

            })
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {

        getUserDetail();
    }, [])


    const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setUserDetails(prev => {
            return { ...prev, [name]: value }
        })
    }
        , [userDetails])

    const handleSubmit = useCallback(() => {
        const Data = new FormData();
        Data.append("name", userDetails?.name),
            Data.append("city", userDetails?.city),
            Data.append("mobile", userDetails?.mobile),
            Data.append("email", userDetails?.email),
            Data.append("state", userDetails?.state),
            Data.append("pincode", userDetails?.pincode),
            Data.append("gender", userDetails?.gender),
            Data.append("thumbnail", userDetails?.thumbnail),
            dispatch(updateUserDetail(Data, auth?.token))
        getUserDetail();
    }, [userDetails])



    return (
        <Wrapper>
            <div className='shadow-[0px_4px_10px_0px_#0000001A] rounded-md'>
                <div className="px-10 py-4 border-b border-gray/30 flex justify-between">
                    <h5 className='text-primary font-semibold' > My Profile</h5>

                    <CiEdit size={28} className="cursor-pointer" onClick={() => setIsEditing(prev => !prev)} />
                </div>
                <div className="px-10 py-5 grid md:grid-cols-3 gap-x-12 gap-y-9 ">
                    <div>
                        <label htmlFor="" className='mb-4 block'  >Full Name</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} value={userDetails.name} onChange={inputHandler} />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Email Address</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} value={userDetails.email} onChange={inputHandler} />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Phone Number</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} name='mobile' value={userDetails.mobile} onChange={inputHandler} />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Gender</label>
                        <Select disabled={!isEditing} className={`${!isEditing ? "bg-gray/20 text-black" : "!bg-gray/5 text-black"} !rounded-md`} name='gender' onChange={inputHandler} value={userDetails.gender}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Select>
                    </div>


                    <div>
                        <label htmlFor="" className='mb-4 block' >Pin Code</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} name='pincode' value={userDetails.pincode} onChange={inputHandler} />
                    </div>
                    <div>
                        <label htmlFor="" className='mb-4 block' >City</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} name='city' value={userDetails.city} onChange={inputHandler} />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >State</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} name='state' value={userDetails.state} onChange={inputHandler} />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Upload Image</label>
                        <Input disabled={!isEditing} type="file" className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} name='thumbnail' value={userDetails.thumbnail} onChange={inputHandler} />
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