
import Image from "next/image"


interface RecentCardComponentsProps {
    logo: any
    date: string
    title: string
    text: string

}

const RecentCardComponents = ({ logo, date, title, text }: RecentCardComponentsProps) => {
    return (
        <div className="max-w-[391px] bg-white flex flex-col">
            <div>
                <Image 
                    src={logo}
                    alt="logo" 
                />
            </div>
            <div className="p-6">
                <h4 className="text-base text-textColor-colorTwo font-normal pb-6">{date}</h4>
                <h2 className="font-normal text-textColor-colorThree text-2xl pb-2">{title}</h2>
                <p className="text-base text-textColor-colorTwo font-normal">{text}</p>
            </div>
        </div>
    )
}

export default RecentCardComponents
