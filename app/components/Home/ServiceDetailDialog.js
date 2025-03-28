import React from 'react'
import Image from 'next/image';
import IconButton from '../common/IconButton';
import Link from 'next/link';
import { trimDescription } from '@/app/utils/general';

export default function ServiceDetailDialog(props) {
  const { open, service, handleClose } = props

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden">
      <div className="relative h-full flex flex-col lg:flex-row bg-[#111013fc]">
        <div className="w-full lg:w-1/2 xl:w-[calc(100vw-38vw)] h-full min-h-1/2 lg:h-full relative">
          <Image
            src={service?.original_image || service.image}
            alt="Modern Kitchen"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col justify-center w-full lg:w-1/2 xl:w-[38vw] text-white py-[3rem] px-5 lg:py-[12vh] lg:px-[5vh] xl:px-[10vh]">
          <div className='absolute top-[5vh] right-[1.25rem] md:right-[4vh]'>
            <IconButton onClick={handleClose}>
              <Image src="/assets/icons/close.svg" alt="open" width={14} height={14} />
            </IconButton>
          </div>

          <h2 className="text-5xl font-cormorant-garamond font-medium mb-6">{service.name}</h2>

          <p className="mb-6">
            {trimDescription(service.description, 335)}
          </p>

          <Link href={service.url || ""}>
            <IconButton>
              <div className='flex items-center'>
                Read More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </IconButton>
          </Link>
        </div>
      </div>
    </div >
  )
}
