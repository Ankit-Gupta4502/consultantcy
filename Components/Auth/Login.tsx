import React, { useState } from 'react'
import logo from "../../public/images/iid-logo.png"
import Image from 'next/image'
import Link from 'next/link'
import Input from '../UI/Input'
const Login = () => {
    const [mobile, setMobile] = useState<string>('')
    return (
        <div className='bg-white pt-8 pb-11 shadow-[0_4px_20px_0px_rgba(0,0,0,0.1)] rounded-[10px] px-10 ' >
            <div className="logo-wrapper mx-auto w-max">
                <Image src={logo} alt='logo' />
            </div>

            <div className="form-wrapper mt-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className='font-semibold' >Login</h2>
                        <small className="text-gray/50" >
                            Doesn’t  have an account yet ?
                        </small>
                    </div>

                    <Link href="/register" className='text-primary font-semibold' >
                        Register
                    </Link>
                </div>
                <div className="form-group">
                    <label htmlFor="" className='' >Mobile</label>
                    <Input  value={mobile} onChange={(e) => e.target.value.length < 11 && setMobile(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default Login