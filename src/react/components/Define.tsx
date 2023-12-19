import * as React from 'react';
import { style } from '../modules/styles'

const Define = () => {
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
    }
    return (
        <div className='max-w-[1276px] m-auto bg-second mt-[-100px] text-center rounded-s'>
            <h2 className={`${style.titleStyle} text-textColor-colorThree pb-[57px] pt-[78px]`}>You have the power to define your future.</h2>
            <form action="" className='flex gap-4 justify-center items-center pb-[95px] max-sm:flex-col'>
                <input
                    type="text"
                    placeholder='EMAIL ADDRESS'
                    className='bg-transparent outline-none border-none px-5 py-4 input w-[400px] placeholder:text-textColor-colorThree max-sm:max-w-full'
                />
                <button
                    type='submit'
                    className='leading-[1] py-1 px-6 bg-main text-textColor-colorFour rounded-s max-sm:w-[200px] h-[57px]'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Define
