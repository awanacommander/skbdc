import React from 'react'
import OurPartners from '../components/Home/OurPartners'
import Button from '../components/common/Button'

export const metadata = {
  title: "About Us • Skbdc",
  description: "Who We Are We are a dedicated kitchen and bath partner, transforming...",
  site_name: 'Skbdc',
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/assets/dark-kitchen.webp',
        alt: 'SKBDC',
      },
    ],
  }
};

export default function page() {
  return (
    <div className='bg-white dark:bg-background'>
      <div className='h-[12vh]'></div>

      <div className='container m-auto py-12 px-5 lg:pt-16 md:pb-20 xl:pb-32'>
        <h1 className='text-[calc(2.75rem+1.75*((100vw-576px)/864))] xl:text-[4rem] 3xl:text-[4.5rem] font-medium font-cormorant-garamond leading-none'>About Us</h1>
        <div className='mt-6 lg:mt-10'>
          <a href="/contact-us">
            <Button className="bg-pureRed">
              Contact Us
            </Button>
          </a>
        </div>
      </div>

      <div className="bg-[#f9f8fa] dark:bg-[#9690a20f] text-white">
        <div className="flex flex-col lg:flex-row">
          <div className='h-auto w-full lg:w-[56%]'>
            <div className="flex h-full flex-col relative">
              <div className='h-4 lg:min-h-[10vh] bg-white dark:bg-background mb-5' />
              <div
                className="relative py-[100px] h-[50vh] lg:h-full min-h-[30vh] px-5 md:px-0 w-full overflow-hidden bg-center bg-cover"
                style={{ backgroundImage: "url('/assets/dark-kitchen.webp')" }}
              ></div>
              <div className='hidden lg:block min-h-[10vh] bg-white dark:bg-background' />
            </div>
          </div>

          <div className="lg:py-8 pr-5 lg:pr-4 pl-5 lg:pl-[5rem] flex flex-col justify-center w-full lg:w-[40%] lg:max-w-[500px]">
            <div className='h-[6vh] lg:h-[10vh]' />

            <div className='min-h-[30vh]'>
              <h2 className="text-[calc(2.75rem+1.75*((100vw-576px)/864))] xl:text-[4.5rem] font-cormorant-garamond font-medium text-[#111013] dark:text-white mb-2">Who We Are</h2>
              <p className="text-creamWhite text-[1.025rem] lg:text-base leading-relaxed">
                We are a dedicated kitchen and bath partner, transforming your vision into reality with
                unparalleled expertise. We prioritize your needs, preferences, and budget at every stage,
                ensuring your satisfaction from initial consultation to final installation. Our
                commitment to excellence shines through in every detail, guaranteeing a seamless
                renovation experience. Whether you choose to purchase our products or trust us with the
                entire project, we adapt to your needs. Our aim is your satisfaction, and we strive to exceed
                your expectations at every turn.
              </p>
            </div>

            <div className='h-[6vh] lg:h-[10vh]' />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-background">
        <div className='container  mx-auto px-5 py-16'>
          <div className="flex flex-col lg:flex-row items-start lg:p-0">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-[calc(2.35rem+0.9*((100vw-576px)/864))] xl:text-[3.25rem] font-cormorant-garamond font-medium text-black dark:text-white">Our Mission</h2>
              <div className="w-full h-px bg-[#635d6fa6] dark:bg-[#635d6fa6] mt-3"></div>
            </div>
            <div className='w-[8.2%]'></div>
            <div className="w-full md:w-2/3 pl-0 lg:pl-16">
              <p className="text-[calc(1rem+0.025*((100vw-576px)/864))] text-creamWhite leading-relaxed">
                Our mission is to dedicate personalized solutions to our clients and provide the highest quality products and services with excellence and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>

      <OurPartners />
    </div>
  )
}
