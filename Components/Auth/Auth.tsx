import React from 'react'
import Login from './Login'
import loginn from "../../public/images/login.png"
import Image from 'next/image'
const Auth = ({ type = "login" }: { type?: string }) => {
    return (
        <div className=' bg-[#F5F5F5] p-[30px]' >
            <div className='  grid grid-cols-[30%_10%_30%] justify-center gap-[43px] items-center py-10 bg-white rounded-[10px] '>
                <Login />
                <div></div>
                <div className='mx-auto'>
                    <Image src={loginn} alt="img not found" />
                </div>

            </div>

        </div>
    )
}

export default Auth