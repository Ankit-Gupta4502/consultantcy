import React, { useState, useEffect } from 'react'
import img from "../../public/images/Rectangle 2.png"
import Button from '../UI/Button'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { toast } from "react-toastify"
import Select from '../../Components/UI/Select'
import Link from 'next/link'
import { getCategoryType, getSectorByType } from '../../redux/actions/HomeAction'
const Hero = () => {
    const { IndexReducer: { categoryTypes, sectors } } = useSelector((state: RootState) => state)
    const dispatch: AppDispatch = useDispatch()
    const [sector, setSector] = useState("")
    const [categoryType, setCategoryType] = useState("")
    useEffect(() => {
        if (categoryType) {
            dispatch(getSectorByType(categoryType))
        }
    }, [categoryType])

    useEffect(() => {
        dispatch(getCategoryType())
    }, [])







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

                                <div className="   cursor-pointer text-gray/70 ">
                                    <Select className={`focus: outline-none bg-white cursor-pointer w-full px-4 py-1 border-white   rounded-full`} value={categoryType} onChange={((({ target: { value } }) => setCategoryType(value)))}>
                                        <option value="">Select Type</option>
                                        {
                                            categoryTypes.map((item: { id: number, type?: string }) => {
                                                return <option value={item?.id} key={item.id}>{item?.type}</option>
                                            })
                                        }
                                    </Select>
                                </div>

                                <Select className={"focus: outline-none text-gray/70 bg-white cursor-pointer w-full px-4 py-3 border-white   rounded-[40px]"} id="cars" name='gender' value={sector} onChange={((({ target: { value } }) => setSector(value)))}>
                                    <option value="">Select Sector</option>
                                    {
                                        sectors.map((item: { name_english?: string, slug?: string, id?: number }) => {
                                            return <option value={item?.slug} key={item.id}>{item?.name_english}</option>
                                        })
                                    }
                                </Select>
                            </div>
                            <div className='my-5'>
                                {
                                    sector ?
                                        <Link href={`/category/${sector}`} >
                                            <Button className="rounded-[30px] py-4" >Book Consultant</Button>
                                        </Link> : <Button className="rounded-[30px] py-4" >Book Consultant</Button>
                                }
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