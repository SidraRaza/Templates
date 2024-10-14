import Link from 'next/link'
import React from 'react'

const MinHeader = () => {
  return (
    <div className='text-center bg-black p-3 font-Metro space-between  '>
        <h1 className='text-white'>Sale Up To 50% Biggest Discounts. Sidra! Limited Period Offer <Link href="#" className='underline hover:underline-offset-4'>Shop Now</Link></h1>
    </div>
  )
}

export default MinHeader