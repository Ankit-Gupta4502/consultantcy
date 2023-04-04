import React, { useState, useEffect } from 'react'
import img from "../../public/images/Rectangle 2.png"
import img2 from "../../public/images/Group 22.png"
import img3 from "../../public/images/Rectangle 19.png"
import Image from 'next/image'
import Button from '../UI/Button'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { item } from '../../interface'
import { getIndustries } from '../../redux/actions/IndustryAction'
import { toast } from "react-toastify"
import Select from '../../Components/UI/Select'
const Hero = () => {
    const { IndexReducer: { categories }, IndustriesReducer: { categories: industries } } = useSelector((state: RootState) => state)
    const dispatch: AppDispatch = useDispatch()
    const [sector, setSector] = useState("")
    const [industry, setIndustry] = useState("")
    useEffect(() => {
        if (sector) {
            dispatch(getIndustries(sector))
        }
    }, [sector])





    return (
        <div className={` w-full h-[600px] bg-cover bg-no-repeat flex items-center`} style={{ backgroundImage: `url('${img.src}')` }}>


            <div className="container ">
                <div className='flex items-center'>
                    <div className="grid grid-cols-1 md:gap-0 gap-2 mt-8 md:mt-0  md:grid-cols-[1fr_1fr]">
                        <div><div className='flex flex-col justify-center '>
                            <h1 className='text-5xl mb-5 font-bold leading-[60px]'>Book best<span className='text-primary'> consultant</span> <br />
                                to your solution</h1>
                            <p className='text-gray/70 mb-5'>Explore consultant from 250+ Industry </p>

                            <div className="grid md:grid-cols-[35%_35%_30%] items-center grid-cols-1 gap-x-2 ">
                                <div className=" flex md:space-x-4 cursor-pointer text-gray/70">

                                    <Select className={"focus: outline-none bg-white cursor-pointer w-full px-4 py-3 border-white   rounded-[40px]"} id="cars" name='gender' value={sector} onChange={((({ target: { value } }) => setSector(value)))}>
                                        <option value="">Select Sector</option>
                                        {
                                            categories.map((item: item) => {
                                                return <option value={item?.slug} key={item.id}>{item?.name_english}</option>
                                            })
                                        }
                                    </Select>
                                </div>

                                <div className="   cursor-pointer text-gray/70 ">
                                    <Select className={`focus: outline-none bg-white cursor-pointer w-full px-4 py-1 border-white   rounded-full`} id="cars" name='gender' value={industry} onChange={((({ target: { value } }) => setIndustry(value)))}>
                                        <option value="">Select Industry</option>
                                        {
                                            industries.map((item: item) => {
                                                return <option value={item?.slug} key={item.id}>{item?.name_english}</option>
                                            })
                                        }
                                    </Select>
                                </div>
                                {/* <div className='text-center'>
                                    <Button onClick={() => toast.error("Success")} >Book Now</Button>
                                </div> */}
                            </div>
                            <div className='my-5'>
                                <Button onClick={() => toast.error("Success")} className="rounded-[30px] py-4" >Book Consultant</Button>
                            </div>


                        </div></div>

                        <div></div>
                        <div></div>
                    </div>
                </div>


            </div>

        </div >
    )
}

export default Hero