import React from 'react'
import OurProducts from '../components/Home/OurProducts'

export const metadata = {
  title: "Products • Skbdc",
  description: "OUR PRODUCTS Cabinetry Countertops Flooring Appliances Hardware",
  site_name: 'Skbdc',
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/assets/products/cabinetry.webp',
        alt: 'SKBDC',
      },
    ],
  }
};

export default function Products() {
  return (
    <div>
      <OurProducts extraPadding={false} />
    </div>
  )
}
