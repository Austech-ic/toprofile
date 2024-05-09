"use client"
import React, { useState } from 'react';
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateProperty = ({ handleCloseModal }) => {
    const [showForm, setShowForm] = useState(true); // State to control form visibility


    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        // Handle form submission here
        console.log(values);
        // Reset the form
        resetForm();
        // Hide the form and show the Newcounselor component
        setShowForm(false);
    };



  return (
    <div>
    <div className='flex items-center justify-between px-20 pt-10 pb-5 '>
    <p className='text-xl'>Create Property</p>
        <MdOutlineCancelPresentation className='h-6 w-6' onClick={handleCloseModal} />
    </div>

    <div className='px-20 py-10  '>
        <div>

            <div className=''>
                <Formik
                    initialValues={{
                        title:"",
                        squaremeter:'',
                        amount:'',
                        location:'',
                        text: '',
                    }}
                    validationSchema={Yup.object({
                        // Validation schema
                        title: Yup.string().required('Field cannot be empty'),
                        squaremeter: Yup.string().required('Field cannot be empty'),
                        amount: Yup.string().required('Field cannot be empty'),
                        location: Yup.string().required('Field cannot be empty'),
                        text: Yup.string().required('Field cannot be empty'),
                        
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form className='flex flex-col gap-4 '>
                    <div className='flex flex-col gap-2 '>
                                <label htmlFor="title" className='text-sm '>Title</label>
                                <Field
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    className='outline-none border text-black border-slate-200 bg-transparent rounded px-4 py-2 text-sm  focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                                />
                                <ErrorMessage name="title" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                            </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col gap-2 w-[40%] xl:w-[45%]'>
                                <label htmlFor="squaremeter" className='text-sm '>Square kilometer</label>
                                <Field
                                    type="text"
                                    name="squaremeter"
                                    placeholder="8000 sqm"
                                    className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm  focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                                />
                                <ErrorMessage name="squaremeter" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                            </div>
                            <div className='flex flex-col gap-2 w-[40%] xl:w-[45%]'>
                                <label htmlFor="amount" className='text-sm '>Amount</label>
                                <Field
                                    type="text"
                                    name="amount"
                                    placeholder="Amount"
                                    className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm  focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                                />
                                <ErrorMessage name="amount" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 w-[40%] xl:w-[45%]'>
                                <label htmlFor="location" className='text-sm '>Location</label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Location"
                                    className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm  focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                                />
                                <ErrorMessage name="location" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                            </div>


                        <div className='flex flex-col gap-2'>
                            <label htmlFor="text" className='xl:text-sm'>Body Text</label>
                            <Field
                                as="textarea"
                                rows={10}
                                name="text"
                                placeholder="Write a message"
                                className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                            />
                            <ErrorMessage name="text" component="div" className="text-red-500 text-sm" />
                        </div>






                        <div className='flex items-center justify-center pt-16' >
                            <button
                                type="submit"
                                className='bg-lite text-sm  text-white px-4 py-2  w-full lg:w-[50%] xl:w-[20%] rounded xl:text-base  hover:bg-blue hover:text-white'
                            >
                               Create
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>

    </div>
</div>
  )
}

export default CreateProperty