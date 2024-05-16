import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: Readonly<ContainerProps>) => {
  return (
    <section className='px-16 py-8 flex flex-col gap-4 max-w-7xl w-full'>
      {children}
    </section>
  )
}

export default Container