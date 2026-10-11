import { Bell } from 'lucide-react'
import React from 'react'
interface CardProps {
title: string
subtitle: string
headText: string
footerText: string
className: string
}

const card: React.FC<CardProps> = ({title, subtitle, headText, footerText, className}) => {
  return (
    <div className={`rounded-md bg-white border-1 py-3 px-3 border-zinc-200 ${className}`}>
      <div className='flex flex-col my-2 items-start'>
        <div className='flex gap-1 items-center justify-center'>
          <Bell className='text-zinc-400 w-4 h-4'/>
          <p className='text-zinc-400 text-[13px]'>{headText}</p>
        </div>
        <h1 className='font-semibold text-[16px] mt-2'>{title}</h1>
        <p className='text-zinc-400 text-[17px]'>{subtitle}</p>
        <span>{footerText}</span>
      </div>
    </div>
  )
}

export default card