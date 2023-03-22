import React, { useState, useEffect, useCallback } from 'react'
import Wrapper from '../../Components/Dashboard/Wrapper'
import Input from '../../Components/UI/Input'
import Select from '../../Components/UI/Select'
import { useAppSelector } from '../../hooks'
import { CiEdit } from "react-icons/ci"
import { useAppDispatch } from '../../hooks'
import Button from '../../Components/UI/Button'
import { updateUserDetail } from '../../redux/actions/UserDashboardActions'
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
    })
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (user?.name) {
            setUserDetails({
                ...userDetails,
                name: user?.name || "",
                city: user?.city || "",
                mobile: user?.mobile || "",
                email: user?.email || "",
                state: user?.state || "",
                pinCode: user?.pincode || "",
            })
        }
    }, [user?.name])

    const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setUserDetails(prev => {
            return { ...prev, [name]: value }
        })
    }
        , [userDetails])

    const handleSubmit = useCallback(() => {
        dispatch(updateUserDetail(userDetails, auth?.token))
    }, [userDetails])



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
                        <Select disabled={!isEditing} className={`${!isEditing ? "bg-gray/20" : "!bg-gray/5"} !rounded-md`} name='gender'  >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Select>
                    </div>


                    <div>
                        <label htmlFor="" className='mb-4 block' >Pin Code</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} name='pincode' value={userDetails.pinCode} onChange={inputHandler} />
                    </div>
                    <div>
                        <label htmlFor="" className='mb-4 block' >City</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} name='city' value={userDetails.city} onChange={inputHandler} />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >State</label>
                        <Input disabled={!isEditing} className={`${!isEditing ? "" : "!bg-gray/5"} !rounded-md`} name='state' value={userDetails.state} onChange={inputHandler} />
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