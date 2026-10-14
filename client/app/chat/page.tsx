"use client"
import { Input } from "@/components/ui/input"

export default function Page(){
    return (
        <div>
            <div className="flex-1 min-h-0 overflow-y-auto">
                <div>
            <p>What are you tinkering with today</p>
                </div>

            </div>
            <div className="shrink-0 flex p-3 border-t border-border flex flex-col justify-center items-center">
                <div className="">
                    
                </div>
                <textarea placeholder="Search.." draggable="false" />
            </div>
        </div>
    )
}