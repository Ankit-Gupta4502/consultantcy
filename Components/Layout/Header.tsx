import React, { useState, useEffect } from 'react'
import img from "../../public/images/iid-logo.png"
import Image from 'next/image';
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa";
import { LOG_OUT } from '../../redux/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
const Header = () => {
    const dispatch: AppDispatch = useDispatch()
    const { AuthReducer: { isAuthentiCated } } = useSelector((state: RootState) => state)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        setIsAuth(isAuthentiCated)
    }, [isAuthentiCated])


    return (
        <>
            <div className="container py-[18px]   ">
                <div className="flex justify-between ">
                    <Link href="/">
                        <Image src={img} alt="" />
                    </Link>

                    <div className="flex space-x-10 items-center ">
                        <div className="flex space-x-4 cursor-pointer text-gray/70 relative group duration-300 ease-in-out">
                            <span>

                                All Services
                            </span>
                            <span className='flex items-center' ><FaAngleDown fontSize={18} /></span>

                            <div className="group-hover:visible group-hover:translate-y-0 translate-y-7 duration-300 ease-in-out invisible  py-5 rounded-xl bg-white px-2 absolute top-9 z-10 left-0 !ml-0">
                                <Link href="#" className='hover:bg-gray/10 rounded-md ease-out w-full pl-5 pr-32 py-3 block duration-300' > Test  </Link>
                                <Link href="#" className=' hover:bg-gray/10 rounded-md ease-out w-full pl-5 pr-32 py-3 block duration-300'> Test </Link>
                                <Link href="#" className=' hover:bg-gray/10 rounded-md ease-out w-full pl-5 pr-32 py-3 block duration-300'> Test </Link>
                            </div>
                        </div>
                        <Link className=" cursor-pointer text-gray/70" href="#">Courses</Link>
                        <Link className=" cursor-pointer text-gray/70" href="#">  About us</Link>
                        {
                            isAuth ?
                                <div className="group relative group duration-300 ease-in-out cursor-pointer text-gray/70" >
                                    <span>
                                        My Account
                                    </span>

                                    <div className="group-hover:visible group-hover:translate-y-0 translate-y-7 duration-300 ease-in-out invisible  py-5 rounded-xl bg-white px-2 absolute top-9 z-10 left-0 !ml-0 shadow-2xl">
                                        <span role="button" className='w-max hover:bg-gray/10 rounded-md ease-out  pl-5 py-3 block duration-300 text-sm pr-32' onClick={() => dispatch({ type: LOG_OUT })} >Log out</span>
                                    </div>

                                </div> : <Link href="/login" className='text-gray/70' >Log in</Link>
                        }
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] h-[1px] border-[#DDDDDD]'></div>

        </>
    )
}

export default Header