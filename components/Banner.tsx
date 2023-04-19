import { FC } from 'react'
import Image from "next/image"

interface BannerProps { }

const Banner: FC<BannerProps> = ({ }) => {
    return (
        <div className='relative h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]'>
            <Image 
                src="/mountain.jpg"
                fill
                alt="Banner"
                className='object-cover object-top'
            />
            <div className='absolute h-full w-full bg-white opacity-60'></div>
            <div className='absolute h-full w-full text-center flex flex-col justify-center items-center gap-8 lg:gap-16'>
                <h1 className='text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-black'>Not sure where to go? <br /> Perfect.</h1>
                <button className='w-fit text-red-500 bg-white px-10 py-4 shadow-md rounded-full hover:shadow-xl active:scale-90 transition'>I&apos;m flexible</button>
            </div>
        </div>
    )
}

export default Banner