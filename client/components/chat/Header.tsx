import React from 'react';
import { PaneLeft, Plus, Settings, Home } from 'lucide-react'
import { Button } from '../ui/button';
import { ModelPicker } from './ModelPicker';

interface  ChatHeaderProps {
    title: string;
    currentModel: string;
    onModelChange: (model: string) => void;
    onToggleSidebar: () => void;
    onNewChat: () => void;
    onOpenSettings: () => void;
    onGoHome: () => void;
}
export const ChatHeader: React.FC<ChatHeaderProps> = ({
   //  title,
   //  currentModel,
   //  onModelChange
   //  onToggleSidebar,
   //  onNewChat,
   //  onOpenSettings,
   //  onGoHome,

})
export default function Header(){
   return(
   <header className="flex h-12 w-full items-center justify-between border-b border-border bg-card/80 px-3 sm:px-4 backdrop-blur-xs select-none">
     <div className="flex items-center gap-2 truncate flex-1 mr-2">
        <Button
         variant="ghost"
         size="icon"
         onClick={onToggleSidebar}
         className="h-8 w-8 text-muted-foreground hover:text-foreground"
         title="Toggle sidebar (⌘B)"
         >
            <PaneLeft className="h-4 w-4" />
        </Button>

        <Button
         variant="ghost"
         size="icon"
         onClick={onGoHome}
         className="h-8 w-8 text-muted-foreground hover:text-foreground hidden sm:inline-flex"
         title="Return to homepage"
         >
            <Home className="h-4 w-4" />
        </Button>

        <h1 className="text-xs sm:text-sm font-semibold truncate text-foreground">
                { title || 'New Chat'}
        </h1>
     </div>

     <div className="flex items-center gap-1.5 shrink-0">
        <ModelPicker
        currentModel={currentModel}
        onModelChange={onModelChange}
        />

        <Button 
        variant="ghost"
        size="icon"
        onClick={onNewChat}
        className="h-8 w-8 text-muted-foreground hover:text-foreground"
        title="New Chat (⌘K)"
        >
         <Plus className="h-4 w-4" />
        </Button>

        <Button
        variant="ghost"
        size="icon"
        onClick={onOpenSettings}
        className="h-8 w-8 text-muted-foreground hover:text-foreground"
        title="Settings"
        >
         <Settings className="h-4 w-4" />
        </Button>
     </div>
   </header>
  );
};