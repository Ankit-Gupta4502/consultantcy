import React, { useState } from 'react'

import Input from '../UI/Input'
import { handlePhoneValid } from "../../utils/utilities"
import Button from '../UI/Button'
const Login = () => {
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState("")
    return (
        <div className='bg-white pt-4 pb-11' >
            <div className="form-wrapper mt-5">
                <div className="mb-10">
                    <h2 className='font-medium text-3xl'>Login Now</h2>
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
                <div className='flex justify-between items-center mt-5'>
                    <div >
                        <input type="checkbox" className='cursor-pointer'/><span className='px-1'>Remember Me</span>
                    </div>
                    <div>
                        <h6 className='cursor-pointer'>Forget Password</h6>
                    </div>
                   
                </div>
                <p className='text-center mt-5 '>Doesn’t  have an account yet ? <span className='text-primary cursor-pointer'>Register</span></p>
            </div>
        </div>
    )
}

export default Login