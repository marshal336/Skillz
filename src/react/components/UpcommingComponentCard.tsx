import React from 'react'
import { style } from '../modules/styles';

interface UpcommingComponentCardProps {
    title: string;
    text: string
    btn: string;
}


const UpcommingComponentCard = ({title, text, btn}: UpcommingComponentCardProps) => {
  return (
    <div className={`flex flex-col items-start p-6 max-w-[391px]`}>
        <h3 className={`${style.textSize} text-textColor-colorThree font-bold pb-3`}>{title}</h3>
        <p className='font-normal text-textColor-colorTwo text-lg pb-7'>{text}</p>
        <a href="" className='text-textColor-colorFour text-base font-normal tracking-[1px]'>{btn}</a>
    </div>
  )
}

export default UpcommingComponentCard
