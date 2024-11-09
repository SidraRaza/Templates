import SectionHeadind from '@/component/Helper/SectionHeadind'
import { blogs } from '@/data/data'
import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeadind>Our Blog</SectionHeadind>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center 
        gap-8 mt-20'>
            {blogs.map((blog,i) => {
                return <div
                data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 50}`}
                key={blog.id}>
                    <BlogCard blog={blog}/>
                </div>
            })}
        </div>
    </div>
  )
}

export default Blog