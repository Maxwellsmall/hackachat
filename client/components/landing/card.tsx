import { Bell } from 'lucide-react'
import React from 'react'
interface CardProps {
title: string
subtitle: string
headText: string
footerText?: string
footerSpanText?: string
className: string
classname: string

}

const card: React.FC<CardProps> = ({title, subtitle, headText, footerText, footerSpanText, className, classname}) => {
  return (
    <div className={`rounded-md bg-white border-1 py-3 px-3 border-zinc-200 ${className}`}>
      <div className='flex flex-col my-2 items-start'>
        <div className='flex gap-1 items-center justify-center'>
          <Bell className='text-zinc-400 w-4 h-4'/>
          <p className='text-zinc-400 text-[13px]'>{headText}</p>
        </div>
        <h1 className='font-semibold text-[16px] mt-2'>{title}</h1>
        <p className='text-zinc-400 text-[16px]'>{subtitle}</p>

          <div className={`${classname} mt-3 w-full`} >
          <p className={`text-[12px] `}>
            {footerText}
            <span className='text-zinc-500 ml-2'>{footerSpanText}</span>
          </p>
          </div>
      </div>
    </div>
  )
}

export default card