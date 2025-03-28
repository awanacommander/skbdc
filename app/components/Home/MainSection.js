import React from 'react'
import Button from '../common/Button'
import Link from 'next/link'

export default function MainSection() {
  return (
    <div className="relative py-[100px] h-screen px-5 mx:px-0 md:py-[200px] w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/hero-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Content */}
      <div className="container relative z-10 p-[10px] text-white">
        <h2 className="text-[2.75rem] md:text-[5.5vw] leading-none font-cormorant-garamond mb-4 font-semibold tracking-normal md:tracking-[-.035em]">
          {' YOUR VISION'}
          <br className='hidden xl:inline' />
          {' OUR EXPERTISE'}
        </h2>

        <div className='py-4'>
          <div className="w-[90%] md:w-[38%] border-[#ff000075] border-t-[10px]"></div>
        </div>

        {/* CTA Button */}
        <div className='mt-20 flex gap-2'>
          <Link href="/contact-us">
            <Button rounded className="bg-black text-white text-[0.85em] font-semibold px-6 py-3">
              LET&apos;S TALK
            </Button>
          </Link>

          <Link href="/about-us" >
            <Button rounded className="border-2 border-[black] text-black text-[0.85em] font-semibold px-6 py-3">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
