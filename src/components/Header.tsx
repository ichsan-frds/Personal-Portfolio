'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export default function Header() {
    const [mode, setMode] = useState('');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.toggle('dark', mode === 'dark');
      localStorage.setItem('theme', mode);
    }
  }, [mode]);

    return (
        <header className="flex p-4 justify justify-between">
            <Avatar className="h-12 w-12">
                <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                <AvatarFallback>IF</AvatarFallback>
            </Avatar>
            <div className="flex gap-4 items-center">
                <a>Experience</a>
                <a>Projects</a>
                <a>Certifications</a>
                <a>Contact</a>
                <button
                onClick={() => {
                    const newMode = mode === 'dark' ? 'light' : 'dark';
                    setMode(newMode);
                    localStorage.setItem('theme', newMode);
                }}
                className="cursor-pointer rounded-xl border-4 hover:border-black dark:hover:border-white transition-all duration-500">
                    {mode === 'dark' ? (
                        <CiLight size={24} />
                    ) : (
                        <MdDarkMode size={24} />
                    )}
                </button>
            </div>
        </header>
    );
}