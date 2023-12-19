import React from 'react'
import { stars } from '../modules/dataBase'
import Image from 'next/image'
const Stars = () => {
    return (
        <div className='w-full bg-second'>
            <div className='text-center pt-[80px] pb-[160px] px-[20px]'>
                <div className='flex gap-1 w-[200px] m-auto pb-11'>
                    {stars.map(star => (
                        <Image
                            src={star.img}
                            alt='star'
                            width={32}
                            height={29}
                        />
                    ))}
                </div>
                <p className='max-w-[1006px] m-auto text-3xl text-center italic font-normal pb-[37px]'>“Kate’s courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.”</p>
                <p className='text-lg text-textColor-colorTwo'>James Brown, Influencer</p>
            </div>
        </div>
    )
}

export default Stars
