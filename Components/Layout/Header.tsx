import React from 'react'
import img from "../../public/images/iid-logo.png"
import Image from 'next/image'
const Header = () => {
    return (
        <div className="container py-[18px]">
            <div className="flex justify-between ...">

                <Image src={img} alt=""  />
                <div>03</div>
            </div>
        </div>
    )
}

export default Header