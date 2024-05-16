import { SWRConfig } from 'swr'
import React, { ReactNode } from 'react'
import { fetcher } from '@/lib/config/fetchter'
const SWRProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: fetcher,
        // onError: (error) => {
        //   if (error.message === 'Unauthorized') {
        //     window.location.href = '/';
        //   }
        // }
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SWRProvider