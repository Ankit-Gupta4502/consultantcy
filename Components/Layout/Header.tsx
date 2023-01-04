import React from 'react'
import img from "../../public/images/iid-logo.png"
import Image from 'next/image';
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa";
const Header = () => {
    return (
        <>
            <div className="container py-[18px]">
                <div className="flex justify-between ...">

                    <Image src={img} alt="" />
                    <div className="flex space-x-10 items-center">
                        <div className="flex space-x-4 cursor-pointer text-gray/70">
                            <span>

                                All Services
                            </span>
                            <span className=' flex items-center' ><FaAngleDown fontSize={18}/></span>
                        </div>
                        <Link className=" cursor-pointer text-gray/70" href="#">Courses</Link>
                        <Link className=" cursor-pointer text-gray/70" href="#">  About us</Link>
                        <Link className=" cursor-pointer text-gray/70" href="#">My Account</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header