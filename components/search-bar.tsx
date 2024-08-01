'use client'
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchBarProps {
  givenKeyword?: string,
  handleEnter?: () => {},
  placeholder?: string,
  autoFocus?: boolean
  fullRounded?: boolean
}

const SearchBar = ({ givenKeyword, placeholder = 'Search', fullRounded = true }: SearchBarProps) => {
  // const [keyword, setKeyword] = useState(givenKeyword || "")
  const searchRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    if (term) {
      params.set('title', term);
    } else {
      params.delete('title');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const resetSearchBar = () => {
    params.set('title', '')
    replace(`${pathname}?${params.toString()}`);
    if (searchRef.current) {
      searchRef.current.value = '';
    }
  }
  const keyword = searchParams.get('title')?.toString()
  useEffect(() => {
    if (!params?.size) {
      resetSearchBar()
    }
  }, [pathname, params?.size]);

  return (
    <Suspense>
      <div className={`flex items-center border-2 border-blue-gray-200 focus-within:border-black relative bottom-1 flex-1 w-full cursor-pointer ${fullRounded ? 'rounded-xl' : 'rounded-t-xl'} bg-foreground`}>
        <label htmlFor='search' className='absolute left-2'>
          <MagnifyingGlassIcon className='w-7 h-7 cursor-pointer text-blue-gray-200' />
        </label>
        <input className='bg-transparent rounded-xl focus:outline-none focus:bg-gray w-full p-2 text-black/90 dark:text-white px-12'
          placeholder={placeholder} id='search' autoComplete='off'
          onChange={(e) => handleSearch(e.target.value)}
          ref={searchRef}
          defaultValue={searchParams.get('title')?.toString()}
        />
        {keyword && <button onClick={resetSearchBar} className='absolute right-2'><XCircleIcon className='w-7 h-7 text-black/50 dark:hover:fill-gray-800 hover:fill-black' /></button>}
      </div>
    </Suspense>

  )
}

export default SearchBar

export const HomeSearchBar = ({ givenKeyword, handleEnter, placeholder = 'Search', autoFocus, fullRounded = true }: SearchBarProps) => {
  fullRounded = fullRounded || true
  const [keyword, setKeyword] = useState(givenKeyword || "")
  const searchRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (autoFocus && searchRef.current) {
      searchRef.current.focus();
    }
  }, [keyword]);
  return (
    <div className={`py-2.5 opacity-95 flex items-center border-2 bg-white border-black/50 focus-within:border-black/70 relative bottom-1 flex-1 w-full cursor-pointer text-black ${fullRounded ? 'rounded-xl' : 'rounded-t-xl'} `}>
      <label htmlFor='search' className='absolute left-2'>
        <MagnifyingGlassIcon className='w-9 h-9 cursor-pointer text-black/70' />
      </label>
      <input className='bg-transparent rounded-xl focus:outline-none focus:bg-gray w-full p-2 text-black dark:text-white px-14 text-xl placeholder:text-black/50'
        placeholder={placeholder} id='search' autoComplete='off'
        value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={handleEnter} ref={searchRef} />
      {keyword && <button onClick={() => setKeyword('')} className='absolute right-2'><XCircleIcon className='w-7 h-7 text-black/50 dark:hover:fill-gray-200 hover:fill-black' /></button>}
    </div>
  )
}