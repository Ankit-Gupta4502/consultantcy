import React, { ButtonHTMLAttributes } from "react";

export interface propType extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: "filled" | "outlined";
  disabled?: boolean;
  type?: "submit" | "button";
  size?: "md" | "sm";
}
const Button = ({
  size = "md",
  children,
  type = "button",
  className = "",
  onClick,
  variant = "filled",
  disabled = false,
  ...rest
}: propType) => {
  return (
    <button
      className={` ${className} ${size === "md" ? "px-8 " : "px-3 text-sm "
        } py-2 rounded-3xl  text-sm font-bold ${disabled?"!text-white !bg-primary/50":""} ${variant === "filled"
          ? "text-white bg-primary"
          : "text-primary bg-white border border-primary"
        } `}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
