import React from 'react'
import Button from '../common/Button'
import Link from 'next/link'
import { AnimatedContent } from '../common/AnimatedContent'

export default function WelcomePanel() {
  return (
    <div className='bg-[#3B3B3A] text-white py-24 md:py-36 px-4'>
      <div className="container mx-auto px-4 md:px-0">
        <AnimatedContent>
          <h2 className='text-[2.25rem] md:text-[3.2vw] leading-none font-cormorant-garamond font-medium mb-5'>WELCOME TO SHIRLINGTON KITCHEN & BATH</h2>
        </AnimatedContent>
        <AnimatedContent>
          <p className='mb-5 leading-7'>Welcome to Shirlington Kitchen & Bath, your premier destination for innovative kitchen and bath solutions. Our mission is to seamlessly blend functionality with elegance, crafting beautiful spaces that inspire, elevate, and enhance your everyday living.</p>
        </AnimatedContent>

        <AnimatedContent>
          <div className='mt-5'>
            <Link href="/about-us">
              <Button rounded={true} className="leading-none w-fit min-h-[3rem] font-semibold mt-4 text-[0.85em] bg-blackButton px-6">
                LEARN MORE
                <img src="/assets/icons/arrow-right.svg" alt="Arrow Right" className="inline-block ml-2 h-[10px]" />
              </Button>
            </Link>
          </div>
        </AnimatedContent>
      </div>
    </div>
  )
}
