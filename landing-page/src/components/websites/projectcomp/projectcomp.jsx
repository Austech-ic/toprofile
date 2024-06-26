"use client"
import React from 'react'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineArrowLeft, AiOutlineSearch } from 'react-icons/ai';
import { BsHouse } from "react-icons/bs";
import Link from 'next/link'
import { useRouter } from 'next/navigation'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Projectcomp = () => {
    const router = useRouter(); // No need to useState for router

    const details = [
        {
            id: 1,
            pic: win,
            label: "WINGATE ESTATE KUJE, ABUJA",
            text: "4 BEDROOMS TERRACE DUPLEX",
            sqr: "250 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 2,
            pic: wm,
            label: "WEMBLEY CITY JIKWOYI, ABUJA",
            text: "2 BEDROOMS TERRACE DUPLEX",
            sqr: "180 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 3,
            pic: eden,
            label: "EDENLAND, ABUJA",
            text: "2 BEDROOMS TERRACE DUPLEX WITH ATTACHED BQ",
            sqr: "180 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 4,
            pic: dem,
            label: "DOUBLE KING VILLA GUZAPE 2, ABUJA",
            text: "4 BEDROOMS SEMI-DETACHED PENTHOUSE",
            sqr: "350 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 5,
            pic: rck,
            label: "ROYALHILLS ESTATE ASOKORO EXTENSION, ABUJA",
            text: "2 BEDROOMS TERRACE DUPLEX WITH AN ATTACHED BQ",
            sqr: "300 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 6,
            pic: dp,
            label: "TREASURELAND ESTATE JIKWOYI, ABUJA",
            text: "2 BEDROOMS TERRACE DUPLEX WITH ATTACHED BQ",
            sqr: "180 SQM",
            price: "₦1,200,000.00",
        },
        {
            id: 7,
            pic: bd,
            label: "NEFT COURT, IDU, ABUJA",
            text: "4 BEDROOMS TERRACE DUPLEX WITH ATTACHED BQ",
            sqr: "250 SQM",
            price: "₦1,200,000.00",
        },

    ];

    const handleSearch = (values, { setSubmitting }) => {
        // Handle search logic here
        console.log('Searching for:', values.searchTerm);
        setSubmitting(false);
    };





    return (
        <div className='bg-gray'>
           <div className='flex items-center justify-center relative'>
           <div className='bg-white w-[80%] lg:w-[50%]  rounded-2xl p-10 md:p-20 lg:p-10 xl:p-16 flex flex-col gap-4 absolute top-[-4rem] md:top-[-13rem] lg:top-[-5rem] xl:top-[-8rem]'>

           <Formik
                        initialValues={{ searchTerm: '' }}
                        validationSchema={Yup.object({
                            searchTerm: Yup.string().required('Search term is required')
                        })}
                        onSubmit={handleSearch}
                    >
                        <Form className='flex flex-col gap-3 md:gap-4'>
                            <p className='text-sm md:text-2xl lg:text-base xl:text-lg '>Search:</p>
                            <div className='bg-gray flex items-center px-3 py-2 md:py-4 md:px-5 lg:px-3 lg:py-3 gap-2'>
                                <AiOutlineSearch className='text-orange h-4 w-4 md:h-8 md:w-8 lg:h-6 lg:w-6' />
                                <Field
                                    type="text"
                                    name="searchTerm"
                                    placeholder="Search For Property"
                                    className='text-xs md:text-xl lg:text-sm xl:text-base bg-transparent outline-none'
                                />
                            </div>
                            <ErrorMessage name="searchTerm" component="div" className="text-red-600 text-xs md:text-xl lg:text-sm" />
                            
                            <button type="submit" className='bg-orange text-white text-xs md:text-2xl lg:text-base xl:text-lg w-[40%] lg:w-[30%]  px-4 py-1 md:py-3 lg:py-2'>Search</button>
                        </Form>
                    </Formik>
           </div>
            
           </div>




            <div className='bg-gray-200 pt-[11rem] pb-10  px-5 md:px-10 md:pt-[14rem] lg:pt-[14rem] xl:pt-[15rem] lg:px-10 xl:px-12 '>
                <div className=' grid md:grid-cols-2 xl:grid-cols-3  gap-10 md:gap-8 lg:gap-5'>
                    {
                        details.map((datum) => (
                            <Link key={datum.id} href={`/singleproperty/${datum.id}`}>
                           <div key={datum.id} className=' flex flex-col gap-2 md:gap-4 px-4 py-4 md:py-6 lg:px-6 lg:py-8 shadow-2xl shadow-slate-400'>
                                
                                <div className='bg-white pb-3 md:pb-6 lg:pb-4 rounded-t-xl'>
                                 <div className='h-48 w-full'>
                                 <Image src={datum.pic} alt='pic-img' className='rounded-t-xl' style={{ width: '100%', height: '100%' }} />
                                 </div>
                             
                                 <div className=' px-5 pt-4 md:px-2 lg:px-5  '>
                                     <p className='text-xs md:text-lg lg:text-sm font-medium  h-[3vh] md:h-[6vh] lg:h-[5vh] xl:h-[6vh]'>{datum.label}</p>
                                     <div className='border-gray border-b-[1px] mt-2 md:mt-2 lg:mt-1'></div>
                                 </div>
 
                                 <div className='px-5 pt-2 md:px-2 lg:px-5 '>
 
                                 <div className=' h-[6vh] lg:h-[5vh] xl:h-[6vh]  '>
                                     <p className=' text-xs md:text-lg lg:text-sm leading-5 font-light'>{datum.text}</p>
                                    
                                 </div>
                                     <div className='border-gray border-b-[1px] mt-2 md:mt-5 lg:mt-2'></div>
 
                                 </div>
 
                                 <div className='px-5 pt-2 md:px-2 lg:px-5 '>
 
                                     <div className=' flex items-center justify-between gap-2 md:gap-2 lg:gap-2'>
                                         <div className='flex items-center gap-1 md:gap-1 lg:gap-2'>
                                             <FaLandmark className='text-orange h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />
                                             <p className=' text-xs md:text-lg lg:text-sm  leading-5 font-light'>{datum.sqr}</p>
                                         </div>
 
                                     </div>
                                     {/* <div className='border-gray border-b-[1px] mt-2 md:mt-5'></div> */}
 
                                 </div>
 
 
                                 {/* <div className='pb-2 md:pb-5 px-5 flex flex-col gap-1 md:gap-2 '>
                                     <p className='text-slate-400 text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>Price</p>
                                     <p className=' text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>{datum.price}</p>
                                 </div> */}
                                </div>
 
                             </div>
                            </Link>
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