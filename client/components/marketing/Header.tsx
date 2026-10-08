"use client"

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Moon, Sun } from "lucide-react"
import { useState } from "react";



const Header = () => {
    const pathname = usePathname()
    const [darkMode, setDarkMode] = useState(false)
  return (
    <>
<div className="sticky-top top-0 z-40 w-full border-b border-zinc-200/70 bg-[#FAFAFA]/90 backdrop-blur-md">
    <div className="flex justify-between items-center px-10 py-5">
        <div className="flex justify-between items-center">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-xs group-hover: bg-zinc-800 transition-colors">
            <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 24 24"
            fill='none'
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
                <rect width="18" height="18" x="3" y="3" rx="4"/>
                <path d="m8 12 3 3 5-5" />
            </svg>
        </div>
           <div className="flex flex-col items-start">
             <h2 className="text-lg font-bold tracking-tight text-zinc-900 ml-2">
                Hackchat 
            </h2>
            <span className="text-[12px] text-zinc-500/70 ml-2">Thirdspace</span>
           </div>
        </div>

            <div className="hidden md:flex items-center space-x-8">
                <p className={
                    pathname === "/" 
                    ? "text-sm font-bold text-zinc-900"
                    : "text-sm font-medium text-zinc-700 hover: text-zinc-900 transition-colors"
                }>
                    <Link href="/">Demo</Link>
                </p>
                
                <p className={
                    pathname === "/whyfree"
                    ? "text-sm font-bold text-zinc-900"
                    : "text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
                }
                >
                    <Link href="/whyfree">Why Free</Link>
                </p>
                <p className={
                    pathname === "/privacy"
                    ? "text-sm font-bold text-zinc-900"
                    : "text-sm font-medium text-zinc-700 hover:text-zinc-900 transitions-colors"
                    }
                    >
                        <Link href="/privacy">privacy</Link>
                </p>
                <Button onClick={() => setDarkMode(!darkMode)} className="hover:bg-transparent bg-white/15 text-zinc-900">
                    {darkMode

                    ? (
                        <Sun/>
                    ) : (
                        <Moon/>
                    )
                     
                    }
                </Button>
                    <Button>
                        <span>Open Chat</span>
                        <ArrowRight className="w-3.5 h-3.5"/>
                    </Button>
            </div>
    </div>

    </div>
    </>
  )
}

export default Header