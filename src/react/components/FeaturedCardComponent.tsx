import Image from "next/image"
import { style } from "../modules/styles"

interface FeaturedCardComponentProps {
  logo: any
  title: string
  text: string
  price: string
  btn: string
}
const FeaturedCardComponent = ({ logo, title, text, price, btn }: FeaturedCardComponentProps) => {
  return (
    <div className="max-w-[393px] bg-white">
      <div className=''>
        <Image
          src={logo}
          alt='logo'
          width={393}
          height={197}
        />
      </div>
      <div className="p-6">
        <h3 className={`${style.textSize} text-textColor-colorThree pb-2`}>{title}</h3>
        <p className='text-textColor-colorTwo text-lg font-mainFont font-normal pb-4'>{text}</p>
        <p className='text-2xl font-mainFont font-normal text-textColor-colorThree pb-4'>{price}</p>
        <a href="/" className="text-base text-textColor-colorFour font-normal tracking-[1px]">{btn}</a>
      </div>
    </div>
  )
}

export default FeaturedCardComponent
