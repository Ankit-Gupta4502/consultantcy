import React from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'

const ConsultantFilter = () => {
    return (
        <div className='p-[18px] bg-white rounded-[10px] shadow-[0px_0px_20px_0px_#0000001A]
    ' >
            <div className='pb-5   border-b border-[#d9d9d9]' >
                <span className='font-bold' >
                    Filter
                </span>
            </div>

            <div className="mt-5 space-y-4">
                <div>
                    <label htmlFor="" className='font-semibold mb-2 block' > Search</label>
                    <Input placeholder='Search consultant by Name' className=' placeholder-black/20 !py-2' />
                </div>


                <div>
                    <label htmlFor="" className='font-semibold mb-2 block' > Sector</label>
                    <Select className='  !py-2'>
                        <option value="">Choose Sector</option>
                    </Select>
                </div>


                <div>
                    <label htmlFor="" className='font-semibold mb-2 block' > Industry</label>
                    <Select className='  !py-2'>
                        <option value="">Choose Industry</option>
                    </Select>
                </div>


                <div>
                    <label htmlFor="" className='font-semibold mb-2 block' >Sort</label>
                    <Select className='  !py-2'>
                        <option value="">Choose Industry</option>
                    </Select>
                </div>
            </div>


        </div>
    )
}

export default ConsultantFilter