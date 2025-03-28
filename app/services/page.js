import React from 'react'
import OurService from '../components/Home/OurServices'

export const metadata = {
  title: "Services • Skbdc",
  description: "OUR SERVICES Kitchens Bathrooms Custom Closets Home Remodel Basement Exterior",
  site_name: 'Skbdc',
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/assets/services/kitchen.webp',
        alt: 'SKBDC',
      },
    ],
  }
};

export default function Services() {
  return (
    <div>
      <OurService extraPadding={false}/>
    </div>
  )
}
