import Image from 'next/image'
import React from 'react'
import multi from '../../../../public/img/multi.png'
import { LuBedDouble, LuBath } from "react-icons/lu";
import { FaLandmark } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';





const Sectionfour = () => {
    const details = [
        {
            id: 1,
            pic: multi,
            label: " Ikoyi, lagos, Nigeria.",
            text: "3 Bedroom Fully Detached Bungalow + a Detached BQ",
            sqr: "8000sq+",
            price: "₦1,200,000.00",
        },
        {
            id: 2,
            pic: multi,
            label: " Ikoyi, lagos, Nigeria.",
            text: "3 Bedroom Fully Detached Bungalow + a Detached BQ",
            sqr: "8000sq+",
            price: "₦1,200,000.00",
        },
        {
            id: 3,
            pic: multi,
            label: " Ikoyi, lagos, Nigeria.",
            text: "3 Bedroom Fully Detached Bungalow + a Detached BQ",
            sqr: "8000sq+",
            price: "₦1,200,000.00",
        },
        {
            id: 4,
            pic: multi,
            label: " Ikoyi, lagos, Nigeria.",
            text: "3 Bedroom Fully Detached Bungalow + a Detached BQ",
            sqr: "8000sq+",
            price: "₦1,200,000.00",
        },
        {
            id: 5,
            pic: multi,
            label: " Ikoyi, lagos, Nigeria.",
            text: "3 Bedroom Fully Detached Bungalow + a Detached BQ",
            sqr: "8000sq+",
            price: "₦1,200,000.00",
        },
        {
            id: 6,
            pic: multi,
            label: " Ikoyi, lagos, Nigeria.",
            text: "3 Bedroom Fully Detached Bungalow + a Detached BQ",
            sqr: "8000sq+",
            price: "₦1,200,000.00",
        },

    ];

    


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards on desktop by default
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 cards on iPad
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Show 1 card on mobile
                    slidesToScroll: 1,
                },
            },
        ],
    };




    return (
        <div className='bg-gray pt-10 md:pt-16 xl:pt-28'>
            <div className='flex justify-center items-center gap-2'>
                <div className='border border-orange border-b-4 md:border-b-8 w-[10%] md:w-[6%] rounded-3xl'> </div>
                <div className='border border-fad border-b-4 md:border-b-8 w-[6%] md:w-[3%] rounded-3xl'> </div>
                <div>
                    <p className='text-center text-xl md:text-4xl lg:text-2xl xl:text-3xl'>Featured Properties</p>

                </div>
            </div>

            <div className='flex items-center justify-center pt-2 pb-5 md:pt-4 md:pb-14 lg:pt-5 lg:pb-10'>
                <p className='text-center w-[85%] md:w-[90%] lg:w-[50%] xl:w-[50%] text-xs md:text-2xl lg:text-lg xl:text-xl font-light'>A platform to buy, and rent properties without any agent or commisions.</p>
            </div>


            <div className=' px-10 py-5 md:py-5 lg:py-0 lg:px-20 xl:px-30 bg-transparent'>
            <Slider {...settings} >
                    {
                        details.map((datum) => (
                            <div key={datum.id} className='flex flex-col gap-2 md:gap-4 px-4 py-4 md:py-6 lg:px-6 lg:py-8 '>
                                
                               <div className='bg-white '>
                               <Image src={datum.pic} alt='pic-img' className='rounded-xl' />
                                <div className=' px-5 pt-4 md:px-2 lg:px-5'>
                                    <p className=' text-xs md:text-xl lg:text-base xl:text-base font-medium '>{datum.label}</p>
                                    <div className='border-gray border-b-[1px] mt-2 md:mt-5'></div>
                                </div>

                                <div className='px-5 pt-2 md:px-2 lg:px-5 '>

                                <div className=' '>
                                    <p className=' text-xs md:text-lg lg:text-sm xl:text-base leading-5 font-light'>{datum.text}</p>
                                   
                                </div>
                                    <div className='border-gray border-b-[1px] mt-2 md:mt-5'></div>

                                </div>

                                <div className='px-5 pt-2 md:px-2 lg:px-5 '>

                                    <div className=' flex items-center justify-between gap-2 md:gap-2 lg:gap-2'>
                                        <div className='flex items-center gap-1 md:gap-1 lg:gap-2'>
                                            <FaLandmark className='text-orange h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />
                                            <p className=' text-xs md:text-lg lg:text-sm xl:text-base leading-5 font-light'>{datum.sqr}</p>
                                        </div>

                                    </div>
                                    <div className='border-gray border-b-[1px] mt-2 md:mt-5'></div>

                                </div>


                                <div className='pb-2 md:pb-5 px-5 flex flex-col gap-1 md:gap-2 '>
                                    <p className='text-slate-400 text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>Price</p>
                                    <p className=' text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>{datum.price}</p>
                                </div>
                               </div>

                            </div>
                        ))
                    }
                </Slider>
                
            </div>

            <div className='py-6 md:py-12 flex justify-center items-center'>
                    <Link href={`/projects`}>
                    <button className='flex justify-center items-center gap-4 border bg-orange text-white text-xs md:text-xl  lg:text-base xl:text-lg px-8 py-2 md:py-3' >
                        VIEW MORE

                    </button>
                    </Link>
                </div>




        </div>
    )
}

export default Sectionfour;