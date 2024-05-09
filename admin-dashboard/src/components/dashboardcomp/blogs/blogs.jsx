"use client"
import React, { useState } from 'react';
import { MdAdd } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import kam from '../../../../public/img/man.png'
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegDotCircle } from 'react-icons/fa';
import { GoDotFill } from "react-icons/go";
import { IoMdEye } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Createblogs from './CreateBlogs/createblogs';
import { IoIosArrowRoundForward,IoIosArrowRoundBack} from "react-icons/io";

const Blogs = () => {
    const [showModal, setShowModal] = useState(false);

    const cat = [
        {
            id: 1,
            idUser: '1',
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            date:"20 May 2024",
            comment:"20",
            view:"50",
            action: <button className='flex items-center justify-center bg-red h-5 w-5 rounded-lg'>
            <MdDeleteOutline  className=' text-black h-4 w-4 ' />
        </button>,
        actiontwo: <button className='flex items-center justify-center h-5 w-5 rounded-lg'>
        <FiEdit className='  text-black h-4 w-4 ' />
    </button>,

        },
        {
            id: 2,
            idUser: '2',
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            date:"20 May 2024",
            comment:"20",
            view:"50",
            action: <button className='flex items-center justify-center bg-red h-5 w-5 rounded-lg'>
            <MdDeleteOutline  className=' text-black h-4 w-4 ' />
        </button>,
        actiontwo: <button className='flex items-center justify-center h-5 w-5 rounded-lg'>
        <FiEdit className='  text-black h-4 w-4 ' />
    </button>,

        },
        {
            id: 3,
            idUser: '3',
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            date:"20 May 2024",
            comment:"20",
            view:"50",
            action: <button className='flex items-center justify-center bg-red h-5 w-5 rounded-lg'>
            <MdDeleteOutline  className=' text-black h-4 w-4 ' />
        </button>,
        actiontwo: <button className='flex items-center justify-center h-5 w-5 rounded-lg'>
        <FiEdit className='  text-black h-4 w-4 ' />
    </button>,

        },
        {
            id: 4,
            idUser: '4',
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            date:"20 May 2024",
            comment:"20",
            view:"50",
            action: <button className='flex items-center justify-center bg-red h-5 w-5 rounded-lg'>
            <MdDeleteOutline  className=' text-black h-4 w-4 ' />
        </button>,
        actiontwo: <button className='flex items-center justify-center h-5 w-5 rounded-lg'>
        <FiEdit className='  text-black h-4 w-4 ' />
    </button>,

        },
        {
            id: 5,
            idUser: '5',
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            date:"20 May 2024",
            comment:"20",
            view:"50",
            action: <button className='flex items-center justify-center bg-red h-5 w-5 rounded-lg'>
            <MdDeleteOutline  className=' text-black h-4 w-4 ' />
        </button>,
        actiontwo: <button className='flex items-center justify-center h-5 w-5 rounded-lg'>
        <FiEdit className='  text-black h-4 w-4 ' />
    </button>,

        },
        {
            id:6,
            idUser: '6',
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            date:"20 May 2024",
            comment:"20",
            view:"50",
            action: <button className='flex items-center justify-center bg-red h-5 w-5 rounded-lg'>
            <MdDeleteOutline  className=' text-black h-4 w-4 ' />
        </button>,
        actiontwo: <button className='flex items-center justify-center h-5 w-5 rounded-lg'>
        <FiEdit className='  text-black h-4 w-4 ' />
    </button>,

        },
        {
            id: 7,
            idUser: '7',
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            date:"20 May 2024",
            comment:"20",
            view:"50",
            action: <button className='flex items-center justify-center bg-red h-5 w-5 rounded-lg'>
            <MdDeleteOutline  className=' text-black h-4 w-4 ' />
        </button>,
        actiontwo: <button className='flex items-center justify-center h-5 w-5 rounded-lg'>
        <FiEdit className='  text-black h-4 w-4 ' />
    </button>,

        },
        {
            id: 8,
            idUser: '8',
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            date:"20 May 2024",
            comment:"20",
            view:"50",
            action: <button className='flex items-center justify-center bg-red h-5 w-5 rounded-lg'>
            <MdDeleteOutline  className=' text-black h-4 w-4 ' />
        </button>,
        actiontwo: <button className='flex items-center justify-center h-5 w-5 rounded-lg'>
        <FiEdit className='  text-black h-4 w-4 ' />
    </button>,

        }

    ]


    const handleCreateblogsClick = () => {
        setShowModal(prevState => !prevState); // Toggle modal visibility
    };
    const handleCloseModal = () => {
        setShowModal(false); // Close modal
    };


  return (
    <div className='bg-white '>
      <div className='flex justify-end items-center px-10 lg:py-10 xl:px-16 xl:py-10 '>
      <button className='bg-lite px-4 py-2 text-white flex justify-center items-center gap-2' onClick={handleCreateblogsClick}>
       <MdAdd color='white' className='text-white h-4 w-4 xl:h-6 xl:w-6' />
        Create Post</button>
      </div>
     
    <div className=' pt-5 px-10 xl:px-16  '>
    <div className='cursor-pointer border border-slate-300'></div>
    </div>

    <div className='px-10 xl:px-16 '>
      <table className='table-auto w-full text-sm xl:text-base '>
                        <thead className=' h-[7vh]'>
                            <tr className=''>
                                <th className='w-[10%]'>
                                    <div className='flex items-center gap-2 justify-center'>
                                        {/* <input type='checkbox' /> */}
                                        <p className='text-center text-sm  font-medium'>S/N</p>
                                    </div>
                                </th>
                                <th className='w-[45%]'>
                                    <p className='text-center text-sm font-medium'>Title</p>
                                </th>
                                <th className='w-[15%]'>
                                    <p className='text-center text-sm font-medium'>Date</p>
                                </th>
                                <th className='w-[15%]'>
                                    <p className='text-center text-sm font-medium '>Comment</p>
                                </th>
                                <th className='w-[15%]'>
                                    <p className='text-center text-sm font-medium'>Views</p>
                                </th>
                               
            
                                <th className='w-[15%]'>
                                    <p className='text-center text-sm font-medium'>Actions</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cat.map((datum) => (

                                <tr key={datum.id} className='h-[6vh] bg-white border-b border-slate-300 text-black '>

                                    <td className='w-[10%] '>
                                        <div className='flex items-center gap-2 justify-center'>
                                            {/* <input type='checkbox' /> */}
                                            <p className='text-xs  text-black font-semibold' >{datum.idUser}</p>
                                        </div>
                                    </td>
                                    <td className='w-[45%] '>
                                    <div className='text-center '>
                                       <p className='text-xs'>{datum.title}</p>
                                       </div>
                                    </td>
                                    <td className=' w-[15%]'>
                                       <div className='text-center '>
                                       <p className='text-xs'>{datum.date}</p>
                                       </div>
                                    </td>
                                    <td className='text-center w-[15%]'>
                                        <p className='text-xs '>{datum.comment}</p>
                                    </td>
                                    <td className='text-center w-[15%] '>
                                       <div className='flex justify-center items-center gap-2'>
                                       < IoMdEye />
                                        <p className='text-xs '>{datum.view}</p>
                                       </div>
                                    </td>
                                   
                                  
                                    <td className='text-center w-[15%]'>
                                       <div className='flex justify-center items-center gap-0'>
                                       <p className='text-xs '>{datum.actiontwo}</p>
                                       <p className='text-xs '>{datum.action}</p>
                                       </div>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
    </div>


    <div className='flex justify-between items-center px-5 pt-[300px] pb-10 '>

        <div>
            <p className='text-sm text-slate-500'>Showing 1 to 10 of 20 entries</p>
        </div>
            <div className='flex items-center justify-center text-slate-500 text-sm'>
          
              <div className='flex items-center gap-2 border border-slate-300 p-2'>
              <IoIosArrowRoundBack className='h-6 w-6' />
              <p className='text-sm cursor-pointer'>Previous</p>
              </div>
          <div className='border border-slate-300 px-4 py-2 hover:bg-lite hover:text-white '>
          <p className='text-sm '>1</p>
          </div>
          <div className='border border-slate-300 px-4 py-2 hover:bg-lite hover:text-white  '>
          <p className='text-sm '>2</p>
          </div>
          <div className='border border-slate-300 px-4 py-2 hover:bg-lite hover:text-white  '>
          <p className='text-sm '>3</p>
          </div>
           
            <div className='flex items-center gap-2 border border-slate-300 p-2'>
            <p className='text-sm cursor-pointer'>Next</p>
              <IoIosArrowRoundForward className='h-6 w-6' />
             
              </div>
            
          </div>
            </div>

    {showModal && (
                <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75" >
                    <div className="relative w-[70%] top-6 left-[8rem] xl:left-[9rem] xl:top-[1.5rem] h-[80vh] bg-white  shadow-2xl rounded-lg overflow-y-auto">
    {/* Your modal content goes here */}
    <Createblogs handleCloseModal={handleCloseModal} /> {/* This assumes your modal content is in the Notifications component */}
</div>
                </div>
            )}
        </div>
  )
}

export default Blogs