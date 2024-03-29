import { FC } from 'react'
import Image from 'next/image'

interface MediumCardProps {
    img: string;
    title: string;
}

const MediumCard: FC<MediumCardProps> = ({ img, title }) => {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image src={img} fill alt="image" sizes='60vw' className='rounded-xl'/>
            </div>
            <h3 className='text-xl mt-3'>{title}</h3>
        </div>
    )
}

export default MediumCard