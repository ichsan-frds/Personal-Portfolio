'use client';

import { Avatar, AvatarImage } from "../components/ui/avatar"
// import { useEffect, useState } from "react";
// import { CiLight } from "react-icons/ci";
// import { MdDarkMode } from "react-icons/md";
// import { RxHamburgerMenu } from "react-icons/rx";
// import Sidebar from "./Sidebar";

export default function Header() {
    // const [mode, setMode] = useState('');
    // const [isSidebarOpen, setSidebarOpen] = useState(false)

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
  //   if (storedTheme) {
  //     setMode(storedTheme);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (mode) {
  //     document.documentElement.classList.toggle('dark', mode === 'dark');
  //   }
  // }, [mode]);

    return (
      <header>
        <div className="flex p-4 justify justify-between">
            <Avatar className="h-12 w-12 bg-slate-200">
                <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
            </Avatar>
            <div className="hidden sm:flex gap-8 items-center tracking-wide">
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#certifications">Certifications</a>
                <a href="#connect">Connect</a>
                {/* <button
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
                </button> */}
            </div>
            {/* <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="flex sm:hidden items-center">
                <RxHamburgerMenu size={24}/>
            </button> */}
          </div>
          {/* <Sidebar isOpen={isSidebarOpen}/> */}
      </header>
    );
}