import React, { useEffect, useState } from 'react'
import img3 from "../public/images/Rectangle 19.png"
import Image from 'next/image'
import { BsFillPersonFill, BsBank2 } from "react-icons/bs"
import { FaShoppingBasket } from "react-icons/fa"
import { HiCurrencyRupee } from "react-icons/hi"
import { MdSupportAgent, MdOutlineLogout } from "react-icons/md"
import { getUserDetails } from '../redux/actions/AuthAction'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { returnKey } from '../utils/utilities'
const exportProfilePage = () => {
    const dispatch: AppDispatch = useDispatch()
    const { AuthReducer: { user, auth } } = useSelector((state: RootState) => state)
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        dob: "",
        contact: "",
        pincode: "",
        city:"",
        state:""
    })
    useEffect(() => {
        if (auth.token) {
            dispatch(getUserDetails(auth?.token))
        }
    }, [auth])

    useEffect(() => {
        if (user) {
            setFormData({
                ...formData,
                name: returnKey(user, "name"),
                mobile: returnKey(user, "mobile"),
                email: returnKey(user, "email"),
                dob: returnKey(user, "dob"),
                pincode: returnKey(user, "pincode"),
                state:returnKey(user,"state"),
                city:returnKey(user,"city")
            })
        }
    }, [user])

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            <div className='h-14 bg-primary'>

            </div>
            <div className='container '>
                <div className='  grid md:grid-cols-[.95fr_2.5fr] gap-[40px]  py-[50px] items-start'>
                    <div >


                        <div className='rounded-[20px] px-10 py-5  shadow-lg  text-center '>
                            <div className='flex justify-start items-center'>

                                <div className='border w-[65px] h-[65px] bg-slate overflow-hidden border-slate  mr-3 rounded-full'>
                                    <Image src={img3} alt="" />

                                </div>
                                <div>
                                    <p className='text-gray/70 text-start text-sm mb-0'>Hello</p>
                                    <h6 className='text-[#243A73] text-xl text-start tracking-[-0.24px]'>{returnKey(user, "name")}</h6>
                                    <p className='text-danger text-xs'>Member since 5 dec, 2022</p>
                                </div>

                            </div>
                            <div className='bg-primary py-2 px-4 mt-4 rounded-md text-white flex gap-x-2 items-center cursor-pointer justify-center'>Edit Profile</div>


                        </div>
                        <div className='rounded-md  border-2 border-slate shadow-lg cursor-pointer overflow-hidden mt-8'>
                            <div className=' py-3 px-5  text-base text-gray/70 flex items-center gap-x-5'>
                                <div><BsFillPersonFill fontSize={18} /></div>
                                Profile
                            </div>
                            <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                            <div className=' py-3 px-5 text-gray/70 text-base flex items-center gap-x-5'>
                                <div><FaShoppingBasket fontSize={18} /></div>
                                My Order
                            </div>
                            <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                            <div className=' py-3 px-5 text-gray/70 text-base flex items-center gap-x-5'>
                                <div><BsBank2 fontSize={18} /></div>
                                Account Setting
                            </div>
                            <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                            <div className=' py-3 px-5 text-gray/70 text-base flex items-center gap-x-5'>
                                <div><HiCurrencyRupee fontSize={19} /></div>
                                Payments
                            </div>
                            <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                            <div className=' py-3 px-5 text-gray/70 text-base flex items-center gap-x-5'>
                                <div><MdSupportAgent fontSize={19} /></div>
                                Support
                            </div>
                            <div className='border-b-[1px] h-[1px] border-[#ddd]'></div>
                            <div className=' py-3 px-5 text-gray/70 text-base flex items-center gap-x-5'>
                                <div><MdOutlineLogout fontSize={19} /></div>
                                Log out
                            </div>


                        </div>
                    </div>
                    <div className="grid grid-rows-[1.8fr,.2fr] grid-flow-row gap-4 rounded-[20px] px-7 py-5  shadow-lg">
                        <div className='  grid md:grid-cols-[1fr_1fr] gap-x-12 '>
                            <div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  " >
                                        Name
                                    </label>
                                    <input className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2 w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none " id="username" type="text" name='name' value={formData.name} onChange={handleForm} />
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  " >
                                        Date of Birth
                                    </label>
                                    <input className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none cursor-pointer" id="dateofbirth" name='dob' value={formData.dob} type="date" onChange={handleForm} />
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        Contact
                                    </label>
                                    <input name='contact' className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none " id="contact" type="text" />
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        Communication Address
                                    </label>
                                    <input className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none " id="address" type="text" placeholder="" />
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        City
                                    </label>
                                    <input value={formData.city} name="city" onChange={handleForm} className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none " id="country" type="text" />
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        Sector
                                    </label>
                                    <select className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 cursor-pointer leading-tight focus:outline-none " id="sector" >
                                        <option  >New Mexico</option>
                                        <option>Missouri</option>
                                        <option>Texas</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        Email
                                    </label>
                                    <input name='email' className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none " id="dateofbirth" type="email" value={formData.email} onChange={handleForm} />
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        Gender
                                    </label>
                                    <select className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 cursor-pointer leading-tight focus:outline-none " id="gender" >
                                        <option>Male</option>
                                        <option>Female</option>

                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        Alternate No.
                                    </label>
                                    <input className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none " id="alternate" type="text" />
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        Pincode
                                    </label>
                                    <input name='pincode' className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none " id="pincose" type="text" value={formData.pincode} onChange={handleForm} />
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        State
                                    </label>
                                    <input name='state' onChange={handleForm} value={formData.state} className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none " id="contact" type="text" />
                                </div>
                                <div className="mb-4">
                                    <label className=" text-[#6F7B9D] text-sm  m" >
                                        Industry
                                    </label>
                                    <select className="shadow border-[#d6d6d6] bg-[#F7F8FA] border rounded mt-2  w-full py-2 px-3 text-gray-70 cursor-pointer leading-tight focus:outline-none " id="industry" >
                                        <option>New Mexico</option>
                                        <option>Missouri</option>
                                        <option>Texas</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='bg-primary py-2 px-20 mt-1 rounded-md text-white items-center cursor-pointer '>Submit</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default exportProfilePage