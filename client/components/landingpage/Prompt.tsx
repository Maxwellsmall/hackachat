import React from 'react'

const Prompt = () => {
  return (
    <section>
        <div className='w-full px-5 flex justify-center items-center'>
            <div className='flex flex-col  w-full h-[400px] rounded-md border border-zinc-300'>
                <div className='flex py-2 px-4 w-full items-center justify-between bg-zinc-100/90'>
                    <div className="flex items-center gap-1">
                        <span className='bg-zinc-300 w-2 h-2 rounded-full'/>
                        <span className='text-zinc-500 text-[13px]'>example.py</span>
                    </div>
                    <span className='text-zinc-500 text-[14px]'>PROMPT & REPLY</span>
                </div>
                <div className="w-full px-5 flex flex-col items-center justify-center">
                    <div className='w-full bg-zinc-50/90 border border-zinc-100 py-4 px-5 rounded-[10px] my-5'>
                        <p className="text-zinc-500 font-bold text-[15px]">YOU ASKED:</p>
                        <span className='mt-2 '>"why is my python binary search looping forever on low high"</span>
                    </div>
                    <div className='w-full border border-zinc-100 py-25 px-5 rounded-[8px] my-3'>
                        <p className='text-zinc-500 font-bold text-[15px]'>HACKACHAT EXPLAINED:</p>
                        <span>"Look at how you recalculate mid. if you write high = mid instead of high = mid - 1, the search window never shrinks when two element remain:"</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Prompt