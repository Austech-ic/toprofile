import Image from 'next/image';
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import Man from '../../../../public/img/ma.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Testimonial = () => {


    const details = [
        {
            id: 1,
            text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            user: "Mr Bambgboye",
            frame: Man,
        },
        {
            id: 2,
            text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            user: "Mr Bambgboye",
            frame: Man,
        },
        {
            id: 3,
            text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            user: "Mr Bambgboye",
            frame: Man,
        },
    ]

    const settings = {
        dots: true,
        dotsClass: "slick-dots custom-dots", // Adding custom class for the dots
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards on desktop by default
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3, // Show 2 cards on iPad
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 cards on iPad
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 card on mobile
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1, // Show 1 card on mobile
                    slidesToScroll: 1,
                },
            },
        ],
        customPaging: function (i) {
            // Custom function to return custom dot
            return (
                <div
                    style={{
                        width: "20px", // Adjust dot width
                        height: "5px", // Adjust dot height
                        backgroundColor: "#EB6C1F", // Change dot color
                        borderRadius: "20%", // Make the dots circular
                        margin: "0 10px", // Adjust space between dots
                       
                    }}
                />
            );
        },
    };
    
    return (
        <div className='pt-10 md:pt-20 xl:pt-16 bg-gray '>
            <div className='flex justify-center items-center gap-2'>
                <div className='border border-orange border-b-4 md:border-b-8 w-[10%] md:w-[6%] rounded-3xl'> </div>
                <div className='border border-fad border-b-4 md:border-b-8 w-[6%] md:w-[3%] rounded-3xl'> </div>
                <div>
                    <p className='text-center text-xl md:text-4xl lg:text-2xl xl:text-3xl'>TESTIMONIAL</p>

                </div>
            </div>
            <div className='flex items-center justify-center pt-2 pb-5 md:pt-4 md:pb-14 lg:pt-5 lg:pb-10'>
                <p className='text-center w-[85%] md:w-[90%] lg:w-[70%] xl:w-[50%] text-xs md:text-2xl lg:text-lg xl:text-xl font-light'>What Our Customers Are saying</p>


            </div>

            <div className='px-10 pt-5 pb-10 md:px-20 md:py-0 md:pb-16  '>
                <Slider {...settings} >

                    {details.map((datum) => (
                        <div className='pb-5 md:pb-10 lg:px-6 lg:py-8'>
                            <div className='relative'>
                                <div className='bg-white rounded-2xl  p-5 md:p-10 flex flex-col gap-4'>
                                    <div className='flex justify-center items-center'>
                                        <FaQuoteLeft className='h-4 w-4 md:h-8 md:w-8 text-lite' />
                                    </div>
                                    <p className='text-xs font-light leading-5 md:text-2xl md:leading-9 lg:text-sm lg:leading-6 xl:text-base xl:leading-7'>{datum.text}</p>

                                </div>
                                <div className='absolute inset-x-0 bottom-[-25px] md:bottom-[-40px] lg:bottom-[-32px] xl:bottom-[-20px] flex justify-center'>
                                    <div className='w-[15%]'>
                                        <Image src={datum.frame} alt='pic-img' className='rounded-full' />
                                    </div>

                                </div>


                            </div>
                            <div className='pt-8 md:pt-16 lg:pt-10'>
                                <p className='text-xs leading-5 md:text-2xl md:leading-9 lg:text-sm lg:leading-6 xl:text-base xl:leading-7 text-center font-medium'>{datum.user}</p>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>


        </div>
    )
}

export default Testimonial