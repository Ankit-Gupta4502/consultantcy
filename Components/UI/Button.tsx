import React, { ButtonHTMLAttributes } from 'react'

export interface propType extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children?: React.ReactNode,
    variant?: "filled" | "outlined",
    disabled?: boolean
    type?: "submit" | "button",
    size?: "md" | "sm"
}
const Button = ({ size = "md", children, type = "button", className = "", onClick, variant = "filled", disabled = false, ...rest }: propType) => {
    return (
        <button className={`${size==="md"?"px-8":"px-6"} py-2.5 rounded-md font-normal text-sm ${variant === "filled" ? "text-white bg-primary" : "text-primary bg-white border border-primary"} ${className}`} onClick={onClick} disabled={disabled} type={type} {...rest}>
            {children}
        </button>
    )
}

export default Button