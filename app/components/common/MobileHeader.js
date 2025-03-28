"use client"
import { useState } from 'react';
import Link from 'next/link';
import IconButton from './IconButton';
import { APP_HEADER } from '@/app/utils/constant';
import FollowUsPanel from './FollowUsPanel';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState('')

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (menu) => {
    if (openSubMenu === menu) {
      setOpenSubMenu('')
    } else {
      setOpenSubMenu(menu)
    }
  }

  return (
    <div className="lg:hidden">
      <IconButton onClick={toggleMenu} className=" p-0 bg-gray-100 bg-opacity-10 h-[56px] w-[56px]">
        <div className='flex justify-center items-center h-full w-full hover:scale-110 transform transition-transform duration-500'>
          <div className='flex justify-center items-start flex-col'>
            <span className="w-[22px] h-[2px] my-[3px] bg-white"></span>
            <span className="w-[18px] h-[2px] my-[3px] bg-white"></span>
          </div>
        </div>
      </IconButton>

      <div className={`fixed inset-0 h-full w-full text-[#161519] dark:text-white z-10 ${isOpen ? "visible" : "invisible"}`}>
        <div className='h-full' onClick={toggleMenu}>
          <div className="h-full w-full top-0 left-0 fixed bg-[#111013e6]" style={{ zIndex: -1 }} />

          <div className={`h-full flex flex-col bg-white dark:bg-[#2a272f] w-[calc(100%-56px)] transition-all duration-200 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}>

            <div className="flex justify-between items-center p-4 pl-6 h-[105px]">
              <IconButton onClick={toggleMenu} className="w-[54px] h-[54px]">
                <i className="fa-solid fa-xmark fa-lg text-[#C2C2C2]"></i>
              </IconButton>
            </div>

            <div
              className="h-full flex-grow overflow-y-auto"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}>
              <ul>
                {
                  APP_HEADER.map((item, index) => {
                    if (item.items) {
                      return (
                        <li key={index} className="px-5 font-medium leading-8 relative">
                          <button onClick={() => toggleSubMenu(item.name.toLowerCase())} className={`flex items-center justify-between w-full py-[5px] ${openSubMenu === item.name.toLowerCase() ? 'text-pureRed' : ""}`}>
                            {openSubMenu === item.name.toLowerCase() && <span className='absolute h-[42px] w-[2px] bg-pureRed left-0' />}
                            {item.name}
                            <i className={`fa-solid fa-plus fa-sm text-red ${openSubMenu === item.name.toLowerCase() ? "rotate-[135deg]" : ""}`} style={{ transition: 'all cubic-bezier(0.645, 0.045, 0.355, 1) 0.35s' }}></i>
                          </button>
                          <ul className={`${openSubMenu === item.name.toLowerCase() ? `h-[${42 * item?.items?.length}px]` : "h-0"} overflow-hidden`} style={{ transition: "all cubic-bezier(0.645, 0.045, 0.355, 1) 0.35s" }}>
                            {item.items.map((subitem, index) => (
                              <li key={index} className="px-5 py-[5px] font-medium leading-8 hover:text-red"><Link href={subitem.url}>{subitem.name}</Link></li>
                            ))}
                          </ul>
                        </li>
                      )
                    }
                    return <li key={index} className={`px-5 py-[5px] font-medium leading-8 ${item.default && 'text-pureRed'}`}><Link href={item.url}>{item.name}</Link></li>
                  })
                }
              </ul>

              <p className="text-[0.95em] text-creamWhite px-4 mt-4">
                © 2024 SKBDC. All rights reserved.
              </p>
            </div>
          </div>

          <div className={`absolute z-10 right-4 top-1/2 m-0 text-white transform origin-bottom-right transition-all duration-400 ${isOpen ? "opacity-100" : "opacity-0"}`} style={{ transform: 'rotate(-90deg) translate(50%, 0)' }}>
            <FollowUsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
