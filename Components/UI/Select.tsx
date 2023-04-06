import React, { InputHTMLAttributes } from 'react'
interface propTypes extends InputHTMLAttributes<HTMLSelectElement> {
  options?: string[],
  invalid?: boolean,
  iconStyles?: string
}
import { FiChevronDown } from "react-icons/fi"
const Select = ({ className = "", invalid = false, children, iconStyles = '', ...rest }: propTypes) => {
  return (
    <div className="flex relative">
      <select {...rest} className={`rounded-lg relative bg-white appearance-none border focus: outline-none ${invalid ? "border-danger placeholder-danger text-danger" : "border-[#DDDDDD]"} py-[15px] px-3.5 w-full  ${className}`} >
        {children}
      </select>
      <div className="icon-wrapper absolute top-1/2 right-4 translate-y-[-50%] pointer-events-none ">
        <FiChevronDown className={`${invalid ? "text-danger" : "text-gray/30"} ${iconStyles}`} />
      </div>
    </div>
  )
}

export default Select