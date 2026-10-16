"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="sticky md:px-50 px-10 top-0 z-40 w-full border-b border-zinc-200/70 dark:border-zinc-800 bg-[#FAFAFA]/90 dark:bg-zinc-950/90 backdrop-blur-md">
        <div className="flex justify-between items-center px-7 py-5">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-xs bg-zinc-900 text-white dark:bg-white dark:text-black transition-colors">
              <svg
                className="w-4 h-4 text-white dark:text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="4" />
                <path d="m8 12 3 3 5-5" />
              </svg>
            </div>
            <div className="flex flex-col items-start ml-2">
              <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Hackachat
              </h2>
              <span className="text-[12px] text-zinc-500/70 dark:text-zinc-400">
                Thirdspace
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <p
              className={
                pathname === "/"
                  ? "text-sm font-bold text-zinc-900 dark:text-zinc-50 cursor-pointer"
                  : "text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 cursor-pointer transition-colors"
              }
              onClick={() => scrollToSection("demo")}
            >
              Demo
            </p>

            <p
              className={
                pathname === "/whyfree"
                  ? "text-sm font-bold text-zinc-900 dark:text-zinc-50 cursor-pointer"
                  : "text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 cursor-pointer transition-colors"
              }
              onClick={() => scrollToSection("whyfree")}
            >
              Why Free
            </p>

            <p
              className={
                pathname === "/privacy"
                  ? "text-sm font-bold text-zinc-900 dark:text-zinc-50 cursor-pointer"
                  : "text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 cursor-pointer transition-colors"
              }
              onClick={() => scrollToSection("Privacy")}
            >
              Privacy
            </p>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Link href={"/chat"}>
              <Button 
                variant="outline" 
                className="bg-transparent text-zinc-900 dark:text-zinc-50 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                Sign In     
              </Button>
            </Link>

            <Link href={"/chat"}>
              <Button className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200">
                Open Chat
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;