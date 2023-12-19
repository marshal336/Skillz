import React from 'react'
import ButtonComponents from './ButtonComponents'
import { style } from '../modules/styles'
import { upcoming } from '../modules/dataBase'
import UpcommingComponentCard from './UpcommingComponentCard'

const Upcomming = () => {
    return (
        <section className='bg-white w-full'>
            <div className={`${style.layout} flex flex-col justify-center `}>
                <div className='flex flex-col text-center pb-[80px]'>
                    <div className={`flex flex-col text-center pb-[50px]`}>
                        <h2 className={`${style.titleStyle} text-textColor-colorThree pb-[17px]`}>Upcoming Free Workshops</h2>
                        <div className='line m-auto' />
                    </div>
                    <p className={`max-w-[644px] m-auto ${style.textSize} text-textColor-colorThree pb-11 `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div>
                        <ButtonComponents
                            label={'View All Workshops'}
                            width={'max-w-[350px]'}
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-5 flex-wrap max-xl:justify-center'>
                    {upcoming.map(item => (
                        <UpcommingComponentCard
                            title={item.title}
                            text={item.text}
                            btn={item.btn}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Upcomming
