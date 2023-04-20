import { FC, useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon } from '@heroicons/react/20/solid'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { RangeKeyDict } from 'react-date-range';

interface HeaderProps { }

const Header: FC<HeaderProps> = ({ }) => {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const handleSelect = (ranges: RangeKeyDict) => {
    if (ranges.selection.startDate)
      setStartDate(ranges.selection.startDate)
    if (ranges.selection.endDate)
      setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput("")
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5'>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image src="/airbnb_logo.png" fill className='object-left object-contain' alt="Airbnb" sizes="50vw" />
      </div>

      {/* Middle */}
      <div className='flex items-center md:border-2 rounded-full p-2 md:shadow-sm gap-2'>
        <input
          type="text"
          placeholder='Start your search'
          className='pl-2 bg-transparent outline-none flex-grow w-10 text-gray-600 placeholder-gray-400'
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <MagnifyingGlassIcon className='min-w-min hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hover:scale-105 transition transform ease-out' />
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

      {searchInput && (
        <div className='flex flex-col mx-auto mt-5 col-span-3'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold pl-2'>Number of Guests</h2>
            <UsersIcon className='h-5' />
            <input
              type="number"
              className='w-12 pl-2 text-lg outline-none text-red-400'
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(parseInt(e.target.value))}
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
            <button className='flex-grow text-red-400'>Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header