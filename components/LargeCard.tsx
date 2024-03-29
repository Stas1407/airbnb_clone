import { FC } from 'react'
import Image from 'next/image'

interface LargeCardProps {
    img: string;
    title: string;
    description: string;
    buttonText: string;
}

const LargeCard: FC<LargeCardProps> = ({ img, title, description, buttonText }) => {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px] '>
                <Image
                    fill
                    className='object-cover rounded-2xl'
                    src={img}
                    alt="image"
                />
            </div>

            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p>{description}</p>

                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 transition tranform hover:scale-95'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard