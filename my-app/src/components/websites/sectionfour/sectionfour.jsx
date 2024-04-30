import Image from 'next/image'
import React from 'react'
import multi from '../../../../public/img/multi.png'
import { LuBedDouble, LuBath } from "react-icons/lu";
import { FaLandmark } from 'react-icons/fa';




const Sectionfour = () => {
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
        }
    ]
    return (
        <div className='bg-gray-100 pt-16 md:pt-28 xl:pt-32'>
            <div className='flex justify-center items-center gap-2'>
                <div className='border border-orange border-b-4 md:border-b-8 w-[10%] md:w-[6%] rounded-3xl'> </div>
                <div className='border border-fad border-b-4 md:border-b-8 w-[6%] md:w-[3%] rounded-3xl'> </div>
                <div>
                    <p className='text-center text-xl md:text-4xl lg:text-2xl xl:text-3xl'>Featured Properties</p>

                </div>
            </div>

            <div className='flex items-center justify-center pt-2 pb-5 md:pt-4 md:pb-14 lg:pt-5 lg:pb-10'>
                <p className='text-center w-[85%] md:w-[90%] lg:w-[50%] xl:w-[50%] text-xs md:text-2xl lg:text-lg xl:text-xl font-light'>A plateform to buy, and rent properties without any agent or commisions.</p>
            </div>


            <div className='bg-gray-200  px-10 py-10 md:py-16 lg:px-20 xl:px-30'>
                <div className=' grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {
                        details.map((datum) => (
                            <div key={datum.id} className='shadow-2xl flex flex-col gap-2 md:gap-4'>
                                <Image src={datum.pic} alt='pic-img' className='rounded-xl' />
                                <p className=' px-5 md:px-2 lg:px-5 text-xs md:text-xl lg:text-sm xl:text-base font-medium '>{datum.text}</p>

                                <div className='px-5 pt-2 md:pt-3 md:px-2 lg:px-5  flex items-center justify-between gap-2 md:gap-2 lg:gap-2'>
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


                                <div className='pb-2 md:pb-5 px-5 flex flex-col gap-1 md:gap-2 '>
                                    <p className='text-slate-400 text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>Price</p>
                                    <p className=' text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>{datum.price}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className='pt-4 md:pt-12 flex justify-center items-center'>
                    <button className='flex justify-center items-center gap-4 border bg-orange text-white text-xs md:text-xl  lg:text-base xl:text-lg px-8 py-2 md:py-3' >
                        VIEW MORE

                    </button>
                </div>
            </div>




        </div>
    )
}

export default Sectionfour