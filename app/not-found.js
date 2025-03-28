import React from 'react'

export const metadata = {
  title: 'Page not found • Skbdc',
};

export default function NotFound() {
  return (
    <div className='min-h-[calc(100vh-25vh)]'>
      <div className='h-[12vh]'></div>

      <div className='container m-auto px-[7.4vw]'>
        <h1 className='font-cormorant-garamond font-medium text-[2.75rem] md:text-[calc(2.75rem+1.75*((100vw-576px)/864))]'>404. Nothing here</h1>
        <div className='w-1/2'>
          <h3 className='mt-4 font-cormorant-garamond font-bold text-[calc(2rem+0.25*((100vw-576px)/864))]'>Sorry, but the page you are looking for does not exist.</h3>
        </div>
      </div>
    </div>
  )
}
