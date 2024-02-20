'use client'
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';

interface SearchBarProps {
  givenKeyword?: string,
  handleEnter?: () => {},
  placeholder?: string,
  autoFocus?: boolean
  fullRounded?: boolean
}

const SearchBar = ({ givenKeyword, handleEnter, placeholder = 'Search', autoFocus, fullRounded = true }: SearchBarProps) => {
  fullRounded = fullRounded || true
  const [keyword, setKeyword] = useState(givenKeyword || "")
  const searchRef = useRef<HTMLInputElement>(null)
  autoFocus && useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [keyword]);
  return (
    <div className={`flex items-center border-2 border-black/50 focus-within:border-black relative bottom-1 flex-1 w-full cursor-pointer ${fullRounded ? 'rounded-xl' : 'rounded-t-xl'} `}>
      <label htmlFor='search' className='absolute left-2'>
        <MagnifyingGlassIcon className='w-7 h-7 cursor-pointer text-black/50' />
      </label>
      <input className='bg-transparent rounded-xl focus:outline-none focus:bg-gray w-full p-2 text-black/90 dark:text-white px-12' placeholder={placeholder} id='search' autoComplete='off'
        value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={handleEnter} ref={searchRef} />
      {keyword && <button onClick={() => setKeyword('')} className='absolute right-2'><XCircleIcon className='w-7 h-7 text-black/50 dark:hover:fill-gray-800 hover:fill-black' /></button>}
    </div>
  )
}

export default SearchBar