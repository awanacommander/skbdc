import React from 'react'
import Button from '../common/Button'
import { SCHEDULE_LINK } from '@/app/utils/constant'
import Link from 'next/link'
import { AnimatedContent } from '../common/AnimatedContent'

export default function OurDesign() {
  return (
    <section
      className="relative py-[100px] px-5 md:px-0 w-full overflow-hidden bg-center bg-cover sm:bg-auto"
      style={{ backgroundImage: "url('/assets/minimalist-kitchen-interior-design.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20" />

      <div className="container m-auto relative z-10 flex flex-col justify-center p-[10px]">
        <AnimatedContent>
          <h1 className="text-[2.25rem] md:text-[3.65vw] font-cormorant-garamond text-white leading-none font-medium mb-4">
            DESIGNED FOR THE
            <br className='hidden xl:inline' />
            WAY YOU LIVE
          </h1>
        </AnimatedContent>

        <div className='py-4'>
          <div className="w-[90%] md:w-[40%] border-[#ff000075] border-t-[10px]"></div>
        </div>

        <AnimatedContent>
          <Link href={SCHEDULE_LINK} target='_blank'>
            <Button rounded={true} className="leading-none w-fit min-h-[3rem] font-semibold mt-4 text-[0.85em] bg-blackButton px-5">
              SCHEDULE NOW
            </Button>
          </Link>
        </AnimatedContent>
      </div>
    </section>
  )
}
