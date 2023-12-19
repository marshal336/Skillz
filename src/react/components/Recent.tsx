import React from 'react'
import ButtonComponents from './ButtonComponents'
import { style } from '../modules/styles'
import { recentCards } from '../modules/dataBase'
import RecentCardComponents from './RecentCardComponents'

const Recent = () => {
    return (
        <div className='bg-white'>
            <div className={`${style.layout}`}>
                <div className='flex flex-col text-center pb-[80px]'>
                    <div className={`flex flex-col text-center pb-[50px]`}>
                        <h2 className={`${style.titleStyle} text-textColor-colorThree pb-[17px]`}>Recent Articles</h2>
                        <div className='line m-auto' />
                    </div>
                    <p className={`max-w-[644px] m-auto ${style.textSize} text-textColor-colorThree pb-11 `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div>
                        <ButtonComponents
                            label={'View all articles'}
                            width={'max-w-[350px]'}
                        />
                    </div>
                </div>
                <div className='flex justify-between items-center gap-4 flex-wrap'>
                    {recentCards.map(item => (
                        <RecentCardComponents
                            logo={item.logo}
                            date={item.date}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recent
