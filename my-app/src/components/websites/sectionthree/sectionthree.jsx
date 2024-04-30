"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import multi from '../../../../public/img/multi.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Sectionthree = () => {


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

    const details = [
        {
            id:1,
            pic:multi,
            text:"Estate Development",
            textwo:"We are involved in land acquisition, planning, design, construction, and marketing. We maximize the value and utility of large pieces of land by creating functional and attractive improvements that meet the needs of the community or target market.",
        },
        {
            id:2,
            pic:multi,
            text:"Estate Development",
            textwo:"We are involved in land acquisition, planning, design, construction, and marketing. We maximize the value and utility of large pieces of land by creating functional and attractive improvements that meet the needs of the community or target market.",
        },
        {
            id:3,
            pic:multi,
            text:"Estate Development",
            textwo:"We are involved in land acquisition, planning, design, construction, and marketing. We maximize the value and utility of large pieces of land by creating functional and attractive improvements that meet the needs of the community or target market.",
        },
        {
            id:4,
            pic:multi,
            text:"Estate Development",
            textwo:"We are involved in land acquisition, planning, design, construction, and marketing. We maximize the value and utility of large pieces of land by creating functional and attractive improvements that meet the needs of the community or target market.",
        },
        {
            id:5,
            pic:multi,
            text:"Estate Development",
            textwo:"We are involved in land acquisition, planning, design, construction, and marketing. We maximize the value and utility of large pieces of land by creating functional and attractive improvements that meet the needs of the community or target market.",
        }
    ]



  return (
    <div className='bg-gray-100 ' data-aos='flip-down'
    data-aos-easing='ease-out-cubic'
 data-aos-duration='2000'
 ref={scrollTriggerRef}>
         <div className='flex justify-center items-center gap-2'>
      <div className='border border-orange border-b-4 md:border-b-8 w-[10%] md:w-[6%] rounded-3xl'> </div>
      <div className='border border-fad border-b-4 md:border-b-8 w-[6%] md:w-[3%] rounded-3xl'> </div>
  <div>
  <p className='text-center text-xl md:text-4xl lg:text-2xl xl:text-3xl'>Services</p>
 
  </div>
    </div>

   <div className='flex items-center justify-center py-2  md:py-4 lg:py-5'>
   <p className='text-center w-[85%] md:w-[90%] lg:w-[60%] xl:w-[50%] text-xs md:text-2xl lg:text-lg xl:text-xl font-light'>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
   </div>

<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-5 lg:px-20 xl:px-30'>
{
    details.map((datum) => (
        <div key={datum.id} className=' shadow-2xl flex flex-col gap-4'>
            <Image src={datum.pic} alt='pic-img' className='rounded-xl'/>
            <p className='text-orange px-5 text-sm md:text-2xl lg:text-lg xl:text-xl font-medium'>{datum.text}</p>
            <p className='pb-5 px-5 text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>{datum.textwo}</p>
            </div>
    ))
}
</div>



    </div>
  )
}

export default Sectionthree