import React from 'react'
import { style } from '../modules/styles'
import ButtonComponents from './ButtonComponents'
import { featured } from '../modules/dataBase'
import FeaturedCardComponent from './FeaturedCardComponent'

const Featured = () => {
    return (
        <div className={`${style.layout} flex flex-col justify-center`}>
            <div className='flex flex-col text-center pb-[80px]'>
                <div className={`flex flex-col text-center pb-[50px]`}>
                    <h2 className={`${style.titleStyle} text-textColor-colorOne pb-[17px]`}>Featured Courses</h2>
                    <div className='line m-auto' />
                </div>
                <p className={`max-w-[644px] m-auto ${style.textSize} text-textColor-colorOne pb-11 `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <div>
                    <ButtonComponents
                        label={'View All Courses'}
                        width={'max-w-[250px]'}
                    />
                </div>
            </div>
            <div className={`${style.flexWrap} flex justify-between gap-3 max-xl:justify-center`}>
                {featured.map(item => (
                    <FeaturedCardComponent
                        logo={item.logo}
                        title={item.title}
                        text={item.text}
                        price={item.price}
                        btn={item.btn}

                    />
                ))}
            </div>
        </div>
    )
}

export default Featured
