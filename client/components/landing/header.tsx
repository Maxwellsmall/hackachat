import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Moon, Sun } from 'lucide-react';
// import { useTheme } from '../../hooks/useTheme';

interface landingHeaderProps {
    onOpenChat: () => void;
}

export const LandingHeader: React.FC<landingHeaderProps> = ({ onOpenChat }) => {
    // const { theme, changeTheme } = useTheme();

    // const toggleTheme = () => {
    //     changeTheme(theme === 'dark' ? 'light' : 'dark');
    // };

    return (
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-xs">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
                <div className="flex h-7 w-7 items-center justify-center rounded-[var(--radius)] bg-primary text-primary-foreground font-mono font-bold text-xs border border-primary">
                    H
                </div>
                <div className="flex flex-col">
                    <span className="font-display font-semibold text-sm tracking-tight text-foreground leading-none">
                        Hackachat
                    </span>
                    <span className="text-[10px] text-muted-foreground tracking-tight leading-none mt-1">
                        Third space
                    </span>
                </div>
            </div>
        <nav className="flex items-center gap-2 sm:gap-3">
        <a
        href="#live-demo"
        className="hidden sm:inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
        >
            Demo
        </a>
        <a
        href="#why-free"
        className="hidden sm:inline-block text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
        >
            why free
        </a>
        <a
        href="#privacy"
        className="hidden sm:inline-block text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
        >
            Privacy
        </a>

        <button
        variant="ghost"
        size="icon"
        // onClick={toggleTheme}
        className="h-8 w-8 text-muted-foreground hover:text-foreground"
        title="Toggle theme"
        >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4"/>}
        </button>

        <button
          size="sm"
        //   onClick={toggleTheme}
          className="h-8 text-xs font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadows-xs gap-1.5"
          >
            <span>Open Chat</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </nav>
        
        
    </header>
 );
};