import React from 'react'
import Wrapper from '../../Components/Dashboard/Wrapper'
import Input from '../../Components/UI/Input'
const MyProfile = () => {
    return (
        <Wrapper>
            <div className='shadow-[0px_4px_10px_0px_#0000001A] rounded-md'>
                <div className="px-10 py-4 border-b border-gray/30">
                    <h5 className='text-primary font-semibold' > My Profile</h5>
                </div>
                <div className="px-10 mt-5 grid md:grid-cols-3 gap-x-12 gap-y-9 ">
                    <div>
                        <label htmlFor="" className='mb-4 block' >Full Name</label>
                        <Input disabled className='bg-gray/5 !rounded-md' />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Email Address</label>
                        <Input disabled className='bg-gray/5 !rounded-md' />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Phone Number</label>
                        <Input disabled className='bg-gray/5 !rounded-md' />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Gender</label>
                        <Input disabled className='bg-gray/5 !rounded-md' />
                    </div>
                    <div>
                        <label htmlFor="" className='mb-4 block' >Date Of Birth</label>
                        <Input disabled className='bg-gray/5 !rounded-md' />
                    </div>
                    <div>
                        <label htmlFor="" className='mb-4 block' >Zip Code</label>
                        <Input disabled className='bg-gray/5 !rounded-md' />
                    </div>
                    <div>
                        <label htmlFor="" className='mb-4 block' >Phone Number</label>
                        <Input className='bg-gray/5 !rounded-md' />
                    </div>
                    <div>
                        <label htmlFor="" className='mb-4 block' >City</label>
                        <Input className='bg-gray/5 !rounded-md' />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >State</label>
                        <Input className='bg-gray/5 !rounded-md' />
                    </div>

                    <div>
                        <label htmlFor="" className='mb-4 block' >Address</label>
                        <Input className='bg-gray/5 !rounded-md' />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default MyProfile