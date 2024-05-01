import React from 'react'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import multi from '../../../../public/img/six.png'
import { LuBedDouble, LuBath } from "react-icons/lu";
import { FaLandmark } from 'react-icons/fa';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineArrowLeft, AiOutlineSearch } from 'react-icons/ai';
import { BsHouse } from "react-icons/bs";

const Projectcomp = () => {

    const details = [
        {
            id: 1,
            pic: multi,
            text: "A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.",
            sqr: "8000sq+",
            baths: "4 Baths",
            bed: "4 Beds",
            price: "₦1,200,000.00",
        },
        {
            id: 2,
            pic: multi,
            text: "A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.",
            price: "₦1,200,000.00",
            sqr: "8000sq+",
            baths: "4 Baths",
            bed: "4 Beds",
        },
        {
            id: 3,
            pic: multi,
            text: "A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.",
            price: "₦1,200,000.00",
            sqr: "8000sq+",
            baths: "4 Baths",
            bed: "4 Beds",
        },
        {
            id: 4,
            pic: multi,
            text: "A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.",
            price: "₦1,200,000.00",
            sqr: "8000sq+",
            baths: "4 Baths",
            bed: "4 Beds",
        },
        {
            id: 5,
            pic: multi,
            text: "A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.",
            price: "₦1,200,000.00",
            sqr: "8000sq+",
            baths: "4 Baths",
            bed: "4 Beds",
        },
        {
            id: 6,
            pic: multi,
            text: "A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.",
            price: "₦1,200,000.00",
            sqr: "8000sq+",
            baths: "4 Baths",
            bed: "4 Beds",
        },
        {
            id: 7,
            pic: multi,
            text: "A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.",
            price: "₦1,200,000.00",
            sqr: "8000sq+",
            baths: "4 Baths",
            bed: "4 Beds",
        },
        {
            id: 8,
            pic: multi,
            text: "A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.",
            price: "₦1,200,000.00",
            sqr: "8000sq+",
            baths: "4 Baths",
            bed: "4 Beds",
        },
        {
            id: 9,
            pic: multi,
            text: "A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.",
            price: "₦1,200,000.00",
            sqr: "8000sq+",
            baths: "4 Baths",
            bed: "4 Beds",
        },
    ]

    return (
        <div className='bg-gray'>
           <div className='flex items-center justify-center relative'>
           <div className='bg-white w-[80%] rounded-2xl p-10 md:p-20 lg:p-10 xl:p-16 flex flex-col gap-4 absolute top-[-4rem] md:top-[-13rem] lg:top-[-5rem] xl:top-[-8rem]'>

           <div className=' flex flex-col lg:flex-row gap-4 md:gap-8 '>
               <div className='flex-1 flex flex-col gap-2 ' >
                <p className='text-sm md:text-2xl lg:text-base xl:text-lg'>Search:</p>
               <div className='bg-gray flex items-center px-3 py-3 md:py-5 md:px-5 lg:px-3 lg:py-3 gap-2'>
                <AiOutlineSearch className='text-orange h-4 w-4 md:h-8 md:w-8 lg:h-6 lg:w-6' />
               <input type="text" placeholder='Search For Property' className='text-xs md:text-xl lg:text-sm xl:text-base bg-transparent outline-none'  />
               </div>
               </div>
               <div className='flex-1 flex flex-col gap-2' >
                <p className='text-sm md:text-2xl lg:text-base xl:text-lg'>Select Categories:</p>
               <div className='bg-gray flex items-center px-3 py-3 md:py-5 md:px-5 lg:px-3 lg:py-3  gap-2'>
                <BsHouse className='text-orange h-4 w-4 md:h-8 md:w-8 lg:h-6 lg:w-6' />
               <input type="text" placeholder='House' className='text-xs md:text-xl lg:text-sm xl:text-base bg-transparent outline-none'  />
               </div>
               </div>
               <div className='flex-1 flex flex-col gap-2' >
                <p className='text-sm md:text-2xl lg:text-base xl:text-lg'>Price Range:</p>
               <div className='bg-gray flex items-center px-3 py-3 md:py-5 md:px-5 lg:px-3 lg:py-3  gap-2'>
                <AiOutlineSearch className='text-orange h-4 w-4 md:h-8 md:w-8 lg:h-6 lg:w-6' />
               <input type="text" placeholder='Search For Property' className='text-xs md:text-xl lg:text-sm xl:text-base bg-transparent outline-none'  />
               </div>
               </div>
            </div>

            <div className=''>
                <button className='bg-orange text-white text-xs md:text-2xl lg:text-base xl:text-lg px-6 md:px-8 xl:px-10 py-2 md:py-3 lg:py-2 '>Search</button>
            </div>
           </div>
            
           </div>




            <div className='bg-gray-200 pt-[24rem] pb-10  px-10 md:pt-[32rem] lg:pt-[20rem] xl:pt-[18rem] lg:px-20 xl:px-30 '>
                <div className=' grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {
                        details.map((datum) => (
                            <div key={datum.id} className='shadow-2xl flex flex-col gap-2 md:gap-4 bg-white'>
                                <Image src={datum.pic} alt='pic-img' className='rounded-xl' />
                                <div className=' px-5 md:px-2 lg:px-5'>
                                    <p className=' text-xs md:text-xl lg:text-base xl:text-base font-medium '>{datum.text}</p>
                                    <div className='border-gray border-b-2 mt-2 md:mt-5'></div>
                                </div>


                                <div className='px-5 pt-2 md:pt-3 md:px-2 lg:px-5 '>

                                    <div className=' flex items-center justify-between gap-2 md:gap-2 lg:gap-2'>
                                        <div className='flex items-center gap-1 md:gap-1 lg:gap-2'>
                                            <FaLandmark className='text-orange h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />
                                            <p className=' text-xs md:text-lg lg:text-sm xl:text-base leading-5 font-light'>{datum.sqr}</p>
                                        </div>

                                        <div className='flex items-center gap-1  md:gap-1 lg:gap-2'>
                                            <LuBedDouble className='text-orange  h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4  xl:h-5 xl:w-5' />
                                            <p className=' text-xs md:text-lg lg:text-sm xl:text-base leading-5 font-light'>{datum.bed}</p>
                                        </div>
                                        <div className='flex items-center gap-1  md:gap-1 lg:gap-2'>
                                            <LuBath className='text-orange h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4  xl:h-5 xl:w-5' />
                                            <p className=' text-xs md:text-lg lg:text-sm xl:text-base leading-5 font-light'>{datum.baths}</p>
                                        </div>


                                    </div>
                                    <div className='border-gray border-b-2 mt-2 md:mt-5'></div>

                                </div>


                                <div className='pb-2 md:pb-5 px-5 flex flex-col gap-1 md:gap-2 '>
                                    <p className='text-slate-400 text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>Price</p>
                                    <p className=' text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>{datum.price}</p>
                                </div>

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

export default Projectcomp