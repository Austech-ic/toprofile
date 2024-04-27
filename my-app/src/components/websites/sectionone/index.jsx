"use client"

import React, { useState } from 'react';
import styles from './sectionone.module.css'
import Header from '../header/header'
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdCall } from "react-icons/io";


const Index = () => {

  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [messageIconPosition, setMessageIconPosition] = useState({ top: 0, left: 0 });

  const toggleWhatsApp = () => {
    setShowWhatsApp(!showWhatsApp);
    setShowCall(false); // Close call icon when WhatsApp icon is toggled
    setMessageIconPosition({ top: 0, left: 0 }); // Reset message icon position
  };

  const toggleCall = () => {
    setShowCall(!showCall);
    setShowWhatsApp(false); // Close WhatsApp icon when call icon is toggled
    setMessageIconPosition({ top: 0, left: 0 }); // Reset message icon position
  };

  const toggleMessage = (event) => {
    event.preventDefault(); // Prevent default action
    setShowWhatsApp(!showWhatsApp); // Toggle WhatsApp icon
    setShowCall(!showCall); // Toggle call icon
    const rect = event.target.getBoundingClientRect(); // Get position of the clicked icon
    setMessageIconPosition({
      top: rect.top + window.scrollY + 10, // Adjust top position as per your requirement
      left: rect.left + window.scrollX + 10 // Adjust left position as per your requirement
    });
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className='flex flex-col px-10 md:px-16 pt-12 pb-10 md:pt-20 md:pb-16 lg:px-24 xl:px-36 lg:pt-28 lg:pb-20 xl:pt-40 xl:pb-32 text-white'>
        <div className='w-[90%] md:w-[80%] lg:w-[60%] xl:w-[70%] '>
          <p className='font-semibold leading-10 text-2xl md:text-5xl xl:text-6xl md:leading-relaxed xl:leading-relaxed '>Welcome to Toprofile Real estate</p>
          <p className='mt-2 text-xs md:text-2xl lg:text-xl xl:text-xl md:mt-6 font-light leading-relaxed md:leading-10 lg:leading-relaxed xl:leading-loose lg:mt-2 '>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero <br className='lg:hidden' /> et velit  interdum, ac aliquet odio mattis.</p>
          <div className="mt-4 ">
          </div>
          <button className='flex justify-between items-center gap-4 border border-orange text-white text-xs md:text-xl lg:text-base xl:text-lg p-2 md:p-4'>
            VIEW OUR PROJECT
            <div className='bg-white h-5 w-5 md:h-8 md:w-8 lg:h-6 lg:w-6 xl:h-7 xl:w-7 flex items-center justify-center rounded-full'>
              <IoIosArrowForward className='text-orange h-4 w-4 md:h-6 md:w-6 lg:h-5 lg:w-5 xl:h-6 xl:w-6' />
            </div>
          </button>
        </div>
        <div className='flex flex-col justify-items-end items-end  w-full pt-[80px] md:pt-[100px]'>
          {showCall &&
            <div className='bg-lite flex justify-center items-center rounded-full h-10 w-10 md:h-20 md:w-20'>
              <IoCallOutline className='text-white h-6 w-6 md:w-10 md:h-10' />
            </div>
          }
          {showWhatsApp &&
            <div className='bg-lite flex justify-center items-center rounded-full h-10 w-10 md:h-20 md:w-20'>
              <IoLogoWhatsapp className='text-white h-6 w-6 md:w-10 md:h-10' />
            </div>
          }
          <div className='bg-lite flex justify-center items-center rounded-full h-10 w-10 md:h-20 md:w-20' onClick={toggleMessage}>
            <MdOutlineMessage className='text-white h-6 w-6 md:w-10 md:h-10' />
          </div>
        </div>
      </div>
      <div className={styles.submain}>
        <div className={styles.subsub}>
          <IoLocationSharp className='text-orange h-8 w-8 md:h-16 md:w-16 lg:h-9 lg:w-9 xl:w-10 xl:h-10' />
          <p className='text-xs md:text-2xl lg:text-base xl:text-xl'>Suite 47, Vicbalkon Towers, Plot C44, Utako District.</p>
        </div>
        <div className={styles.subsubsub}>
          <div className='flex items-center  gap-4 w-full'>
            <AiOutlineMail className='text-orange h-4 w-4 md:h-8 md:w-8 lg:h-6 lg:w-6 xl:w-7 xl:h-7 ' />
            <div className='flex flex-col '>
              <p className='text-xs md:text-2xl lg:text-base xl:text-xl text-gray-500'>Contact</p>
              <p className='text-xs md:text-2xl lg:text-base xl:text-xl text-black'>suport123@mail.com</p>
            </div>
          </div>
          <div className='flex lg:items-center  gap-4 w-full'>
            <IoCallOutline className='text-orange h-4 w-4 md:h-8 md:w-8 lg:h-6 lg:w-6 xl:w-7 xl:h-7' />
            <div className='flex flex-col '>
              <p className='text-xs md:text-2xl lg:text-base xl:text-xl text-gray-500'>Contact</p>
              <p className='text-xs md:text-2xl lg:text-base xl:text-xl text-black'>0908646346276</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
