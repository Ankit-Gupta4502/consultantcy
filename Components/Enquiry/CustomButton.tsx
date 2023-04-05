import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { ButtonGroupProps } from "react-multi-carousel";
interface arrowbtns extends ButtonGroupProps {
    containerClass?: string,
    leftbtnStyle?:string,
    rightbtnStyle?:string
}
const CustomButton = ({ next, previous, containerClass = "",leftbtnStyle="",rightbtnStyle="" }: arrowbtns) => {
    return (

        <div className={`absolute   ${containerClass} z-10 flex justify-between w-full `}
        >
            <button onClick={() => next()} className={ `${leftbtnStyle} text-white bg-black/50 h-10 w-10 border-white flex justify-center items-center `}>
                <AiOutlineLeft  />
            </button>
            <button onClick={() => previous()} className={` ${rightbtnStyle} text-white bg-black/50 h-10 w-10 border-white flex justify-center items-center `}>
                <AiOutlineRight  />
            </button>
        </div>
    );
};

export default CustomButton;
