import React, { HtmlHTMLAttributes, useState } from 'react'
import Image from 'next/image'
import img from "../../public/images/download.jpeg"
import img2 from "../../public/images/enquiry2.png"
import Input from '../UI/Input'
import Select from "../UI/Select"
import Button from '../UI/Button'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { handlePhoneValid } from '../../utils/utilities'

const Enquiry = React.memo(() => {
    const [formData, setFormData] = useState({ name: '', mobile: "", industry: "1", email: "" })
    const [errors, setErrors] = useState<{ name?: string, mobile?: string, email?: string }>({})
    const [loading, setLoading] = useState(false)
    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => { return { ...prev, [name]: value } })
    }

    const handleSubmit = () => {
        axios.post("/api/web/v1/enquiry-request", formData)
            .then((res) => {
                setFormData({
                    name: "",
                    mobile: "",
                    email: "",
                    industry: ""
                })
                setErrors({})
                toast.success(res.data?.message)
            })
            .catch((err) => {
                setErrors(err.response.data?.data)
                toast.error(err.response.data?.message);
            })
    }

    return (
        <div className=' py-24'>

            <div className='container relative'>
                <div className='border rounded-tl-[80px] rounded-br-[80px] border-[#dddddd] overflow-hidden '>
                    <div className='grid md:grid-cols-[1fr_1fr] bg-primary'>
                        <div className="img-wrapper w-100 max-w-[483px] ">
                            <Image src={img2} alt='' className='w-100 rounded-br-[80px]' height={547} />
                        </div>
                        <div className='bg-primary flex flex-col justify-center  '>
                            <div className="form-wrapper max-w-[441px] w-full">
                                <h2 className='text-white'>Any Enquiry</h2>
                                <p className='text-gray/70 mb-7 text-white ' >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    tempor incididunt.
                                </p>

                                <div className='space-y-[30px]' >
                                    <div>
                                        <Input placeholder='Full Name*' invalid={Boolean(errors?.name)} value={formData.name} name='name' onChange={handleForm} className='bg-primary !text-white placeholder-white' />
                                        <div className="flex space-x-[17px]">
                                            <span className="text-danger block my-3"> {errors?.name} </span>
                                        </div>
                                        <div>
                                            <Input invalid={Boolean(errors?.email)} placeholder='Email' value={formData.email} name='email' onChange={handleForm} className='bg-primary text-white placeholder-white' />
                                            <span className="text-danger block my-3"> {errors?.email} </span>
                                        </div>
                                        <div>
                                            <Input placeholder='Mobile' invalid={Boolean(errors?.mobile)} value={formData.mobile} name='mobile' onChange={(e) => handlePhoneValid(e.target.value) && handleForm(e)} className='bg-primary text-white placeholder-white' />
                                            <span className="text-danger block my-3"> {errors?.mobile} </span>
                                        </div>
                                    </div>
                                    <Select className="!bg-primary !rounded-md !text-white cursor-pointer" iconStyles="!text-white" value={formData.industry} name='gender' onChange={handleForm}  >
                                        <option value="">Select Industry</option>
                                        <option value="1">Dummy</option>

                                    </Select>
                                    <Button onClick={handleSubmit} className='bg-white text-primary text-xs'>Send Enquery</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' border rounded-tl-[80px] rounded-br-[80px] border-[#dddddd] overflow-hidden grid md:grid-cols-[1fr] w-full h-full bg-[#dddd] bottom-[-20px] right-[-20px] absolute z-[-1]'>
                    hi
                </div>
            </div>

        </div>
    )
})

export default Enquiry