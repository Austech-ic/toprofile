"use client"
import React from 'react'
import Image from 'next/image'

import { useParams } from 'next/navigation';
import five from '../../../../../public/img/five.png'
import two from '../../../../../public/img/two.png'
import three from '../../../../../public/img/three.png'
import map from '../../../../../public/img/map.png'
import four from '../../../../../public/img/six.png'
import { LuBedDouble, LuBath } from "react-icons/lu";
import { FaLandmark } from 'react-icons/fa';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineArrowLeft, AiOutlineSearch } from 'react-icons/ai';
import { BsHouse } from "react-icons/bs"
import Navbar from '../../navbar/navbar';
import Link from 'next/link';



const Page = ({ id }) => {
  const { singlepropertyid } = useParams();

  // if (!details) {
  //   return <div>Loading...</div>; // Add a loading state while fetching data
  // }



  return (
    <div className='bg-gray' >
      <Navbar />
      
      <div className='px-10  md:px-16 lg:px-20 xl:px-30 flex flex-col gap-8 md:gap-14 '>

        <div className='flex flex-col lg:flex-row gap-4 md:gap-8'>

          <div className='flex-1 '>
            <Image src={five} alt='pic-img' className='h-[100%]' />
          </div>

          <div className='flex-1 grid grid-cols-2 gap-4 md:gap-8'>
            <Image src={five} alt='pic-img' className='' />
            <Image src={two} alt='pic-img' className='' />
            <Image src={three} alt='pic-img' className='' />
            <Image src={four} alt='pic-img' className='' />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-4 lg:gap-2'>

          <div className='flex-1'>
            <div className=' px-0 md:px-2 lg:px-0'>
              <p className='text-xs md:text-xl lg:text-base xl:text-base font-medium '>3 Bedroom Fully Detached Bungalow + a Detached BQ,Ikoyi, lagos, Nigeria.</p>

            </div>

            <div className='px-0 md:px-2 lg:px-0 pt-2 md:pt-3  '>

              <div className=' flex items-center justify-start gap-4 md:gap-8 lg:gap-8'>
                <div className='flex items-center gap-1 md:gap-1 lg:gap-2'>
                  <FaLandmark className='text-orange h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />
                  <p className=' text-xs md:text-lg lg:text-sm xl:text-base leading-5 font-light'>8000sq+</p>
                </div>

               


              </div>


            </div>

            <div className='px-0 md:px-2 lg:px-0 pt-2 md:pt-5 flex flex-col gap-1 md:gap-2 '>
              <p className='text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              </p>

            </div>


          </div>

          <div className='flex-1'>
            <div className='pb-2 md:pb-5 px-0 md:px-2 lg:px-3 flex flex-col gap-1 md:gap-2 '>
              <p className='text-slate-400 text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>Price</p>
              <p className='text-lite text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>₦1,200,000.00</p>
            </div>
            <div className='px-0 md:px-2 lg:px-3 flex items-center gap-6' >
             <Link  href="https://wa.me/message/R3XZ3HBLHXWMG1">
             <button className='bg-orange text-white px-4 py-2 text-xs md:text-xl lg:text-sm xl:text-base'>BUY NOW</button>
             </Link>
              {/* <button className='bg-orange text-white px-4 py-2 text-xs md:text-xl lg:text-sm xl:text-base'>CONTACT US</button> */}
            </div>
          </div>
        </div>

      </div>

      <div className='px-10 py-10 md:py-16 lg:pb-20 md:px-16 lg:px-20 xl:px-30'>
        <Image src={map} alt='map-img' className='' />
      </div>

    </div>
  )
}

export default Page

