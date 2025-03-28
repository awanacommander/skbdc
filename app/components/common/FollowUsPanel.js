'use client'
import { useDarkMode, useMediaQuery } from '@/app/utils/hooks';
import React, { useEffect, useState } from 'react'
import DarkIcon from '@/public/assets/icons/dark-icon.svg';
import LightIcon from '@/public/assets/icons/light-icon.svg';
import Link from 'next/link';
import { FACEBOOK, INSTAGRAM } from '@/app/utils/constant';

export default function FollowUsPanel() {
  return (
    <ul className='inline-flex items-center align-middle whitespace-nowrap'>
      <li className='px-[5px] mx-[5px] font-bold text-[15.2px]'>Follow Us</li>
      <li className='px-[5px] mx-[5px] font-bold text-[15.2px]'>—</li>
      <li className='px-[5px] mx-[5px]'>
        <Link href={INSTAGRAM}>
          <i className="fa-brands fa-instagram rotate-90 hover:text-pureRed transition-all duration-400"></i>
        </Link>
      </li>
      <li className='px-[5px] mx-[5px]'>
        <Link href={FACEBOOK}>
          <i className="fa-brands fa-facebook-f rotate-90 hover:text-pureRed transition-all duration-400"></i>
        </Link>
      </li>
    </ul>
  )
}

function DarkModeSwitch() {
  const uiMode = useDarkMode();
  const isDarkMode = uiMode === 'dark';

  const toggleDarkMode = () => {
    const updatedHasDarkClass = document.documentElement.classList.contains('dark');
    if (updatedHasDarkClass) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }

  return (
    <div className="flex justify-center items-center w-fit">
      <button
        onClick={toggleDarkMode}
        className={`relative flex items-center justify-between h-fit w-fit rounded-full transition-colors duration-300 ease-in-out dark:bg-[#28252c] bg-[#e5e3e8] lg:bg-[#9690a240] lg:dark:bg-[#9690a240] lg:border-transparent dark:lg:border-transparent dark:border-[#4a4653] border-white border-2`}
      >
        <span className={`absolute w-[36px] lg:w-[70px] h-[36px] lg:h-[32px] rounded-full transition-transform duration-300 ease-in-out ${isDarkMode ? 'bg-[#4a4653] translate-x-[36px] lg:translate-x-[46px]' : 'bg-white translate-x-px'}`} />

        <span className={`z-10 p-[8px] flex gap-[2px] items-center justify-center h-fit ${isDarkMode ? 'text-creamWhite' : 'text-creamWhite'}`}>
          <span className="text-xs font-medium min-w-[32px] hidden lg:block">Light</span>
          <LightIcon className={`fill-creamWhite dark:fill-creamWhite ${isDarkMode ? "lg:hidden" : ""}`} />
        </span>
        <span className={`z-10 lg:p-[8px] p-[10px] flex gap-[2px] items-center justify-center h-fit ${isDarkMode ? 'text-white' : 'text-white'}`}>
          <span className="text-xs font-medium min-w-[32px] hidden lg:block">Dark</span>
          <DarkIcon className={`fill-creamWhite ${isDarkMode ? "" : "lg:hidden"}`} />
        </span>
      </button>
    </div>
  )
}

function ScrollToTop() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${scrollPercentage < 15 ? "invisible" : "visible"} hidden lg:flex group items-center justify gap-4 cursor-pointer hover:text-pureRed`} onClick={scrollToTop}>
      <div className="bg-gray-400 group-hover:bg-red-200 relative h-0.5 w-[60px] transition-all duration-200 ease-out">
        <div
          className="h-0.5 bg-black dark:bg-foreground group-hover:bg-pureRed absolute right-0"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      <p className='font-bold transition-all duration-200 ease-out'>Scroll to top</p>
    </div>
  )
}

export function FollowUsSidePanel() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  return (
    <div className='fixed right-[2.75vh] bottom-[2.75vh] lg:bottom-auto lg:right-[4vh]  lg:top-1/2 origin-top-right z-20'
      style={{ transform: isDesktop ? 'rotate(-90deg) translate(50%, -100%)' : 'rotate(0deg) translate(0%, -100%)' }}
    >
      <div className='flex gap-5 items-center'>
        <ScrollToTop />
        <div className='hidden lg:block'>
          <FollowUsPanel />
        </div>
        <DarkModeSwitch />
      </div>
    </div>
  )
}
