import React, { useState } from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'
type propTypes = {
    filter: { search: string, sector: string, industry: string, sort: string },
    setFilter: Function,
    sectors?: Array<{ name_english?: string, id: number, slug?: string }>,
    industries?: Array<{ name_english?: string, id: number, slug?: string }>
}
const ConsultantFilter = React.memo(({ filter, setFilter, sectors = [], industries = [] }: propTypes) => {

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFilter({ ...filter, [name]: value })
    }
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
                    <Input value={filter.search} name='search' onChange={handleInput} placeholder='Search consultant by Name' className=' placeholder-black/20 !py-2' />
                </div>


                <div>
                    <label htmlFor="" className='font-semibold mb-2 block' > Sector</label>
                    <Select className='  !py-2' value={filter.sector} name='sector' onChange={handleInput}  >
                        <option value="">Choose Sector</option>
                        {
                            sectors.map((item) => {
                                return <option value={item.id} key={item.id} > {item.name_english} </option>
                            })
                        }
                    </Select>
                </div>


                <div>
                    <label htmlFor="" className='font-semibold mb-2 block' > Industry</label>
                    <Select className='  !py-2' value={filter.industry} name='industry' onChange={handleInput} >
                        <option value="">Choose Industry</option>
                        {
                            industries.map((item) => {
                                return <option value={item.id} key={item.id}  > {item.name_english}</option>
                            })
                        }
                    </Select>
                </div>


                <div>
                    <label htmlFor="" className='font-semibold mb-2 block' >Sort</label>
                    <Select className='  !py-2' name='sort' value={filter.sort} onChange={handleInput} >
                        <option value="">Choose Filter</option>
                        <option value="price">Sort By Lowest Price</option>
                        <option value="rating">Sort By Rating</option>
                    </Select>
                </div>
            </div>


        </div>
    )
})

export default ConsultantFilter