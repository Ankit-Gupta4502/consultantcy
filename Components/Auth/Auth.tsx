import React from 'react'
import Login from './Login'

const Auth = ({ type = "login" }: { type?: string }) => {
    return (
        <div className='container grid grid-cols-[1.3fr_1.7fr] gap-[43px] px-10 items-center min-h-screen' >
            <Login/>
            <div>

            </div>
        </div>
    )
}

export default Auth