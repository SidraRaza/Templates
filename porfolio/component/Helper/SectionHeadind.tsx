import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode ;
}

const SectionHeadind = ({children}:Props) => {
  return (
   
        <h1 className='bg-rose-500 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl
        uppercase -rotate-6 '>{children}</h1>
   
  )
}

export default SectionHeadind