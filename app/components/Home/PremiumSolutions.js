import React from 'react'
import Button from '../common/Button'
import Link from 'next/link'
import { AnimatedContent } from '../common/AnimatedContent'

export default function PremiumSolutions() {
  return (
    <section
      className="relative flex py-[100px] px-5 md:px-0 w-full overflow-hidden bg-center bg-cover h-[800px]"
      style={{ backgroundImage: "url('/assets/kitchen.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-transparent opacity-50"
        style={{
          backgroundImage: 'linear-gradient(180deg, #FFFFFF 50%, #00000000 100%)'
        }} />

      <div className='container m-auto px-5 md:px-[50px] xl:px-[150px]'>
        <div className='h-[20vh] lg:h-0' />
        <div className="text-center m-auto relative z-10 flex flex-col justify-center items-center md:px-5">
          <div className='mb-5'>
            <AnimatedContent>
              <h1 className="text-[2.25rem] md:text-[3vw] font-cormorant-garamond text-black leading-none font-semibold mb-4">
                EXPLORE OUR PREMIUM CABINETRY SOLUTIONS, MADE TO LAST
              </h1>
            </AnimatedContent>

            <AnimatedContent>
              <p className='my-4 text-black'>
                Our cabinet partners seamlessly blend style, functionality, and durability to elevate any kitchen design. Crafted from high-quality materials, we provide premium solutions at an affordable price, ensuring both elegance and lasting value for your home.
              </p>
            </AnimatedContent>
          </div>

          <AnimatedContent>
            <Link href="/page/cabinetry/">
              <Button rounded={true} className="leading-none w-fit min-h-[3rem] font-semibold mt-4 text-[0.85em] bg-blackButton dark:bg-black px-5">
                EXPLORE
              </Button>
            </Link>
          </AnimatedContent>
        </div>
        <div className='lg:h-[10vh]' />
      </div>
    </section>
  )
}
