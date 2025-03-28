"use client"
import React from 'react'
import Button from '../common/Button'
import { useScroll } from '@/app/utils/hooks'
import Link from 'next/link'

export default function DifferenceSection() {

  const scroll = useScroll(0)

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="relative min-h-screen py-[8vh] px-5 mx:px-0 md:py-[200px] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/difference.webp')", transform: `scale(${1 + (scroll / 1200)})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className='container m-auto '>
          <div
            className="relative lg:w-[calc(100%/12*7)] z-10 p-[10px] text-white lg:mr-14"
            style={{ transform: `scale(${1 - ((scroll / 1200) * 2)})` }}
          >
            <h2 className="text-[2.65rem] lg:text-[calc(4.5rem*0.88)] leading-none font-cormorant-garamond mb-4 font-medium  md:tracking-[-.035em]">
              Impact
            </h2>

            <h3 className='text-[calc(1rem+0.025*((100vw-576px)/864))] leading-6'>
              At Shirlington Kitchen and Bath, our commitment to making a difference extends beyond our showroom doors. A significant portion of our proceeds goes directly to supporting Fier-les Works, our nonprofit initiative aimed at addressing urgent humanitarian needs worldwide. Through Fearless Works, we provide essential support such as food and shelter to individuals and families facing homelessness. Additionally, we contribute to funding the development of shelters and other infrastructure in communities, providing safe havens for those in need. When you choose Shirlington Kitchen and Bath for your kitchen and bath needs, you’re not just investing in quality products and services—you’re also making a tangible difference in the lives of others. Together, with your support, we can continue to build a brighter future for communities around the globe.
            </h3>

            {/* CTA Button */}
            <div className='mt-14 lg:mt-20'>
              <Link href="https://fearlessworks.org/" target='_blank' >
                <Button size="small" className="bg-pureRed hover:bg-black text-white text-[0.9em] font-medium min-h-[2.125rem] px-4 py-2 transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
