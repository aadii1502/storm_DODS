import React from 'react'
import { useState, useEffect } from "react";
import Lottie from 'lottie-react';
import animation from '../assets/Animation - 1696430960085.json'
const images = [
    "https://images.unsplash.com/photo-1615506313305-e61daaa8cdcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
    "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1629872928185-171e13c8e58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    // Add more image URLs here
  
  ];
  
const Sponsors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' bg-gradient-to-b from-white to-purple-200 h-[150vh]'>
        <h1 className=' flex justify-center py-10 font-serif font-bold text-2xl'>OUR PARTNERS</h1>
      <div className=' grid grid-cols-4 ml-40 py-10'>
         <div>
            <img className=' h-[30vh] w-[30vh] rounded-full' src="https://cfstatic.give.do/b4a7d7e6-9a25-4508-be27-be7950664481.jpg" alt="" />
            <p className='ml-[4vh] py-4 font-semibold font-serif'>Sense International</p>
         </div>
         <div>
            <img className=' h-[30vh] w-[30vh] rounded-full' src="https://www.unitedwaymumbai.org/ngo_logos/578_logo.jpg" alt="" />
            <p className='ml-[4vh] py-4 font-semibold font-serif'>Diya Foundation</p>
         </div>
         <div>
            <img className=' h-[30vh] w-[30vh] rounded-full' src="https://cfstatic.give.do/596b3188-c662-48f6-acc4-14cac8e48961.png" alt="" />
            <p className='ml-[4vh] py-4 font-semibold font-serif'>Samarthanam Trust</p>
         </div>
         <div>
            <img className=' h-[30vh] w-[30vh] rounded-full' src="https://cfstatic.give.do/ed805010-3a33-49c0-b37a-b3e10a454222.jpg" alt="" />
            <p className='ml-[6vh] py-4 font-semibold font-serif'>Youth for Jobs</p>
         </div>
      </div>
      <h1 align="center" className=' font-bold text-blue-950 text-4xl mt-10'>PHOTO GALLERY</h1>
      <div className="overflow-hidden grid grid-cols-2">
        <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute duration-800 w-[100vh] h-[65vh] flex justify-center ml-96 my-10 rounded-2xl ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}
      </div>
    </div>
    </div>
  )
}

export default Sponsors
