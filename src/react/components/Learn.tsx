import React from 'react'
import { style } from '../modules/styles'
import ButtonComponents from './ButtonComponents'
import Image from 'next/image'
import { Featured } from '@/assets/image'

const Learn = () => {
    return (
        <div className={`${style.layout} ${style.flexWrap} justify-between max-xl:justify-center max-md:gap-4`}>
            <div className='flex flex-col'>
                <div className='pb-[59px]'>
                    <p className='font-mainFont text-base text-textColor-colorOne 
            uppercase tracking-[1px] font-normal pb-1'>Featured Course</p>
                    <div className='line' />
                </div>
                <h1 className='text-textColor-colorOne font-bold text-[55px] max-lg:text-4xl max-md:text-3xl pb-6 leading-[60px] font-mainFont'>Run your own online <br /> learning platform</h1>
                <p className={`${style.textSize} pb-6 text-textColor-colorOne`}>A deep-dive on the Instagram algorythm, hashtags, content <br /> strategy, and branding.</p>
                <p className='text-textColor-colorOne font-normal font-mainFont text-base pb-12'>Kathryn Murphy</p>
                <ButtonComponents
                    label={'Learn More'}
                    width={'max-w-[202px]'}
                />
            </div>
            <div className='relative z-[]'>
                <div className='rounded-lg absolute w-[375px] h-[375px] bg-second z-[-1] bottom-[36px] right-[-8px] max-xl:hidden'/>
                <div className='rounded-md absolute w-[150px] h-[150px] bg-second z-[-1] top-[-34px] right-[46px] max-lg:top-0 max-lg:right-0 max-sm:hidden'/>
                <div className='rounded-sm absolute w-[100px] h-[100px] bg-second z-[-1] top-[-40px] right-[234px] max-lg:top-0 max-lg:left-0 max-sm:hidden'/>
                <div className='absolute top-[76px] left-[-78px] z-[-2] bg-second w-[357px] h-[248px] rounded-sm max-xl:hidden'/>
                <Image
                    src={Featured} 
                    alt='fff'
                    width={614}
                    height={614}
                    className='relative z-[-2]'
                />
            </div>
        </div>
    )
}

export default Learn
