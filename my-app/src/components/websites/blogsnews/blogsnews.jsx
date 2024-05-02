"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import multi from '../../../../public/img/six.png'
import { LuBedDouble, LuBath } from "react-icons/lu";
import { FaLandmark } from 'react-icons/fa';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { AiFillClockCircle, AiOutlineArrowLeft } from 'react-icons/ai';
import { BsClock } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'
import { useRouter } from 'next/navigation'; 


const Blogsnews = () => {
    const router = useRouter(); // No need to useState for router

    const details = [
        {
            id: 1,
            pic: multi,
            duration:"4 mins read",
            text: "Real Estate, The Next Level Power House",
            textwo:"Read More...",
          
        },
        {
            id: 2,
            pic: multi,
            duration:"4 mins read",
            text: "Real Estate, The Next Level Power House",
            textwo:"Read More...",
        },
        {
            id: 3,
            pic: multi,
            duration:"4 mins read",
            text: "Real Estate, The Next Level Power House",
            textwo:"Read More...",
        },
        {
            id: 4,
            pic: multi,
            duration:"4 mins read",
            text: "Real Estate, The Next Level Power House",
            textwo:"Read More...",
        },
        {
            id: 5,
            pic: multi,
             duration:"4 mins read",
            text: "Real Estate, The Next Level Power House",
            textwo:"Read More...",
        },
        {
            id: 6,
            pic: multi,
            duration:"4 mins read",
            text: "Real Estate, The Next Level Power House",
            textwo:"Read More...",
        },
        {
            id: 7,
            pic: multi,
            duration:"4 mins read",
            text: "Real Estate, The Next Level Power House",
            textwo:"Read More...",
        },
        {
            id: 8,
            pic: multi,
            duration:"4 mins read",
            text: "Real Estate, The Next Level Power House",
            textwo:"Read More...",
        },
        {
            id: 9,
            pic: multi,
            duration:"4 mins read",
            text: "Real Estate, The Next Level Power House",
            textwo:"Read More...",
        },
    ]

    
    if (!details) {
        return <div>Loading...</div>; // Add a loading state while fetching data
      }

    const scrollTriggerRef = useRef(null);

  useEffect(() => {
      AOS.init();
      const options = {
          threshold: 0.2,
      };
      const observer = new IntersectionObserver(handleScroll, options);
      observer.observe(scrollTriggerRef.current);

      return () => {
          observer.disconnect();
      };
  }, []);

  const handleScroll = (entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              AOS.refresh();
          }
      });
  };



  return (
    <div className='bg-gray' data-aos='flip-left'
    data-aos-easing='ease-out-cubic'
 data-aos-duration='2000'
 ref={scrollTriggerRef}>
            <div className='bg-gray-200  px-10 py-10 md:py-16 lg:px-20 xl:px-30'>
                <div className=' grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {
                        details.map((datum) => (
                            <div key={datum.id} className='shadow-2xl flex flex-col gap-2 md:gap-4 bg-white'>
                                <Image src={datum.pic} alt='pic-img' className='rounded-xl' />

                               <div className='px-10 md:px-10 lg:px-10 xl:px-5'>
                               <div className=' flex items-center justify-end gap-1 md:gap-2 lg:gap-1  '>
                                  <BsClock className='text-brw h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4' />
                                <p className=' text-xs md:text-lg lg:text-sm xl:text-base text-brw'>{datum.duration}</p>
                                </div>
                               </div>
                                <div className=' px-5 md:px-5 lg:px-5 '>
                                    <p className=' text-xs md:text-xl lg:text-lg xl:text-xl text-slate-600 '>{datum.text}</p>
                                    <div className='border-b-2 border-gray mt-2 md:mt-5'></div>
                                </div>
                                <Link  href={`/singleblog/${datum.id}`} className=' px-5 md:px-5 lg:px-5' >
                                    <p className=' text-xs md:text-lg lg:text-sm xl:text-base  text-lite '>Read More...</p>
                                    <div className='border-gray border-b-2 mt-2 md:mt-5'></div>
                                </Link>


                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center justify-center gap-2 md:gap-4 pt-10 pb-5 md:pt-16 lg:pt-20 xl:pt-24'>

                    <div className='gap-2  p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100'>
                        <IoIosArrowBack className='h-5 w-5 md:w-7 md:h-7 lg:h-7 lg:w-7 xl:h-8 xl:w-8' />

                    </div>
                    <div className='gap-2  p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100'>
                        <p className='text-xs md:text-xl lg:text-sm xl:text-base'>1</p>
                    </div>
                    <div className='gap-2  p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100'>
                        <p className='text-xs md:text-xl lg:text-sm xl:text-base'>2</p>
                    </div>
                    <div className='gap-2  p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100'>
                        <p className='text-xs md:text-xl lg:text-sm xl:text-base'>3</p>
                    </div>
                    <div className='gap-2  p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100'>
                        <p className='text-xs md:text-xl lg:text-sm xl:text-base'>4</p>
                    </div>

                    <div className='gap-2  p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100'>
                        <p className='text-xs md:text-xl lg:text-sm xl:text-base'>5</p>
                    </div>

                    <div className='gap-2  p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100'>
                        <IoIosArrowForward className='h-5 w-5 md:w-7 md:h-7 lg:h-7 lg:w-7 xl:h-8 xl:w-8' />

                    </div>

                </div>
            </div>
        </div>
  )
}

export default Blogsnews