import React, { useState } from 'react'
import logo from "../../public/images/iid-logo.png"
import Image from 'next/image'
import Link from 'next/link'
import Input from '../UI/Input'
import { handlePhoneValid } from "../../utils/utilities"
import Button from '../UI/Button'
const Login = () => {
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState("")
    return (
        <div className='bg-white pt-4 pb-11 shadow-[0_4px_20px_0px_rgba(0,0,0,0.1)] rounded-[10px] px-10 ' >
            <div className="form-wrapper mt-10">
                <div className="text-center">
                    <h2>Login</h2>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="" className='mb-2 block' >Mobile</label>
                    <Input value={mobile} onChange={(e) => (handlePhoneValid(e.target.value) && e.target.value.length < 11) && setMobile(e.target.value)} />
                </div>

                <div className="form-group mb-[30px]">
                    <label htmlFor="" className='mb-2 block' >Password</label>
                    <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="btn-container">
                    <Button className='font-semibold w-full' >Log in</Button>
                </div>


            </div>
        </div>
    )
}

export default Login