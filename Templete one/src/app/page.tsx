import Choice from '@/components/Choice'
import Footer from '@/components/Footer'
import Help from '@/components/Help'
import Hero from '@/components/Hero'
import LatestNew from '@/components/LatestNew'
import NewProducts from '@/components/NewProducts'
import Products from '@/components/Products'
import ReadMore from '@/components/ReadMore'
import Testimonial from '@/components/Testimonial'

import TopHeader from '@/components/TopHeader'
import TrendingProducts from '@/components/TrendingProducts'
import React from 'react'

const page = () => {
  <TopHeader/>
  return (
  <>
    <Hero/>
    <Products/>
    <Choice/>
    <NewProducts/>
    <Testimonial/>
    <TrendingProducts/>
    <LatestNew/>
    <Help/>
   
    <div>Home Page</div>
    
  </>
  )
}

export default page