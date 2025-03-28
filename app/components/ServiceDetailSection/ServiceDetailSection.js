"use client"
import React, { useMemo } from 'react'
import Button from '../common/Button'
import { PRODUCTS, SERVICES } from '@/app/utils/constant'
import { useParams } from 'next/navigation'
import { useScroll } from '@/app/utils/hooks'

export default function ServiceDetailSection() {
  const params = useParams()

  const { item, isProduct } = useMemo(() => {

    let productFilter = PRODUCTS.filter((product) => {
      if (product.url === `/page/${params.id}`) {
        return product
      }
    })

    if (productFilter.length > 0) {
      return {
        item: productFilter[0],
        isProduct: true
      }
    }

    let serviceFilter = SERVICES.filter((service) => {
      if (service.url === `/page/${params.id}`) {
        return service
      }
    })

    if (serviceFilter.length > 0) {
      return {
        item: serviceFilter[0],
        isProduct: false
      }
    }

    return {}
  }, [params?.id])

  const scroll = useScroll(0)

  return (
    <section>
      <div className="relative h-screen overflow-hidden">
        <div
          className="relative min-h-screen py-[8vh] px-5 mx:px-0 md:py-[200px] w-full bg-cover bg-center flex items-center justify-center transition-all duration-50"
          style={{ backgroundImage: `url(${item?.original_image || item?.image})`, transform: `scale(${1 + (scroll / 1200)})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Content */}
          <div className='container m-auto '>
            <div
              className="relative lg:w-[calc(100%/12*7)] z-10 p-[10px] text-white lg:mr-14"
              style={{ transform: `scale(${1 - ((scroll / 1200) * 2)})` }}
            >
              <h2 className="text-[2.65rem] lg:text-[calc(4.5rem*0.88)] leading-none font-cormorant-garamond mb-4 font-medium  md:tracking-[-.035em]">
                {item.name}
              </h2>

              <h3 className='text-[calc(1rem+0.025*((100vw-576px)/864))] leading-6'>
                {item.description}
              </h3>

              {/* CTA Button */}
              {
                !isProduct &&
                <div className='mt-14 lg:mt-20'>
                  <a href={`/contact-us?inquiry=${item.name}`}>
                    <Button size="large" className="bg-pureRed hover:bg-black text-white text-[0.9em] font-medium min-h-[2.125rem] transition-all duration-300">
                      Start Project
                    </Button>
                  </a>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      {
        item?.associates?.length &&
        <div className='bg-white'>
          <div className="container mx-auto px-4 py-[100px]">
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 md:gap-4">
              {item?.associates?.map((associate, index) => (
                <a key={index} href={associate.url}>
                  <div className="flex justify-center p-6">
                    <img
                      src={associate.logo}
                      alt={associate.name}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      }
    </section>
  )
}
