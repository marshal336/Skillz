'use client'
import { HeadFoot, basket } from "@/assets/image"
import { style } from "../modules/styles"
import Image from "next/image"
import ButtonBurgerComponents from "./ButtonBurgerComponent"
import React, { useState } from "react"
import Select, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import { headerMenu, headerMenuItem } from "../modules/dataBase"
import { GoArrowUpRight } from "react-icons/go"


const Header = () => {
    const [close, setClose] = useState(false)

    const [up, setUp] = useState(false)


    return (
        <header className={`bg-main py-6 relative max-md:fixed max-md:w-full`}>
            <div className={`${style.section} flex justify-between items-center`}>
                <div className="z-[4]">
                    <Image
                        src={HeadFoot}
                        alt='header'
                        width={125}
                        height={44}
                    />
                </div>
                <ul className="flex gap-10 max-md:hidden">
                    {headerMenu.map(menu => (
                        <li
                            onClick={(i) => i.preventDefault()}
                            className="flex justify-between items-center gap-3 relative">
                            <a
                                onClick={() => setUp(!up)}
                                className={`text-textColor-colorOne hover:text-textColor-colorFour`}
                                href="">{menu.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className={`gap-10 md:hidden max-md:flex flex-col absolute  left-0
                 bg-main w-full min-h-screen text-center pt-[100px] z-[3]
                 ${!close ? 'top-[-100vh]' : 'top-0'}`}>
                    {headerMenu.map(menu => (
                        <li
                            onClick={(i) => i.preventDefault()}
                            className="flex justify-between items-center gap-3 relative">
                            <a
                                onClick={() => setUp(!up)}
                                className={`text-textColor-colorOne hover:text-textColor-colorFour`}
                                href="">{menu.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="max-md:hidden">
                    <Image
                        src={basket}
                        alt="basket"
                        width={32}
                        height={32}
                    />
                </div>
                <div
                    onClick={() => setClose(!close)}
                    className={`max-md:${style.flexCenter} md:hidden`}>
                    <ButtonBurgerComponents />
                </div>
            </div>
        </header>
    )
}

export default Header
