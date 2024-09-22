"use client"
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Image from 'next/image';
import { images } from '@/utils';
import Title from '../components/Title';

const Gallery = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const openSlider = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const images = Array.from({ length: 50 }, (v, i) => ({
    original: `/${i + 1}.jpg`,
    thumbnail: `/${i + 1}.jpg`,
  }));

  return (
    <>

    <Title label="Gallery"/>
      {/* Grid Gallery */}
      <div className="container mx-auto py-16 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => openSlider(index)}
            >
              <Image
                src={image.original}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Slider */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-90">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <ImageGallery
              items={images}
              startIndex={currentIndex}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              onSlide={(current) => setCurrentIndex(current)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
