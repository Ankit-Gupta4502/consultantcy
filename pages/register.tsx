import React, { useState, useEffect } from 'react'
import Input from '../Components/UI/Input'
import { handlePhoneValid, returnKey } from "../utils/utilities"
import Button from '../Components/UI/Button'
import register from "../public/images/register.png"
import Image from 'next/image'
import OtpInput from 'react-otp-input'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { sendOtp, registerUser, verifyOtp } from '../redux/actions/AuthAction'
import { useRouter } from "next/router"
import axios from 'axios'
const Register = () => {
    const { AuthReducer: { mobile, isAuthentiCated, otpSendStatus, loading, otpVerified, errors, } } = useSelector((state: RootState) => state)
    const dispatch: AppDispatch = useDispatch()
    const [password, setPassword] = useState("")
    const [newpassword, setNewPassword] = useState("")
    const [otp, setOtp] = useState("")
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: ""
    })
    const router = useRouter()
    const [address, setAddress] = useState({
        pincode: "",
        city: "",
        state: "",
    })
    const [RegisterAs, setRegisterAs] = useState("user")
    useEffect(() => {
        if (router) {
            if (isAuthentiCated) {
                router.replace("/")
            }
            if (!mobile) {
                router.replace("/login")
            }
        }
    }, [isAuthentiCated, router, mobile])

    useEffect(() => {
        if (mobile) {
            dispatch(sendOtp(mobile))
        }
    }, [mobile])
    console.log(mobile);

    const handlePincode = async (value: string) => {
        try {

            const response = await axios.post(`/api/mobile/v1/fetch-pincode`, {
                pincode: value
            })
            setAddress({ ...address, city: response.data?.data?.city, state: response.data?.data?.state, pincode: value })
        } catch (error) {
            console.log(error)

        }
    }

    const handleSubmit = () => {
        const data = {
            otp,
            mobile,
            source: "api",
            password,
            confirmPassword: newpassword,
            email: userInfo.email,
            pincode: address.pincode,
            city: address.city,
            state: address.state,
            name: userInfo.name
        }
        dispatch(registerUser(data, RegisterAs))
    }


    return (
        <div className=' bg-[#F5F5F5] p-[30px]' >
            <div className="mb-10 mx-auto flex justify-center space-x-10 items-center ">
                <div className={`tab ${RegisterAs === "user" ? "bg-primary text-white" : ""}  px-4 py-3 rounded-md`}>
                    <span role="button" onClick={() => setRegisterAs("user")}>
                        Register As User
                    </span>
                </div>
                <div className={`tab px-4 py-3 rounded-md ${RegisterAs === "consultant" ? "bg-primary text-white" : ""} `}>
                    <span role="button" onClick={() => setRegisterAs("consultant")}>

                        Register As Consultant
                    </span>
                </div>

            </div>
            <div className='  grid grid-cols-[30%_5%_30%] justify-center gap-[33px] items-center py-2 bg-white rounded-[10px] '>
                <div className='bg-white pt-4 pb-11' >
                    <div className="form-wrapper mt-5">
                        <div className="mb-8">
                            <h2 className='font-medium text-3xl'>Register Now</h2>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="" className='mb-2 block' >Enter OTP</label>
                            <OtpInput
                                value={otp}
                                numInputs={6}
                                separator={<span className="mx-2 block">*</span>}
                                onChange={(value: string) => {
                                    handlePhoneValid(value) &&
                                        setOtp(value)
                                    if (value.length === 6) {
                                        dispatch(verifyOtp(mobile, value))
                                    }
                                }}
                                inputStyle={{
                                    width: "100%",
                                    borderRadius: "6px",
                                    border: "1px solid #dddddd",
                                    height: "38px",
                                }}
                            />
                            <div className="flex justify-between items-center">
                                <small className=' text-danger' role="button" onClick={() => sendOtp(mobile)}  > {otpSendStatus ? "Resend OTP" : "wait...."} </small>

                                {

                                    otpVerified ? <small className='text-primary' > OTP MATCHED !!</small>
                                        : <small className='text-danger' > {returnKey(errors, "message")}  </small>

                                }

                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="" className='mb-2 block'>Name</label>
                            <Input value={userInfo.name} name="name" onChange={(e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })} disabled={!otpVerified} className=" !py-2 border-[#086BD8]" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="" className='mb-2 block'>Email</label>
                            <Input value={userInfo.email} name="email" onChange={(e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })} disabled={!otpVerified} className=" !py-2 border-[#086BD8]" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="" className='mb-2 block' >Password</label>
                            <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} className=" !py-2 border-[#086BD8]" disabled={!otpVerified} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="" className='mb-2 block' >Confirmed Password</label>
                            <Input value={newpassword} type="password" onChange={(e) => setNewPassword(e.target.value)} className=" !py-2 border-[#086BD8]" disabled={!otpVerified} />
                        </div>

                        <div className='grid grid-cols-[45%_10%_45%]'>
                            <div className="form-group mb-3">
                                <label htmlFor="" className='mb-2 block' >Mobile No</label>
                                <Input className=" !py-2 border-[#086BD8]" value={mobile} disabled={true} />
                            </div>
                            <div></div>
                            <div className="form-group mb-3">
                                <label htmlFor="" className='mb-2 block' >Pincode</label>
                                <Input className=" !py-2 border-[#086BD8]" disabled={!otpVerified} value={address.pincode} name='pincode' onChange={(e) => {
                                    handlePhoneValid(e.target.value) &&
                                        setAddress({ ...address, [e.target.name]: e.target.value })
                                    if (e.target.value.length >= 6) {
                                        handlePincode(e.target.value)
                                    }
                                }} />
                            </div>
                        </div>
                        <div className='grid grid-cols-[45%_10%_45%] mb-1'>


                            <div className="form-group mb-3">
                                <label htmlFor="" className='mb-2 block' >City</label>
                                <Input className=" !py-2 border-[#086BD8]" disabled={!otpVerified} value={address.city} name='city' onChange={(e) => setAddress({ ...address, [e.target.name]: e.target.value })} />
                            </div>
                            <div></div>
                            <div className="form-group mb-3">
                                <label htmlFor="" className='mb-2 block' >State</label>
                                <Input className=" !py-2 border-[#086BD8]" disabled={!otpVerified} value={address.state} name='state' onChange={(e) => setAddress({ ...address, [e.target.name]: e.target.value })} />
                            </div>
                        </div>
                        <div className="btn-container">
                            <Button className='font-semibold w-full' onClick={handleSubmit} disabled={!otpVerified} >Register</Button>
                        </div>


                    </div>
                </div>
                <div></div>
                <div className='mx-auto '>

                    <div className='relative '>
                        <Image src={register} alt="img not found" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register