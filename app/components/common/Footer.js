"use client"
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { APP_HEADER, FACEBOOK, INSTAGRAM } from '@/app/utils/constant';

const Footer = () => {
  return (
    <footer className="bg-background text-creamWhite">
      <div className="mx-auto px-5 2xl:px-[6vh]">
        <div className="flex flex-wrap justify-between py-12 xl:py-20 gap-10 2xl:mb-12">
          {/* Logo */}
          <div className="w-full flex-auto md:w-1/4">
            <Logo className="w-auto h-[46px] lg:w-[155px] lg:h-[65px]" />
            <div className='mt-6 2xl:mt-[4vh] flex gap-2'>
              <Link className="text-md animated-link" href={FACEBOOK}>Facebook</Link>
              /
              <Link className="text-md animated-link" href={INSTAGRAM}>Instagram</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full flex-auto md:w-1/4">
            <h3 className="mb-4 border-b font-medium border-pureRed w-fit pb-1">Quick Links</h3>
            <ul className="space-y-1 2xl:space-y-2">
              {APP_HEADER.filter(i => !i.hideFooter).map((item) => (
                <li key={item}>
                  <a href={item.url || ""} className="hover:text-pureRed transition-colors duration-300 font-medium">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Hours */}
          <div className="w-fit lg:w-1/4 flex-auto">
            <h3 className="font-medium mb-4 border-b border-red-600 w-fit pb-1">Studio Hours</h3>
            <ul className="lg:space-y-1">
              <li>Monday to Friday: 10:00 am - 6:00 pm</li>
              <li>Saturdays: By appointment only</li>
              <li>Sundays: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#9690a226] py-5 xl:py-[3vh] text-center lg:text-left">
          © 2024 SKBDC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;