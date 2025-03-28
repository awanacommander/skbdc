"use client"

import React, { useEffect, useMemo, useState } from 'react'
import Logo from './Logo'
import Button from './Button';
import Link from 'next/link';
import MobileHeader from './MobileHeader';
import { APP_HEADER } from '@/app/utils/constant';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const forceWhiteColor = useMemo(() => {
    const forceWhiteColor = APP_HEADER.find(item => item.url === pathname)?.forceWhiteColor
    return forceWhiteColor
  }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[black]' : 'bg-transparent'}`}>
      <div className="px-4 lg:px-16">
        <div className={`flex items-center justify-between md:py-4 ${isScrolled ? 'h-[9vh]' : 'h-[12vh]'}`}>
          {/* Logo */}
          <div className="text-white text-2xl font-script">
            <Logo
              whiteLogo={isScrolled}
              className="h-auto w-[130px] lg:w-[140px] lg:min-w-[140px]"
            />
          </div>

          {/* Navigation */}
          <div className='flex items-center gap-4 md:gap-8'>
            <nav className="hidden lg:flex space-x-10">
              {
                APP_HEADER.map((item, index) => {
                  let isActive = item.url === pathname ? true : item?.items?.find(subItem => subItem.url === pathname) ? true : false

                  if (item.items) {
                    return <SubMenuNavItem key={index} menu={item} isScrolled={isScrolled} forceWhiteColor={forceWhiteColor} isActive={isActive} />
                  }

                  return <Link key={index} href={item.url} className={twMerge(`text-creamWhite ${isScrolled || forceWhiteColor ? 'text-white' : ""} ${isActive ? 'text-pureRed' : ""} hover:text-pureRed font-medium`)}>{item.name}</Link>
                })
              }
            </nav>

            {/* SKB Pro Button */}
            <Link href="https://pro.skbdc.com/" target='_blank' className='invisible sm:visible'>
              <Button size="medium" className="py-[5px] px-3 bg-pureRed dark:bg-[#9690a240]">
                SKB Pro
              </Button>
            </Link>

            <MobileHeader />
          </div>
        </div>
      </div>
    </header >
  )
}


const SubMenuNavItem = (props) => {
  const { menu, isScrolled, forceWhiteColor, isActive } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <Link
    href={menu.url}
    className={twMerge(`relative text-creamWhite ${isScrolled || forceWhiteColor ? 'text-white' : ""} ${isActive ? 'text-pureRed' : ''} hover:text-pureRed font-medium`)}
    onMouseEnter={() => setIsMenuOpen(true)}
    onMouseLeave={() => setIsMenuOpen(false)}
  >
    {menu.name}
    {isMenuOpen && (
      <div className='absolute top-full left-0 w-48 pt-2'>
        <div className="rounded-md shadow-lg bg-white dark:bg-[#2a272f] ring-1 ring-black ring-opacity-5">
          <div className="py-4" role="menu" aria-orientation="vertical">
            {menu?.items?.filter(i => !i.hideMenu)?.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="block px-4 py-2 text-sm text-[#161519] dark:text-creamWhite hover:bg-[#9690a20f] hover:text-pureRed"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )}
  </Link>
}