import React from 'react'
import img from "../../public/images/iid-logo.png"
import Image from 'next/image';
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa";
const Header = () => {
    return (
        <>
            <div className="container py-[18px]   ">
                <div className="flex justify-between ">

                    <Image src={img} alt="" />
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
                        <Link className=" cursor-pointer text-gray/70" href="#">My Account</Link>
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] h-[1px] border-[#DDDDDD]'></div>

        </>
    )
}

export default Header