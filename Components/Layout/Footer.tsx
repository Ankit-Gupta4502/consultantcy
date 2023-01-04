import React from 'react'
import Image from 'next/image'
import logo from "../../public/images/iid-logo.png"
import Link from 'next/link'
import {BsFacebook} from "react-icons/bs"
import {FaLinkedinIn,FaTwitter} from "react-icons/fa"
const Footer = () => {
    return (
        <footer className="bg-slate relative">
            <div className="container pt-[50px] ">
                <div className="hidden md:block absolute w-full h-px bg-[#DDDDDD] bottom-[70px] left-0"></div>
                <div className="footer-wrapper grid gap-y-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                    <div className="logo-wrapper md:border-r md:border-[#DDDDDD]  pr-[58px] pb-[51px]">
                        <Image src={logo} alt='logo' className='mb-[39px]' />
                        <p className='text-gray/70' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ab. Alias quos aspernatur, obcaecati commodi quia porro eligendi veniam ipsa, ut consectetur ipsam voluptatem laboriosam quibusdam sequi eius libero corporis
                        </p>
                    </div>

                    <div className="link-wrapper md:border-r md:border-[#DDDDDD]  pl-[26px] pr-[58px]">
                        <h5 className=' font-semibold mb-[15px]'>Lorem Impsum</h5>
                        <div className="space-y-2">
                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>
                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>


                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>
                        </div>
                    </div>


                    <div className="link-wrapper md:border-r md:border-[#DDDDDD]  pl-[26px] pr-[58px]">
                        <h5 className=' font-semibold mb-[15px]'>Lorem Impsum</h5>
                        <div className="space-y-2">
                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>
                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>


                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>
                        </div>
                    </div>

                    <div className="link-wrapper md:border-r md:border-[#DDDDDD]  pl-[26px] pr-[58px]">
                        <h5 className=' font-semibold mb-[15px]'>Lorem Impsum</h5>
                        <div className="space-y-2">
                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>
                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>

                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>


                            <Link href="#" className='text-gray/70 block' >
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="foot-mark py-[18px] flex  md:justify-between md:flex-row flex-col">
                    <span className='text-gray/70'>Copyright © 2022 IID Mart. All Rights Reserved.</span>
                    <div className="icons-wrapper flex space-x-2 mt-3 justify-center md:justify-start md:mt-0">
                            <BsFacebook color='#3b5998' size={32} />
                            <div className='w-[35px] h-[35px] grid place-items-center rounded-full bg-[#0077b5]' >
                                    <FaLinkedinIn color='#fff' size={15} />
                            </div>
                            <div className='w-[35px] h-[35px] grid place-items-center rounded-full bg-[#00acee]' >
                                    <FaTwitter color='#fff' size={15} />
                            </div>                            
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer