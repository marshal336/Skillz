import React, { useState } from "react";



interface LiHeaderComponentsItemsProps {
    textSize: string;
}

const LiHeaderComponentsItems = ({ textSize }: LiHeaderComponentsItemsProps) => {

    const [close, setClose] = useState(false)

    const closeItem = (e: any) => {
        setClose(!close)
    }
    return (
        <>
            <li
                onClick={closeItem}
                className="relative">
                <a
                    onClick={(i) => i.preventDefault()}
                    className={`text-textColor-colorOne
             hover:text-textColor-colorFour`}
                    href="/"></a>
                <ul className={`absolute bg-white px-4 py-1 ${!close ? '' : 'hidden'}`}>
                    <li>
                        <a href="/">one</a>
                    </li>
                    <li>
                        <a href="">two</a>
                    </li>
                    <li>
                        <a href="">three</a>
                    </li>
                    <li>
                        <a href="">four</a>
                    </li>
                </ul>
            </li>
            <li>
                <a
                    onClick={(i) => i.preventDefault()}
                    className={`text-textColor-colorOne
             hover:text-textColor-colorFour ${textSize}`}
                    href="/">Free Workshops</a>
                <ul className={`absolute bg-white px-4 py-1 `}>
                    <li>
                        <a href="/">one</a>
                    </li>
                    <li>
                        <a href="">two</a>
                    </li>
                    <li>
                        <a href="">three</a>
                    </li>
                    <li>
                        <a href="">four</a>
                    </li>
                </ul>
            </li>
            <li>
                <a
                    onClick={(i) => i.preventDefault()}
                    className={`text-textColor-colorOne
             hover:text-textColor-colorFour ${textSize}`}
                    href="/">Blog</a>
            </li>
            <li>
                <a
                    onClick={(i) => i.preventDefault()}
                    className={`text-textColor-colorOne
             hover:text-textColor-colorFour ${textSize}`}
                    href="/">About</a>
            </li>
            <li>
                <a
                    onClick={(i) => i.preventDefault()}
                    className={`text-textColor-colorOne
             hover:text-textColor-colorFour ${textSize}`}
                    href="/">Contact</a>
            </li>
        </>
    )
}

export default LiHeaderComponentsItems
