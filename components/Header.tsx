import { FC } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon } from '@heroicons/react/20/solid'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5'>
        {/* Left */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image src="/airbnb_logo.png" fill className='object-left object-contain' alt="Airbnb" sizes="50vw" />
        </div>

        {/* Middle */}
        <div className='flex items-center md:border-2 rounded-full p-2 md:shadow-sm gap-2'>
            <input type="text" placeholder='Start your search' className='pl-2 bg-transparent outline-none flex-grow w-10 text-gray-600 placeholder-gray-400'/>
            <MagnifyingGlassIcon className='min-w-min hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hover:scale-105 transition-[scale]' />
        </div>

        {/* Right */}
        <div className='flex justify-end items-center space-x-4 text-gray-500'>
          <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
          <GlobeAltIcon className='h-6' />
          <div className='flex space-x-2 items-center border-2 p-2 rounded-full'>
            <Bars3Icon className='h-6' />
            <UserCircleIcon className='h-6' />
          </div>
        </div>
    </header>
  )
}

export default Header