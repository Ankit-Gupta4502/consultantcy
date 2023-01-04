import React, { InputHTMLAttributes } from 'react'
import { RiErrorWarningFill } from "react-icons/ri"
interface propTypes extends InputHTMLAttributes<HTMLInputElement> {
    invalid?: boolean;
}
const Input = ({ className = "", invalid = false, ...rest }: propTypes) => {
    return (
        <div className="flex relative">
            <input {...rest} className={`border w-full px-3.5 py-[15px] focus:outline-none ${invalid?"border-danger text-danger" :"border-[#DDDDDD]"} rounded-lg ${className}`} />
            {invalid && <div className="icon-wrapper absolute top-1/2 right-4 translate-y-[-50%] pointer-events-none ">
                <RiErrorWarningFill className={invalid ? "text-danger" : "text-gray/30"} />
            </div>}

        </div>
    )
}

export default Input