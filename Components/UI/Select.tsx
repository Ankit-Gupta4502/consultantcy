import React, { InputHTMLAttributes } from 'react'
interface propTypes extends InputHTMLAttributes<HTMLSelectElement> {
  options?: string[],
  invalid?: boolean
}
import { FiChevronDown } from "react-icons/fi"
const Select = ({ className = "", invalid = false, options = [], ...rest }: propTypes) => {
  return (
    <div className="flex relative">
      <select {...rest} className={`rounded-lg relative bg-white appearance-none border ${invalid?"border-danger text-danger" :"border-[#DDDDDD]"} py-[15px] px-3.5 w-full  ${className}`} >
        <option value="">Select</option>
        {
          options.map((item) => {
            return <option value={item}>{item}</option>
          })
        }
      </select>
      <div className="icon-wrapper absolute top-1/2 right-4 translate-y-[-50%] pointer-events-none ">
        <FiChevronDown className={invalid?"text-danger":"text-gray/30"} />
      </div>
    </div>
  )
}

export default Select