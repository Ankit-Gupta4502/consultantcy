import React, { useState, useEffect } from 'react'
import Input from '../UI/Input'
import { handlePhoneValid, returnKey } from "../../utils/utilities"
import Button from '../UI/Button'
import { verfiyMobile, login } from '../../redux/actions/AuthAction'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { useRouter } from 'next/router'
const Login = () => {
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState("")
    const dispatch: AppDispatch = useDispatch()
    const { AuthReducer: { auth, errors, isAuthentiCated, loading } } = useSelector((state: RootState) => state)
    const router = useRouter()
    const verfiyUser = () => {
        dispatch(verfiyMobile(mobile))
    }

    useEffect(() => {
        if (returnKey(errors, "message") === "This number is not register. Please register first.") {
            router.replace('/register')
        }
    }, [errors])

    useEffect(() => {
        if (isAuthentiCated && router) {
            router.back()
        }
    }, [isAuthentiCated,router])

    const handleLogin = () => {
        dispatch(login(mobile,password))
    }

    return (
        <div className='bg-white pt-4 pb-11' >
            <div className="form-wrapper mt-5">
                <div className="mb-10">
                    <h2 className='font-medium text-3xl'>Login Now</h2>
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
                    <h6 className='cursor-pointer'>Forget Password</h6>
                </div>
                <p className='text-center mt-5 '>Doesn’t  have an account yet ? <span className='text-primary cursor-pointer'>Register</span></p>
            </div>
        </div>
    )
}

export default Login