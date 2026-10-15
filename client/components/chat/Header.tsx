"use client"
import React from 'react';
import { useState } from 'react';
import { PanelLeft, Plus, Settings, Home } from 'lucide-react'
import { Button } from '../ui/button';
import { ModelPicker } from '@/components/chat/ModelPicker'


interface  ChatHeaderProps {
    title: string;
    currentModel: string;
    onModelChange: (model: string) => void;
    onToggleSidebar: () => void;
    onNewChat: () => void;
    onOpenSettings: () => void;
    onGoHome: () => void;
}

export default function Header(){
   const [onToggleSidebar, setOnToggleSidebar] = useState(false)

   return(
   <header className="flex h-12 w-full items-center justify-between border-b border-border bg-card/80 px-3 sm:px-4 backdrop-blur-xs select-none">
     <div className="flex items-center gap-2 truncate flex-1 mr-2">
        <Button
         variant="ghost"
         size="icon"
         onClick={() => {onToggleSidebar && setOnToggleSidebar(!onToggleSidebar)}}
         className="h-8 w-8 text-muted-foreground hover:text-foreground"
         title="Toggle sidebar (⌘B)"
         >
            <PanelLeft className="h-4 w-4" />
        </Button>

        <Button
         variant="ghost"
         size="icon"
         className="h-8 w-8 text-muted-foreground hover:text-foreground hidden sm:inline-flex"
         title="Return to homepage"
         >
            <Home className="h-4 w-4" />
        </Button>

        <h1 className="text-xs sm:text-sm font-semibold truncate text-foreground font">
                New Chat
        </h1>
     </div>

     <div className="flex items-center gap-1.5 shrink-0">
        <ModelPicker
      //   currentModel={currentModel}
      //   onModelChange={onModelChange}
        />

        <Button 
        variant="ghost"
        size="icon"
        
        className="h-8 w-8 text-muted-foreground hover:text-foreground"
        title="New Chat (⌘K)"
        >
         <Plus className="h-4 w-4" />
        </Button>

        <Button
        variant="ghost"
        className="h-8 w-8 text-muted-foreground hover:text-foreground"
        title="Settings"
        >
         <Settings className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="border-border flex items-center">
         <div className="bg-black p-1 px-2 rounded-md text-white text-xs">H</div>
         <p className='text-xs font-normal'>sign in</p> 
        </Button>
     </div>
   </header>
  );
};