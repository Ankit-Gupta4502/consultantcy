import React, { useState } from 'react'
import Image from 'next/image'
import OBJECTS from "../public/images/about.svg"
import about1 from "../public/images/about1.svg"
import about2 from "../public/images/about2.png"
import about3 from "../public/images/about3.svg"
import Enquiry from "../Components/Home/Enquiry"
const about = () => {
    const [showDrop, setShowDrop] = useState(0)
    return (
        <div>
            <div className='bg-[#d9d9d9]'>
                <div className="container">
                    <div className='grid grid-cols-[1fr_1fr] py-10'>
                        <div>
                            <h6 className='text-primary text-base'>
                                Who We Are
                            </h6>
                            <h4 className=' font-medium my-3'>
                                <strong>
                                    About us
                                </strong>
                            </h4>
                            <p className='text-sm text-[rgba(0,0,0,.5)] leading-8'>
                                Institute for Industrial Development (IID) is an incubator with the
                                Government of India, Ministry of Micro, Small and Medium Enterprises
                                (MSME) under PPP Model, and the Department of start-ups, an initiative
                                by the Government of Uttar Pradesh. Samadhan Samiti incorporated in
                                1999, and IID is a unit of Samadhan Samiti working under Public Private
                                Partnership with the Ministry of MSME GoI since 2017. Our master incubator
                                centre is at Multi Disciplinary Training Centre, Gandhi Darshan Rajghat,
                                New Delhi – 110002 .
                            </p>
                        </div>
                        <div>


                            <div className='relative max-w-[480px] h-[320px] overflow-hidden  rounded mx-auto'>
                                <Image src={OBJECTS} className=" object-cover" alt="" fill />
                            </div>
                        </div>



                    </div>
                </div>


            </div>
            <div className='bg-white'>
                <div className="container my-10">
                    <div className='grid grid-cols-[.5fr_.4fr_1.1fr] py-10'>
                        <div>
                            <h5 className='font-bold text-[23px]'>Service that lead the way
                                to<span className='text-primary'> better consultant
                                </span></h5>
                        </div>
                        <div>

                        </div>
                        <div>

                            <p className='text-sm font-normal'>Institute for Industrial Development (IID) is an incubator with the Government of
                                India, Ministry of Micro, Small and Medium Enterprises (MSME) under PPP Model, and
                                the Department of start-ups, an initiative by the Government of Uttar Pradesh.</p>

                        </div>



                    </div>
                    <div className='grid grid-cols-[1fr_1fr_1fr] border-2 border-[#d9d9d9] max-h-[100%]'>
                        <div className={`border-r-2 border-[#aba8a8] p-4 cursor-pointer  ${showDrop == 1 ? "shadow-lg" : null}`} onMouseLeave={() => setShowDrop(0)} onMouseOver={() => setShowDrop(1)}>
                            <div className='relative w-[80px] h-[80px]'>
                                <Image src={about1} alt="img not found" />
                            </div>
                            <h6 className='font-bold text-xl my-4'>VISION</h6>
                            <p className='text-sm font-normal text-[rgb(158,155,155)]'>Our vision is to nurture entrepreneurs and industry ready is
                                youth to achieve the dream of Make in India, Skilled India and
                                Digital India of Government at ground level. We educate, are
                                update and train budding youth with latest technology,
                                schemes, industrial processes and business planning to
                                achieve their mission of a successful entrepreneur.</p>
                            {showDrop == 1 && <div className='border border-b-1  border-primary h-1 bg-primary'>

                            </div>}
                        </div>
                        <div className={`border-r-2 border-[#aba8a8] p-4 cursor-pointer ${showDrop ? "shadow-lg" : null}`} onMouseLeave={() => setShowDrop(0)} onMouseOver={() => setShowDrop(2)}>
                            <div className='relative w-[80px] h-[80px]'>
                                <Image src={about2} alt="img not found" />
                            </div>
                            <h6 className='font-bold text-xl my-4'>MISSION</h6>
                            <p className='text-sm font-normal text-[rgb(158,155,155)]'>Our vision is to nurture entrepreneurs and industry ready is
                                youth to achieve the dream of Make in India, Skilled India and
                                Digital India of Government at ground level. We educate, are
                                update and train budding youth with latest technology,
                                schemes, industrial processes and business planning to
                                achieve their mission of a successful entrepreneur.</p>
                            {showDrop == 2 && <div className='border border-b-1  border-primary h-1 bg-primary'>

                            </div>}
                        </div>
                        <div className={` p-4 cursor-pointer ${showDrop ? "shadow-lg" : null}`} onMouseLeave={() => setShowDrop(0)} onMouseOver={() => setShowDrop(3)}>
                            <div className='relative w-[80px] h-[80px]'>
                                <Image src={about3} alt="img not found" />
                            </div>
                            <h6 className='font-bold text-xl my-4'>Goals</h6>
                            <p className='text-sm font-normal text-[rgb(158,155,155)]'>Our vision is to nurture entrepreneurs and industry ready is
                                youth to achieve the dream of Make in India, Skilled India and
                                Digital India of Government at ground level. We educate, are
                                update and train budding youth with latest technology,
                                schemes, industrial processes and business planning to
                                achieve their mission of a successful entrepreneur.</p>
                            {showDrop == 3 && <div className='border border-b-1  border-primary h-1 bg-primary'>

                            </div>}
                        </div>
                    </div>
                </div>


            </div>
            <Enquiry />
        </div>

    )
}

export default about