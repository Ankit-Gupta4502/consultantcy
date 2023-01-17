import React, { useState } from 'react'
import Input from '../Components/UI/Input'
import { handlePhoneValid } from "../utils/utilities"
import Button from '../Components/UI/Button'
import register from "../public/images/register.png"
import Image from 'next/image'
const Register = () => {
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState("")
    const [newpassword, setNewPassword] = useState("")
    return (
        <div className=' bg-[#F5F5F5] p-[30px]' >
            <div className='  grid grid-cols-[30%_5%_30%] justify-center gap-[33px] items-center py-2 bg-white rounded-[10px] '>
                <div className='bg-white pt-4 pb-11' >
                    <div className="form-wrapper mt-5">
                        <div className="mb-8">
                            <h2 className='font-medium text-3xl'>Register Now</h2>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="" className='mb-2 block' >Phone No</label>
                            <Input value={mobile} onChange={(e) => (handlePhoneValid(e.target.value) && e.target.value.length < 11) && setMobile(e.target.value)} className=" !py-2 border-[#086BD8]" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="" className='mb-2 block' >Password</label>
                            <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} className=" !py-2 border-[#086BD8]" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="" className='mb-2 block' >Confirmed Password</label>
                            <Input value={newpassword} type="password" onChange={(e) => setNewPassword(e.target.value)} className=" !py-2 border-[#086BD8]" />
                        </div>
                       
                       {password==="" && newpassword===""|| newpassword===""?null:<>{newpassword===password?<p className='text-green-500'>confirmed password match</p>:<p className='text-danger'>confirmed password not match</p>}</>}
                        <div className='grid grid-cols-[45%_10%_45%]'>


                            <div className="form-group mb-3">
                                <label htmlFor="" className='mb-2 block' >Mobile No</label>
                                <Input value={mobile} onChange={(e) => (handlePhoneValid(e.target.value) && e.target.value.length < 11) && setMobile(e.target.value)} className=" !py-2 border-[#086BD8]" />
                            </div>
                            <div></div>
                            <div className="form-group mb-3">
                                <label htmlFor="" className='mb-2 block' >Pincode</label>
                                <Input value={mobile} onChange={(e) => (handlePhoneValid(e.target.value) && e.target.value.length < 11) && setMobile(e.target.value)} className=" !py-2 border-[#086BD8]" />
                            </div>
                        </div>
                        <div className='grid grid-cols-[45%_10%_45%] mb-1'>


                            <div className="form-group mb-3">
                                <label htmlFor="" className='mb-2 block' >City</label>
                                <Input value={mobile} onChange={(e) => (handlePhoneValid(e.target.value) && e.target.value.length < 11) && setMobile(e.target.value)} className=" !py-2 border-[#086BD8]" />
                            </div>
                            <div></div>
                            <div className="form-group mb-3">
                                <label htmlFor="" className='mb-2 block' >State</label>
                                <Input value={mobile} onChange={(e) => (handlePhoneValid(e.target.value) && e.target.value.length < 11) && setMobile(e.target.value)} className=" !py-2 border-[#086BD8]" />
                            </div>
                        </div>
                        <div className="btn-container">
                            <Button className='font-semibold w-full' >Register</Button>
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