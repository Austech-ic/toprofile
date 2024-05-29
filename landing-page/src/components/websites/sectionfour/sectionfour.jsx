import Image from 'next/image'
import React from 'react'
import multi from '../../../../public/img/multi.png'
import dem from '../../../../public/img/dem.jpg'
import win from '../../../../public/img/win.jpeg'
import wm from '../../../../public/img/wm.jpeg'
import rck from '../../../../public/img/rck.jpeg'
import bd from '../../../../public/img/bd.jpg'
import eden from '../../../../public/img/eden.jpg'
import dp from '../../../../public/img/dp.jpg'
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
            pic: win,
            label: "WINGATE ESTATE KUJE ABUJA",
            text: "4 BEDROOMS TERRACE DUPLEX",
            sqr: "250 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 2,
            pic: wm,
            label: "WEMBLEY CITY JIKWOYI ABUJA",
            text: "2 BEDROOMS TERRACE DUPLEX",
            sqr: "180 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 3,
            pic: eden,
            label: "EDENLAND KURUDU ABUJA",
            text: "2 BEDROOMS TERRACE DUPLEX WITH ATTACHED BQ",
            sqr: "180 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 4,
            pic: dem,
            label: "DOUBLE KING VILLA GUZAPE 2 ABUJA",
            text: "4 BEDROOMS SEMI-DETACHED PENTHOUSE",
            sqr: "350 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 5,
            pic: dem,
            label: "DOUBLE KING LEISURE VIEW ESTATE ABUJA",
            text: "4 BEDROOM TERRACE DUPLEX",
            sqr: "250 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 6,
            pic: rck,
            label: "ROYALHILLS ESTATE ASOKORO EXTENSION ABUJA",
            text: "2 BEDROOMS TERRACE DUPLEX WITH AN ATTACHED BQ",
            sqr: "300 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 7,
            pic: dp,
            label: "TREASURELAND ESTATE JIKWOYI ABUJA",
            text: "2 BEDROOMS TERRACE DUPLEX WITH ATTACHED BQ",
            sqr: "180 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 8,
            pic: bd,
            label: "NEFT COURT, IDU ABUJA",
            text: "4 BEDROOMS TERRACE DUPLEX WITH ATTACHED BQ",
            sqr: "250 SQM",
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
                <p className='text-center w-[85%] md:w-[90%] lg:w-[50%] xl:w-[50%] text-xs md:text-2xl lg:text-lg xl:text-xl font-light'>A platform to acquire your desired properties. We offer the best-selling locations.</p>
            </div>


            <div className=' px-10 pt-5 pb-10 md:pt-5 md:pb-10 lg:pb-10 lg:px-20 xl:px-30 bg-transparent'>
                <Slider {...settings} >
                    {
                        details.map((datum) => (
                            <div key={datum.id} className='flex flex-col gap-2 md:gap-4 px-2 py-4 md:py-6 lg:px-2 lg:py-8 xl:px-6 hover:shadow-2xl hover:shadow-slate-400'>

                                <div className='bg-white pb-3 md:pb-6 lg:pb-4 rounded-t-xl'>
                                    <div className='h-48 w-full'>
                                        <Image src={datum.pic} alt='pic-img' className='rounded-xl' style={{ width: '100%', height: '100%' }} />
                                    </div>

                                    <div className=' px-5 pt-4 md:px-2 lg:px-5  '>
                                        <p className='text-xs md:text-lg lg:text-sm font-medium  h-[5vh] md:h-[6vh] lg:h-[8vh] xl:h-[6vh]'>{datum.label}</p>
                                        <div className='border-gray border-b-[1px] mt-2 md:mt-2 lg:mt-1'></div>
                                    </div>

                                    <div className='px-5 pt-2 md:px-2 lg:px-5 '>

                                        <div className=' h-[6vh] lg:h-[6vh] xl:h-[5vh]  '>
                                            <p className=' text-xs md:text-lg lg:text-sm leading-5 font-light'>{datum.text}</p>

                                        </div>
                                        <div className='border-gray border-b-[1px] mt-2 md:mt-5 lg:mt-2'></div>

                                    </div>

                                    <div className='px-5 py-2 md:py-4 md:px-2 lg:px-5 '>

                                        <div className=' flex items-center justify-between gap-2 md:gap-2 lg:gap-2'>
                                            <div className='flex items-center gap-1 md:gap-1 lg:gap-2'>
                                                <FaLandmark className='text-orange h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />
                                                <p className=' text-xs md:text-lg lg:text-sm  leading-5 font-light'>{datum.sqr}</p>
                                            </div>

                                        </div>
                                        {/* <div className='border-gray border-b-[1px] mt-2 md:mt-5'></div> */}

                                    </div>
                                    <div className='px-5 md:px-2 lg:px-5 '>
                                    <div className='border-gray border-b-[1px]  '></div>
                                    <div className=' py-3 md:py-6 lg:py-4 flex items-center '>
                                    <Link href={`/properties/${datum.label.replace(/ /g, '-').toLowerCase()}`}>
                                            <button className='flex justify-center items-center gap-4 border bg-orange text-white text-xs md:text-lg  lg:text-sm px-6 py-2 md:py-2 lg:py-2' >
                                                VIEW MORE

                                            </button>
                                        </Link>
                                    </div>
                                    </div>
                                   
                                    
                               


                                    {/* <div className='pb-2 md:pb-5 px-5 flex flex-col gap-1 md:gap-2 '>
                                    <p className='text-slate-400 text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>Price</p>
                                    <p className=' text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>{datum.price}</p>
                                </div> */}
                                </div>

                            </div>
                        ))
                    }
                </Slider>

            </div>






        </div>
    )
}

export default Sectionfour;