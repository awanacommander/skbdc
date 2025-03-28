import React from 'react'
import DifferenceSection from '@/app/components/DifferenceSection/DifferenceSection';

export const metadata = {
  title: "Impact • Skbdc",
  description: "",
  site_name: 'Skbdc',
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/assets/difference.webp',
        alt: 'SKBDC',
      },
    ],
  }
};

export default function page() {
  return (
    <div>
      <div className='h-[12vh]'></div>

      <DifferenceSection />
    </div>
  )
}
