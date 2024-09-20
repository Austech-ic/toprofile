import React, { useState } from "react";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Function to convert files to FormData
const createFormData = (values) => {
  const formData = new FormData();
  formData.append("title", values.title);
  formData.append("body", values.body);
  formData.append("address", values.address);
  formData.append("land_space", values.land_space);
  formData.append("amount", values.amount);

  if (values.files) {
    Array.from(values.files).forEach((file, index) => {
      formData.append(`propertyImages[${index}]`, file);
    });
  }

  return formData;
};

const CreateProperty = ({
  handleCloseModal,
  propertyId = null,
  existingPropertyData = {},
  fetchProperties,
}) => {
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found, please log in");
      return;
    }

    try {
      // Create the form data payload
      const formData = createFormData(values);

      // Make the POST request using form data
      const response = await fetch(
        "http://backend.toprofile.com/api/v1/property/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            // No need for 'Content-Type' header when using FormData
          },
          body: formData,
        }
      );

      if (response.ok) {
        fetchProperties();
        resetForm();
        setShowForm(false);
        handleCloseModal();
        console.log("Property submitted successfully!");
      } else {
        const errorResponse = await response.json();
        console.error("Failed to submit property:", errorResponse);
      }
    } catch (error) {
      console.error("Error submitting property:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-end px-20 pt-10 pb-5">
        <MdOutlineCancelPresentation
          className="h-6 w-6"
          onClick={handleCloseModal}
        />
      </div>

      <div className="px-20 py-10">
        {showForm && (
          <Formik
            initialValues={{
              title: existingPropertyData.title || "",
              body: existingPropertyData.body || "",
              address: existingPropertyData.address || "",
              land_space: existingPropertyData.land_space || "",
              amount: existingPropertyData.amount || "",
              files: null,
            }}
            validationSchema={Yup.object({
              title: Yup.string().required("Title is required"),
              body: Yup.string().required("Description is required"),
              address: Yup.string().required("Address is required"),
              land_space: Yup.number().required("Land space is required"),
              amount: Yup.number().required("Amount is required"),
              files: Yup.mixed().required("At least one image is required"),
            })}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="text-sm">
                    Title
                  </label>
                  <Field
                    type="text"
                    name="title"
                    placeholder="Enter property title"
                    className="outline-none border text-black border-slate-200 bg-transparent rounded px-4 py-2 text-sm"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="address" className="text-sm">
                    Address
                  </label>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Enter property address"
                    className="outline-none border text-black border-slate-200 bg-transparent rounded px-4 py-2 text-sm"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>

                {/* Land Space and Amount */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 w-[45%]">
                    <label htmlFor="land_space" className="text-sm">
                      Land Space (sqft)
                    </label>
                    <Field
                      type="number"
                      name="land_space"
                      placeholder="Enter land space"
                      className="outline-none border text-black border-slate-200 bg-transparent rounded px-4 py-2 text-sm"
                    />
                    <ErrorMessage
                      name="land_space"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-[45%]">
                    <label htmlFor="amount" className="text-sm">
                      Amount ($)
                    </label>
                    <Field
                      type="number"
                      name="amount"
                      placeholder="Enter property amount"
                      className="outline-none border text-black border-slate-200 bg-transparent rounded px-4 py-2 text-sm"
                    />
                    <ErrorMessage
                      name="amount"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="body" className="text-sm">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    rows={6}
                    name="body"
                    placeholder="Enter property description"
                    className="outline-none border text-black border-slate-200 bg-transparent rounded px-4 py-2 text-sm"
                  />
                  <ErrorMessage
                    name="body"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Image Upload */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="files" className="text-sm">
                    Images
                  </label>
                  <input
                    type="file"
                    name="files"
                    onChange={(event) => {
                      setFieldValue("files", event.currentTarget.files); // Allow multiple files
                    }}
                    multiple
                  />
                  <ErrorMessage
                    name="files"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>

                {/* Submit button */}
                <div className="flex items-center justify-center gap-4 pt-16">
                  <button
                    type="submit"
                    className="bg-lite text-sm text-white px-4 py-2 w-full lg:w-[50%] xl:w-[20%] rounded xl:text-base hover:bg-blue"
                  >
                    Post Property
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default CreateProperty;
