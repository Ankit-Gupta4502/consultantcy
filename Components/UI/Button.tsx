import React from 'react'

export interface propType {
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children?: React.ReactNode,
    variant?: "filled" | "outlined",
    disabled?: boolean
}
const Button = ({ children, className, onClick, variant = "filled", disabled = false }: propType) => {
    return (
        <button className={`px-8 py-2.5 rounded-md font-normal text-sm ${variant === "filled" ? "text-white bg-primary" : "text-primary bg-white border border-primary"} ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button