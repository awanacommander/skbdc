import React, { Suspense } from 'react'
import Button from '../components/common/Button'
import Link from 'next/link'
import ContactUsForm from '../components/ContactUs/ContactUsForm';
import { FACEBOOK, INSTAGRAM, SCHEDULE_LINK } from '../utils/constant';
import LoadingAnimation from '../components/common/LoadingAnimation';

export const metadata = {
  title: "Contact Us • Skbdc",
  description: "Get in touch Our team is approachable and stands ready to address...",
  site_name: 'Skbdc',
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/assets/minimalist-kitchen-interior-design.webp',
        alt: 'SKBDC',
      },
    ],
  }
};

export default function ContactUs() {

  return (
    <Suspense fallback={<LoadingAnimation />}>
      <div>
        <div className='min-h-[30vh] -mb-[1.25rem] md:mb-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/assets/minimalist-kitchen-interior-design.webp')" }}>
          <div className='pt-[12vh]'>
            <div className='container m-auto py-12 px-5 lg:py-16 mt-5'>
              <h1 className='text-[calc(2.75rem+1.75*((100vw-576px)/864))] xl:text-[4.5rem] font-medium font-cormorant-garamond text-white leading-none'>Contact Us</h1>
              <h4 className='text-[calc(1.5rem+0.25*((100vw-576px)/864))] xl:text-[1.75rem] mt-5 font-medium font-cormorant-garamond text-white'>Appointment Scheduling</h4>
              <div className='mt-6 lg:mt-10'>
                <a href={SCHEDULE_LINK}>
                  <Button className="bg-pureRed">
                    Schedule Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-5 py-12 dark:bg-background">
          <div className='flex flex-col md:flex-row'>
            <div className="w-full md:w-2/4 md:pr-[14.942%]">
              <h1 className="text-5xl font-bold mb-5 font-cormorant-garamond">Get in touch</h1>

              <div className="mb-12">
                <div className='py-4 mb-5'>
                  <div className="w-[60%] md:w-[30%] border-[#ff000075] border-t-[5px]"></div>
                </div>
                <p className="calc(1rem+0.025*((100vw-576px)/864)) xl:text-[1.15rem] max-w-xl py-4">
                  Our team is approachable and stands ready to address any inquiries or questions you may have.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                  <h2 className="text-lg">Contact Phone</h2>
                  <Link className='animated-link' href="tel:7032153500">
                    <p className="text-xl"><strong>703-215-3500</strong></p>
                  </Link>
                </div>

                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                  <h2 className="text-lg">Email</h2>
                  <Link className='animated-link' href="mailto:contact@skbdc.com">
                    <p className="text-xl"><strong>contact@skbdc.com</strong></p>
                  </Link>
                </div>
              </div>

              <div className='h-[4vh] md:h-[7vh]' />
            </div>

            <div className='w-full md:w-1/4 mb-10 md:mb-0'>
              <h2 className="text-[calc(1.5rem+0.25*((100vw-576px)/864))] lg:text-[1.75rem] font-medium mb-2 font-cormorant-garamond">Address</h2>

              <div className='py-4 mb-5'>
                <div className="w-[25%] md:w-[35%] border-[#ff000075] border-t-[5px]"></div>
              </div>

              <div className='md:w-[70%]'>
                <p>3850 S Four Mile Run Dr</p>
                <p>Arlington, VA 22206</p>
              </div>
            </div>

            <div className='w-full md:w-1/4'>
              <h2 className="text-[calc(1.5rem+0.25*((100vw-576px)/864))] lg:text-[1.75rem] font-medium mb-2 font-cormorant-garamond">Social media</h2>

              <div className='py-4 mb-5'>
                <div className="w-[25%] md:w-[35%] border-[#ff000075] border-t-[5px]"></div>
              </div>

              <ul>
                <li className="mb-1">
                  <Link className="inline-block text-md animated-link w-fit font-bold" href={FACEBOOK}>Facebook</Link>
                </li>
                <li className="mb-1">
                  <Link className="inline-block text-md animated-link w-fit font-bold" href={INSTAGRAM}>Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='px-5'>
          <div className='container mx-auto'>
            <div className='border border-[#635d6fa6]' />
          </div>

          <div className='h-[7vh]' />

          <div className='container mx-auto'>
            <ContactUsForm />
          </div>

          <div className='h-[8vh] lg:h-[10vh]' />
        </div>

        <div className='w-full'>
          <iframe
            className='w-full h-[450px]'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.432354081698!2d-77.09519642354968!3d38.84545914976627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b1518c81a8af%3A0x4e235fea338373ff!2s3850%20S%20Four%20Mile%20Run%20Dr%2C%20Arlington%2C%20VA%2022206%2C%20USA!5e0!3m2!1sen!2seg!4v1719404195714!5m2!1sen!2seg' />
        </div>
      </div>
    </Suspense>
  )
}


// Error
//box-shadow: 0 0 0 0.3125rem rgba(220, 40, 40, 0.2)
