import React from 'react'
import Image from 'next/image'

type Props = {
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    }
}

const SkillCard = ({skill}: Props) => {
    const {image, title, percent}= skill
  return (
    
    <div className='p-6 hover:bg-rose-500 duration-300 transition-all cursor-pointer text-center
    rounded-lg bg-gray-900'>
        <Image src={image} alt={title} width={80} height={80}  className='object-cover mx-auto'/>
        <h1 className='mt-4 text-[18px] font-[600] text-white'>{title}</h1>
        <div className='mt-4 text-sm rounded-lg p-2 text-white bg-black opacity-40'>{percent}</div>
    </div>
  )
}

export default SkillCard