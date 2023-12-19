'use client'
import { GrFormClose } from "react-icons/gr";


import { useState } from "react"

const Messeg = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`relative ${open ? 'hidden' : ''} max-md:hidden
        `}>
            <h3 className='w-full bg-second text-lg text-textColor-colorThree text-center'>
                One week only—50% off all courses with code 50OFF at checkout
            </h3>
            <div
                onClick={() => setOpen(!open)}
                className={`absolute right-5 top-1 z-[1] ${open ? 'hidden' : ''} cursor-pointer`}><GrFormClose/></div>
        </div>
    )
}

export default Messeg
