"use client";

import React, { useState, useRef } from "react";
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';

export default function Affirmation() {
  const affirmations = [
    "I am capable of achieving my goals.",
    "I am confident in my abilities.",
    "I am worthy of happiness and success.",
    "I believe in myself, I am capable of amazing things.",
    "I embrace change and welcome new beginnings.",
    "I am Unique and Special, Not like anyone else.",
    "I am inferior to No one, I know who I am.",
    "I am a Star, NO One can dull my sparkle.",
    "I am worthy of love and I am loved ",
    "I am not timid. I am bold and full of energy.",
    "I am capable of making a lot of difference in the world",
    "I am a burst of fine flavours. I spread good energy everywhere I go.",
    "I excel in everything I put my mind to.",
    "I believe in my myself, My dreams are valid. My dreams will come true!",
    "I Know that everyday may not be good but 'I am a good thing' everyday",
    "I am braver than I Believe, I am Stronger than I seem and Smarter than I think",
    "I carry something great inside of me, The world is waiting for ‘me to happen’",
    "I am amazing, I am beautiful, I am God’s child, The Apple of His eyes.",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null); 

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === affirmations.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? affirmations.length - 1 : prevSlide - 1
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="relative w-full max-w-xl text-center">
        <div 
          className="flex justify-center items-center h-auto overflow-hidden" 
          ref={slideRef} 
        > 
          {affirmations.map((affirmation, index) => (
            <div 
              key={index} 
              className={`${index === currentSlide ? "flex" : "hidden"} flex justify-center items-center`} 
            >
              <p className="text-lg font-semibold text-black">{affirmation}</p> 
            </div>
          ))}
        </div>
        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70"
          onClick={prevSlide}
        >
          <Icon path={mdiChevronLeft} size={1.5} />
        </button>
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70"
          onClick={nextSlide}
        >
          <Icon path={mdiChevronRight} size={1.5} />
        </button>
      </div>
    </main>
  );
}
