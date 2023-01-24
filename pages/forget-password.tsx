import React, { useState } from 'react'
import Input from '../Components/UI/Input'
import { handlePhoneValid } from "../utils/utilities"
import Button from '../Components/UI/Button'
import OtpInput from "react-otp-input";
import Image from 'next/image'
import img from "../public/images/forgotPassword.png"
import RiErrorWarningFill from "../Components/UI/Input"
const forgetpassword = () => {
  const [mobile, setMobile] = useState('')
  const [dbotp, setDbOtp] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState("")
  const [newpassword, setNewPassword] = useState("")

  const handleOTPChange = async (value: number) => {
    setOtp(value.toString());
  };
  const submit = () => {
    if(mobile)
    {
      setDbOtp("1234")
    }
   

  }
  return (
    <div className=' bg-[#F5F5F5] p-[30px]'>
      <div className="container">
        <div className=" grid grid-cols-[30%_5%_30%] justify-center gap-[33px] items-center py-8 bg-white rounded-[10px] ">
          <div>
            <h2 className='font-medium text-3xl mb-7'>Forgot Password</h2>
            <div>
              <div className="form-group mb-5">
                <label htmlFor="" className='mb-5 block' >Enter Mobile No</label>
                <Input value={mobile} onChange={(e) => (handlePhoneValid(e.target.value) && e.target.value.length < 11) && setMobile(e.target.value)} className=" !py-2 border-[#086BD8]" disabled={dbotp ? true : false} />
              </div>
              {dbotp ? null : <div className="btn-container mb-3">
                <Button className='font-semibold w-full' onClick={submit}>Send OTP</Button>
              </div>}

            </div>
            {dbotp && mobile.length == 10 && <div className="d-flex align-items-center">
              <OtpInput
                value={otp}
                numInputs={4}
                separator={<span className="me-2 ms-2">*</span>}
                onChange={(value: number) => handlePhoneValid(value) && handleOTPChange(value)}
                inputStyle={{
                  width: "100%",
                  borderRadius: "6px",
                  border: "1px solid #086BD8",
                  height: "38px",
                }}
              />


              {dbotp && otp === dbotp && (
                <div className="img-wrapper position-relative overflow-hidden ms-2 mt-3">
                  <div className="form-group mb-3">
                    <label htmlFor="" className='mb-2 block' >Password</label>
                    <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} className=" !py-2 border-[#086BD8]" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="" className='mb-2 block' >Confirmed Password</label>
                    <Input value={newpassword} type="password" onChange={(e) => setNewPassword(e.target.value)} className=" !py-2 border-[#086BD8]" />
                  </div>

                  {password === "" && newpassword === "" || newpassword === "" ? null : <>{newpassword === password ? <p className='text-green-500'>confirmed password match</p> : <p className='text-danger'>confirmed password not match</p>}</>}
                  <div className="btn-container mb-3">
                    <Button className='font-semibold w-full' >Update Password</Button>
                  </div>
                </div>
              )}

              {/* {errors?.otp && (
                            <Image
                              src={Cross}
                              objectFit="contain"
                              width={25}
                              height={20}
                              alt='wrong'
                            />
                          )} */}
            </div>}


          </div>
          <div></div>
          <div>
            <Image src={img} alt="image not found" />
          </div>
        </div>


      </div>
    </div>
  )
}

export default forgetpassword