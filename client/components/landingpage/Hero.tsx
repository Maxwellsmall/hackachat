"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20">
        <div className="w-full">
            <div className="max-w-6xl sm:px-6 text-left">

                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <span>HACK CLUB THIRD SPACE PROJECT</span>
                </div>
                <h1 className='font-bold text-[40px]'>An AI assistance that treats you like a builder.</h1>
                  <p className='text-zinc-700'>Free, Zero subscriptions, and designed by high school hackers, Built to help <br /> 
                  you debug messy code , break down though school concepts without spoon feeding- <br />
                  feeding you answers and launch weekend projects
                  </p>
            </div>
        <div className='flex flex-col sm:flex-row items-center justify-start gap-3.5 mt-8 px-5'>
          <Button>
            <span>Start chatting now</span>
            <ArrowRight className="w-4 h-4"/>
          </Button>
          <Button className={"bg-secondary"}>
            <span>Try the kive demo below</span>
          </Button>
        </div>
        </div>
    </section>
  )
}

export default Hero