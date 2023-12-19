import React from 'react'
import { style } from '../modules/styles'
import Image from 'next/image'
import { ContactUsLogo } from '@/assets/image'
import ButtonComponents from './ButtonComponents'

const Personal = () => {
    return (
        <section className='bg-main'>
            <div className={`${style.section} ${style.flexCenter} flex-wrap gap-14`}>
                <div>
                    <Image
                        src={ContactUsLogo}
                        alt='logo'
                        width={720}
                        height={664}
                    />
                </div>
                <div className={`flex flex-col items-start`}>
                    <div className='pb-[50px]'>
                        <h2 className={`${style.titleStyle} pb-4 text-textColor-colorOne`}>Get personalized <br /> learning recommendations</h2>
                        <div className='line' />
                    </div>
                    <p className={`${style.textSize} text-textColor-colorOne max-w-[618px] pb-14`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.</p>
                    <ButtonComponents
                        label={'Contact Us'}
                        width={'max-w-[200px]'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Personal
