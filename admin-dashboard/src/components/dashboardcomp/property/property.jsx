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
import CreateProperty from './CreateProperty/createproperty';
import { IoIosArrowRoundForward,IoIosArrowRoundBack} from "react-icons/io";

const Property = () => {
    const [showModal, setShowModal] = useState(false);

    const cat = [
        {
            id: 1,
            idUser: '1',
            pic:kam,
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            desc:"Dorem ipsum dolor sit amet,Dorem ipsum dolor sit amet,consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Dorem ipsum dolor sit amet, Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent ",
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
            pic:kam,
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            desc:"Dorem ipsum dolor sit amet,Dorem ipsum dolor sit amet,consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Dorem ipsum dolor sit amet, Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent ",
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
            pic:kam,
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            desc:"Dorem ipsum dolor sit amet,Dorem ipsum dolor sit amet,consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Dorem ipsum dolor sit amet, Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent ",
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
            pic:kam,
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            desc:"Dorem ipsum dolor sit amet,Dorem ipsum dolor sit amet,consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Dorem ipsum dolor sit amet, Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent ",
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
            pic:kam,
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            desc:"Dorem ipsum dolor sit amet,Dorem ipsum dolor sit amet,consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Dorem ipsum dolor sit amet, Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent ",
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
            pic:kam,
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            desc:"Dorem ipsum dolor sit amet,Dorem ipsum dolor sit amet,consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Dorem ipsum dolor sit amet, Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent ",
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
            pic:kam,
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            desc:"Dorem ipsum dolor sit amet,Dorem ipsum dolor sit amet,consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Dorem ipsum dolor sit amet, Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent ",
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
            pic:kam,
            title:'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.',
            desc:"Dorem ipsum dolor sit amet,Dorem ipsum dolor sit amet,consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Dorem ipsum dolor sit amet, Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent ",
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

    function truncateDescription(description, maxLength) {
        // Check if the description is defined and has a valid length
        if (description && description.length > maxLength) {
            // Truncate the description and add an ellipsis
            return `${description.substring(0, maxLength)}...`;
        } else {
            // If the description is already shorter or undefined, return it as is
            return description;
        }
    }
    function truncateTitle(title, maxLength) {
        // Check if the description is defined and has a valid length
        if (title && title.length > maxLength) {
            // Truncate the description and add an ellipsis
            return `${title.substring(0, maxLength)}...`;
        } else {
            // If the description is already shorter or undefined, return it as is
            return title;
        }
    }
    
    
    
      


    const handleCreatePropertyClick = () => {
        setShowModal(prevState => !prevState); // Toggle modal visibility
    };
    const handleCloseModal = () => {
        setShowModal(false); // Close modal
    };


  return (
    <div className='bg-white '>
      <div className='flex justify-end items-center px-10 lg:py-10 xl:px-16 xl:py-10 '>
      <button className='bg-lite px-4 py-2 text-white flex justify-center items-center gap-2' onClick={handleCreatePropertyClick}>
       <MdAdd color='white' className='text-white h-4 w-4 xl:h-6 xl:w-6' />
        Create Property</button>
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
                                <th className='w-[15%]'>
                                    <p className='text-center text-sm font-medium'>Image</p>
                                </th>
                               
                                <th className='w-[30%]'>
                                    <p className='text-center text-sm font-medium'>Title</p>
                                </th>
                                <th className='w-[30%]'>
                                    <p className='text-center text-sm font-medium'>Description</p>
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
                                    <td className='w-[15%] '>
                                    <div className='flex items-center justify-center gap-2'>
                                            <Image src={datum.pic} alt='pic-img' className='w-[20%] xl:w-[15%]' />
                                           
                                        </div>
                                    </td>
                                    <td className=' w-[30%]'>
                                       <div className='text-center '>
                                       <p className='text-xs'>{truncateDescription(datum.title,20)}</p>
                                       </div>
                                    </td>
                                    <td className='w-[30%] '>
                                    <div className='text-center '>
                                       <p className='text-xs'>{truncateDescription(datum.desc, 100)}</p>
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
    <CreateProperty handleCloseModal={handleCloseModal} /> {/* This assumes your modal content is in the Notifications component */}
</div>
                </div>
            )}
        </div>
  )
}

export default Property