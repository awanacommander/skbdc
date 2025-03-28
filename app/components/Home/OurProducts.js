"use client"
import { PRODUCTS } from '@/app/utils/constant';
import React, { useState } from 'react';
import Image from 'next/image';
import ServiceDetailDialog from './ServiceDetailDialog';
import Link from 'next/link';

const ProductCard = ({ product, handleOpenProduct }) => (
  <div className="relative group overflow-hidden rounded-lg">
    <div
      className="absolute left-5 top-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-500 z-10 rounded-full hover:bg-gray-100 hover:bg-opacity-20 w-auto"
      onClick={() => handleOpenProduct(product)}
    >
      <Image src="/assets/icons/corner-box.svg" alt="open" className="inline-block box-content p-5 h-5 w-5 cursor-pointer" width={20} height={20} />
      {/* <img src="/assets/icons/corner-box.svg" alt="open" className="inline-block box-content p-5 h-5 w-5 cursor-pointer" /> */}
    </div>

    <Link href={product.url || ""}>
      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
    </Link>

    <div
      className="absolute w-full bg-opacity-10 bottom-0"
      style={{
        background: 'linear-gradient(360deg, rgba(17, 16, 19, 0.5) 0%, rgba(17, 16, 19, 0) 100%)'
      }}
    >
      <h3 className="text-white text-[42px] font-medium font-cormorant-garamond p-[3vh]">{product.name}</h3>
    </div>
  </div>
);

const OurProducts = (props) => {
  const { extraPadding = true } = props
  const [showProductDialog, setShowProductDialog] = useState(null)

  const handleOpenProduct = (product) => {
    setShowProductDialog(product)
  }

  return (
    <div className="bg-white dark:bg-background dark:text-white text-black py-36 px-4">
      <div className="container mx-auto px-5">
        <h2 className="text-[2.25rem] md:text-[3.65vw] font-cormorant-garamond font-medium">OUR PRODUCTS</h2>
        <div className='py-4'>
          <div className="w-[90%] md:w-[25%] border-[#FF000075] border-t-[10px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 pt-2">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={index} product={product} handleOpenProduct={handleOpenProduct} />
          ))}
        </div>
      </div>

      <ServiceDetailDialog
        open={Boolean(showProductDialog)}
        service={showProductDialog}
        handleClose={() => setShowProductDialog(null)} />

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

export default OurProducts;