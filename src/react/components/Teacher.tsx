import React from 'react'
import ButtonComponents from './ButtonComponents'
import { style } from '../modules/styles'
import Image from 'next/image'
import { teacherLogo } from '@/assets/image'

const Teacher = () => {
    return (
        <div className={`${style.layout} ${style.flexCenter} gap-16 justify-between max-xl:justify-center flex-wrap`}>
            <div className='relative'>
                <div className='rounded-lg absolute w-[375px] h-[375px] bg-second z-[-2] bottom-[-56px] right-[-48px] max-xl:hidden' />
                <div className='rounded-sm absolute w-[150px] h-[150px] shadow-logo bg-second z-[-1] top-[9px] left-[-16px] max-lg:top-0 max-lg:left-0 max-sm:hidden' />
                <div className='rounded-md absolute w-[100px] h-[100px] shadow-logo bg-second z-[-1] top-[-34px] left-[67px] max-lg:top-0 max-lg:left-0 max-sm:hidden' />
                <div className='absolute bottom-[-73px] left-[-70px] z-[-2] bg-second w-[357px] h-[248px] rounded-sm max-xl:hidden' />
                <Image
                    src={teacherLogo}
                    alt='logo'
                    width={534}
                    height={534}
                    className='shadow-logo z-[-2] relative rounded-lg'
                />
            </div>
            <div>
                <div className={`flex flex-col items-start `}>
                    <div className='pb-[50px]'>
                        <h2 className={`${style.titleStyle} pb-4 text-textColor-colorOne`}>Get personalized <br /> learning recommendations</h2>
                        <div className='line' />
                    </div>
                    <p className={`${style.textSize} text-textColor-colorOne max-w-[618px] pb-14`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.</p>
                    <ButtonComponents
                        label={'About Skillz'}
                        width={'max-w-[200px]'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Teacher
