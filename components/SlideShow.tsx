'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SlideShow: React.FC<SlideShowProps> = ({ images}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);  
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto overflow-hidden rounded-lg mt-10 mb-10">
      <div
        className="w-full flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full flex justify-center items-center">
            <Image 
              src={src} 
              alt={`Slide ${index + 1}`} 
              width={1920} 
              height={750}
              className="w-full h-full object-contain sm:block md:hidden lg:hidden"   
           
            />
            <Image 
              src={src} 
              alt={`Slide ${index + 1}`} 
              layout="intrinsic" 
              width={1500} 
              height={1200}
              objectFit="fit" 
              objectPosition='center'
              className="w-full h-full object-fit hidden sm:hidden md:block lg:block"  

            />

          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#fffbf0] text-[#36454f] m-3 p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#fffbf0] text-[#36454f] m-3 p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default SlideShow;
