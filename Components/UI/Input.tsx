import React, { InputHTMLAttributes } from 'react'
interface propTypes extends InputHTMLAttributes<HTMLInputElement> {
}
export const Input = ({ className, ...rest }: propTypes) => {
    return (
        <input {...rest} className={`border-2 rounded-lg ${className}`}  />
    )
}
