'use client'


import React from 'react'
import { style } from '../modules/styles'
import Image from 'next/image'
import { HeadFoot } from '@/assets/image'
import { footerLinks } from '../modules/dataBase'
const Foter = () => {
    return (
        <footer className='bg-main'>
            <div className={` ${style.layout} px-[82px] flex flex-col max-sm:px-[20px]`}>
                <div className='pb-[80px] max-w-[300px]'>
                    <Image
                        src={HeadFoot}
                        alt='footerLogo'
                    />
                </div>
                <div className='grid grid-cols-3 Grid gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                    {footerLinks.map((link) => (
                        <div className={`flex flex-col gap-6 w-[283px]`}>
                            <h3 className='text-lg uppercase tracking-[1px] font-normal text-textColor-colorOne'>{link.title}</h3>
                            <ul className={`flex flex-col gap-4`}>
                                {link.links.map(l => (
                                    <li>
                                        <a href="/" className='text-textColor-colorOne'>{l.item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Foter
