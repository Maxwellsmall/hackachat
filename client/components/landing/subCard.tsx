import { Bell } from 'lucide-react'
import React from 'react'


interface SubCardProps {
title: string
subtitle: string
icon: React.ReactNode


}

const SubCard: React.FC<SubCardProps> = ({title, subtitle, icon}) => {
  return (
    <div className={`rounded-md bg-white border py-3 px-5 border-zinc-200`}>
      <div className='flex flex-col my-2 items-start'>
        <div className='flex items-center justify-center bg-zinc-100 rounded-md py-2 px-2'>
          <button className='text-zinc-400'>{icon}</button>
        </div>
        <h1 className='font-semibold text-[16px] my-3'>{title}</h1>
        <p className='text-zinc-500 text-[16px]'>{subtitle}</p>
     
      </div>
    </div>
  )
}

export default SubCard;