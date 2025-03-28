'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ASSOCIATIONS, PARTNERS } from '@/app/utils/constant';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { AnimatedContent } from '../common/AnimatedContent';

const OurPartners = () => {
  const swiperRef = React.useRef(null);

  return (
    <section className='bg-white py-24 md:py-36'>
      <div className="container mx-auto p-4">
        <AnimatedContent>
          <h1 className="text-[2.25rem] md:text-[3.65vw] text-center font-cormorant-garamond text-black font-semibold">OUR PARTNERS</h1>
        </AnimatedContent>

        {/* Partners Carousel */}
        <div className="max-w-[80%] mx-auto">
          <div className="relative">
            <Swiper
              className='w-[calc(100%-60px)]'
              spaceBetween={70}
              slidesPerView={1}
              navigation={{
                nextEl: '#element-swiper-next',
                prevEl: '#element-swiper-prev',
              }}
              loop={true}
              autoplay={{
                delay: 3000, // Delay between transitions in milliseconds
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 5,
                }
              }}
            >
              {PARTNERS.map((partner, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={partner.logo}
                    alt={partner.name || "Partner Logo"}
                    className="object-contain m-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button id='element-swiper-prev' className='absolute left-0 z-10 top-1/2 transform -translate-y-1/2' >
              <i className="fa-solid fa-chevron-left text-black text-xl"></i>
            </button>
            <button id='element-swiper-next' className='absolute right-0 z-10 top-1/2 transform -translate-y-1/2' >
              <i className="fa-solid fa-chevron-right text-black text-xl"></i>
            </button>
          </div>
        </div>

        {/* Associations Grid */}
        <div className="max-w-[80%] mx-auto">
          <Swiper
            spaceBetween={70}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              }
            }}
          >
            {ASSOCIATIONS.map((association, index) => (
              <SwiperSlide key={index}>
                <img
                  src={association.logo}
                  alt={association.name}
                  className="object-contain m-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;