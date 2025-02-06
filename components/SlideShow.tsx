'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SlideShow: React.FC<SlideShowProps> = ({ images, imageWidth, imageHeight }) => {
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
    <div className="relative w-full max-w-[100rem] h-96 mx-auto overflow-hidden rounded-lg mt-10 mb-10">
      <div
        className="w-full flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full">
            <Image 
              src={src} 
              alt={`Slide ${index + 1}`} 
              layout="intrinsic" 
              width={imageWidth} 
              height={imageHeight}
              objectFit="fit" 
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