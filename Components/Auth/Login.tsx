import React, { useState, useEffect, } from 'react'
import Input from '../UI/Input'
import { handlePhoneValid, returnKey } from "../../utils/utilities"
import Button from '../UI/Button'
import { verfiyMobile, login, verifyConsultant, loginConsultant } from '../../redux/actions/AuthAction'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Login = () => {
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState("")
    const [loginAs, setLoginAs] = useState("user")
    const dispatch: AppDispatch = useDispatch()
    const { AuthReducer: { auth, errors, isAuthentiCated, loading } } = useSelector((state: RootState) => state)
    const router = useRouter()
    const verfiyUser = () => {
        if (loginAs === "user") {
            dispatch(verfiyMobile(mobile))
        } else {
            dispatch(verifyConsultant(mobile))
        }
    }


    useEffect(() => {
        if (errors["status"] === 422) {
            router.replace('/register')
        }
    }, [errors])

    useEffect(() => {
        if (isAuthentiCated ) {
            router.back()
        }
    }, [isAuthentiCated])

    const handleLogin = () => {
        if (loginAs === "user") {
            dispatch(login(mobile, password))
        }
        else {
            dispatch(loginConsultant(mobile, password))
        }
    }


    return (
        <div className='bg-white pt-4 pb-11' >
            <div className="form-wrapper mt-5">
                <div className="mb-10 flex justify-center space-x-10 items-center ">
                    <div className={`tab ${loginAs === "user" ? "bg-primary text-white" : ""}  px-4 py-3 rounded-md`}>
                        <span role="button" onClick={() => setLoginAs("user")}>
                            Login As User
                        </span>
                    </div>
                    <div className={`tab px-4 py-3 rounded-md ${loginAs === "consultant" ? "bg-primary text-white" : ""} `}>
                        <span role="button" onClick={() => setLoginAs("consultant")}>

                            Login As Consultant
                        </span>
                    </div>

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="" className='mb-2 block' >Mobile</label>
                    <Input value={mobile} onChange={(e) => (handlePhoneValid(e.target.value) && e.target.value.length < 11) && setMobile(e.target.value)} invalid={Boolean(returnKey(errors, "mobile"))} />
                    <span className='block text-danger' > {returnKey(errors, "mobile")} </span>
                </div>

                {Object.keys(auth).length ? <div className="form-group mb-[30px]">
                    <label htmlFor="" className='mb-2 block' >Password</label>
                    <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </div> : ""}

                <div className="btn-container">
                    <Button className='font-semibold w-full' disabled={loading} onClick={Object.keys(auth).length ? handleLogin : verfiyUser} >{Object.keys(auth).length ? "Login" : "Verify Mobile"}</Button>
                </div>
                <div className=' text-end mt-5'>
                    <Link href="/forget-password" className='cursor-pointer'>Forget Password</Link>
                </div>
            </div>
        </div>
    )
}

export default Login