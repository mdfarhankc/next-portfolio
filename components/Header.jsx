'use client';
import React, { useState, useEffect } from "react";

import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import { usePathname } from "next/navigation";

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const scrollYpos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return () => window.removeEventListener('scroll', scrollYpos);
    });

    return (
        <header className={`${header
            ? 'py-4 bg-white shadow-lg dark:bg-accent'
            : 'py-6 dark:bg-transparent'} 
								sticky top-0 z-30 transition-all 
								${pathname === '/' && 'bg-[#fef9f5]'}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        <NavBar containerStyles={`hidden md:flex gap-x-6 items-center`}
                            linkStyles={`relative hover:text-primary transition-all`}
                            underlineStyles={`absolute left-0 top-full h-[2px] bg-primary w-full`} />
                        <ThemeToggler />
                        <div className="md:hidden">
                            <MobileNavBar />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header