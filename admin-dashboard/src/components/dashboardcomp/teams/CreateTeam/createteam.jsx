"use client"
import React, { useState } from 'react';
import { MdClear } from "react-icons/md";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import Link from 'next/link';

const CreateTeam = ({ handleCloseModal }) => {
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
    <div className=''>
      <div className='flex items-center justify-between px-20 pt-10 pb-5 '>
        <p className='text-xl'>Create Team Member</p>
        <MdOutlineCancelPresentation className='h-6 w-6' onClick={handleCloseModal} />
      </div>
      <div className='px-20 '>
        <div className='border-b border-slate-300 '></div>
      </div>
      <div className='px-20 py-10  '>


        <div>

          <div className=''>
            <Formik
              initialValues={{
                firstname: '',
                lastname: '',
                position: '',
                facebook: '',
                twitter: '',
                instagram: '',
                mail: '',
                file: null,
              }}
              validationSchema={Yup.object({
                // Validation schema
                firstname: Yup.string().required('Field cannot be empty'),
                lastname: Yup.string().required('Field cannot be empty'),
                position: Yup.string().required('Field cannot be empty'),
                file: Yup.mixed().required('File is required'),
                facebook: Yup.string().required('Field cannot be empty'),
                twitter: Yup.string().required('Field cannot be empty'),
                instagram: Yup.string().required('Field cannot be empty'),
                mail: Yup.string().required('Field cannot be empty'),
              })}
              onSubmit={handleSubmit}
            >
              <Form className='flex flex-col gap-4 '>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col gap-2 w-[40%] xl:w-[45%]'>
                    <label htmlFor="firstname" className='text-sm '>First Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Dr Femi Osheyin"
                      className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm  focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                    />
                    <ErrorMessage name="firstname" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                  </div>
                  <div className='flex flex-col gap-2 w-[40%] xl:w-[45%]'>
                    <label htmlFor="lastname" className='text-sm  '>Last Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Dr Femi Osheyin"
                      className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm   focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                    />
                    <ErrorMessage name="lastname" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                  </div>
                </div>


                <div className='flex items-center justify-between'>
                  <div className='flex flex-col gap-2 w-[40%] xl:w-[45%] text-sm '>
                    <label htmlFor="file" className='text-sm '>Upload Image</label>
                    <Field
                      type="file"
                      name="file"
                      className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400 '
                    />
                    <ErrorMessage name="file" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                  </div>
                  <div className='flex flex-col gap-2 w-[40%] xl:w-[45%]'>
                    <label htmlFor="position" className='text-sm  '>Position</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Architect"
                      className='outline-none border text-black border-slate-200 bg-transparent rounded px-4 py-2 text-sm   focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                    />
                    <ErrorMessage name="gender" component="div" className="text-red text-xs md:text-xl lg:text-sm" />
                  </div>
                </div>

                <div className='flex flex-col gap-4 pt-10'>
                  <p className='text-xl font-medium'>Socials</p>

                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-2  w-[40%] xl:w-[45%]'>
                      <label htmlFor="facebook" className='text-sm '>Facebook</label>
                      <Field
                        type="facebook"
                        name="facebook"
                        placeholder="Post link"
                        className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm  focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                      />
                      <ErrorMessage name="facebook" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                    </div>

                    <div className='flex flex-col gap-2  w-[40%] xl:w-[45%]'>
                      <label htmlFor="twitter" className='text-sm  '>Twitter</label>
                      <Field
                        type="twitter"
                        name="twitter"
                        placeholder="Post link"
                        className='outline-none border text-black border-slate-200 bg-transparent rounded px-4 py-2 text-sm  focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                      />
                      <ErrorMessage name="twitter" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-2  w-[40%] xl:w-[45%]'>
                      <label htmlFor="instagram" className='text-sm '>Instagram</label>
                      <Field
                        type="instagram"
                        name="instagram"
                        placeholder="Post link"
                        className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm  focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                      />
                      <ErrorMessage name="instagram" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                    </div>
                    <div className='flex flex-col gap-2  w-[40%] xl:w-[45%]'>
                      <label htmlFor="mail" className='text-sm '>Mail</label>
                      <Field
                        type="mail"
                        name="mail"
                        placeholder="Post link"
                        className='outline-none border text-black border-slate-200  bg-transparent rounded px-4 py-2 text-sm  focus-visible:bg-white focus-visible:text-blu focus-visible:border-slate-400'
                      />
                      <ErrorMessage name="mail" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                    </div>
                  </div>
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

export default CreateTeam