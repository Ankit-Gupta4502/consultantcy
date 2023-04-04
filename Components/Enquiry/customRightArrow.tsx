import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { ButtonGroupProps } from "react-multi-carousel";
const customRightArrow = ({ next, previous }: ButtonGroupProps) => {
    return (

        <div className="absolute   z-10 flex justify-between w-full "
        >
            <button onClick={() => next()} className="bg-black/50 h-10 w-10 border-white flex justify-center items-center">
                <AiOutlineLeft color="white" />
            </button>
            <button onClick={() => previous()} className="bg-black/50 h-10 w-10 border-white flex justify-center items-center">
                <AiOutlineRight color="white" />
            </button>
        </div>
    );
};

export default customRightArrow;
