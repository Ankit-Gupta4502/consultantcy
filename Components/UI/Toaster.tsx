import React, { useState, useEffect } from 'react'
import { MdOutlineClose } from "react-icons/md"
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { CgCheckO } from "react-icons/cg"
import { BiErrorCircle } from "react-icons/bi"
const Toaster = () => {
    const { ToastReducer: { message, show, state } } = useSelector((state: RootState) => state)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        let hideToast
        if (show) {
            hideToast = setTimeout(() => {
                dispatch({ type: "DISMISS_TOAST" })
            }, 2500)
        }
        return (() => hideToast && clearTimeout(hideToast))
    }, [show])



    return (
        <div className={`bg-white max-w-xs px-4  ${state === "success" ? "border-2 border-primary text-primary" : state === "error" ? "border-2 border-danger text-danger" : ""}  min-w-[250px] shadow-lg fixed top-12 z-50 rounded-lg ${show ? "right-5" : "right-[-50%]"} py-4 transition-all ease-in-out duration-700 `} >
            <div className="flex justify-between items-center">
                <div className="flex space-x-3 items-center">
                    {state === "success" ? <CgCheckO size={20} className='text-primary' /> : <BiErrorCircle size={20} className='text-danger' />}
                    <span>{message}</span>
                </div>
                <span role="button" className='ml-3' onClick={() => dispatch({ type: "DISMISS_TOAST" })} > <MdOutlineClose size={16} color='#FF0101' /> </span>
            </div>
        </div>
    )
}


export default Toaster