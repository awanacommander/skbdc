"use client"
import { SERVICES } from '@/app/utils/constant';
import React, { useState } from 'react';
import Image from 'next/image';
import ServiceDetailDialog from './ServiceDetailDialog';
import Link from 'next/link';
import { AnimatedContent } from '../common/AnimatedContent';

const ServiceCard = ({ service, handleOpenService }) => (
  <div className="relative group overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1">
    {/* Hide as per requirement */}
    {/* <div
      className="absolute left-5 top-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-500 z-10 rounded-full hover:bg-gray-100 hover:bg-opacity-20 w-auto"
      onClick={() => handleOpenService(service)}
    >
      <Image src="/assets/icons/corner-box.svg" alt="open" className="inline-block box-content p-5 h-5 w-5 cursor-pointer" width={20} height={20} />
    </div> */}

    <Link href={service.url || ""}>
      <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-[1.2]" style={{ transition: "9s cubic-bezier(.1,.2,.7,1)" }} />
    </Link>

    <div
      className="absolute w-full bg-opacity-10 bottom-0"
      style={{
        background: 'linear-gradient(360deg, rgba(17, 16, 19, 0.5) 0%, rgba(17, 16, 19, 0) 100%)'
      }}
    >
      <h3 className="text-white text-[42px] font-medium font-cormorant-garamond p-[3vh]">{service.name}</h3>
    </div>
  </div>
);

const OurService = (props) => {
  const { extraPadding = true } = props
  const [showServiceDialog, setShowServiceDialog] = useState(null)

  const handleOpenService = (service) => {
    setShowServiceDialog(service)
  }

  return (
    <div className="bg-white dark:bg-background dark:text-white text-black py-36 px-4">
      <div className="px-4">
        <div className='container mx-auto'>
          <AnimatedContent>
            <h2 className="text-[2.25rem] md:text-[3.65vw] font-cormorant-garamond font-medium">OUR SERVICES</h2>
          </AnimatedContent>
          <AnimatedContent>
            <p className='mb-5 leading-7'>With over a decade of renovation experience, our team is committed to delivering top-quality services you can trust. We pride ourselves on honesty, excellence, and professionalism, ensuring every project meets the highest standards.</p>
          </AnimatedContent>

          <div className='py-4'>
            <div className="w-[90%] md:w-[25%] border-[#FF000075] border-t-[10px]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 pt-2">
          {SERVICES.map((service, index) => (
            <AnimatedContent key={index}>
              <ServiceCard service={service} handleOpenService={handleOpenService} />
            </AnimatedContent>
          ))}
        </div>
      </div>

      <ServiceDetailDialog
        open={Boolean(showServiceDialog)}
        service={showServiceDialog}
        handleClose={() => setShowServiceDialog(null)} />

      {
        extraPadding &&
        <>
          <div className="h-[10vh]" />
          <div className="h-[8vh]" />
        </>
      }
    </div>
  );
};

export default OurService;