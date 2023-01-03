import React, { InputHTMLAttributes } from 'react'
interface propTypes extends InputHTMLAttributes<HTMLInputElement> {
}
export const Input = ({ ...rest }: propTypes) => {
    return (
        <input {...rest} />
    )
}
