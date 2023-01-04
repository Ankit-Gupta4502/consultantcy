import React from 'react'
import Image from 'next/image'
import img from "../../public/images/enquiry.png"
import Input from '../UI/Input'
import Select from "../UI/Select"
import Button from '../UI/Button'
const Enquiry = React.memo(() => {
    return (
        <div className='container py-24'>
            <div className="form-holder flex space-y-8 lg:space-x-24 lg:flex-row flex-col items-center ">
                <div className="img-wrapper w-100 max-w-[483px]">
                    <Image src={img} alt='' className='w-100' height={547} />
                </div>
                <div className="form-wrapper max-w-[441px] flex flex-col justify-center  w-full">
                    <h2>Connect with us!</h2>
                    <p className='text-gray/70 mb-7  ' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        tempor incididunt.
                    </p>

                    <div className='space-y-[30px]' >
                        <Input placeholder='Full Name*' />
                        <div className="flex space-x-[17px]">
                            <Input placeholder='Email'  />
                            <Input placeholder='Mobile'  />
                        </div>
                        <Select  />
                        <Button>Send Enquery</Button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Enquiry