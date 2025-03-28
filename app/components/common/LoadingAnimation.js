"use client"
import React, { useEffect, useState } from 'react'

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false)

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`fixed h-full w-full bg-black top-0 left-0 z-50 transition-all duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className='h-screen w-full flex justify-center items-center'>
        <img src={"/assets/shirlington-logo-white.png"} alt="Logo" className='w-[80vw] lg:w-full max-w-[400px] h-auto px-4 breathe-animation' />
      </div>
    </div>
  )
}
