import React, { useState, useEffect } from "react";
import {
  MdOutlineCancelPresentation,
  MdDelete,
  MdDeleteOutline,
} from "react-icons/md"; // Importing the delete icon
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getTokenTOLocalStorage } from "@/components/utils/storage";

const CreatePropertyCategory = ({ handleCloseModal }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);

  // Function to fetch all categories
  const getCategories = async () => {
    const token = getTokenTOLocalStorage();
    if (!token) return;

    try {
      const response = await fetch(
        "https://toprofile-backend.onrender.com/api/v1/property/listing/category/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCategories(data.data); // Set the categories in state
      } else {
        setMessage("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setMessage("An error occurred while fetching categories.");
    }
  };

  useEffect(() => {
    getCategories(); // Fetch all categories on component mount
  }, [loading]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const token = getTokenTOLocalStorage();
    if (!token) {
      setMessage("No token found. Please log in.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: values.name,
      };

      const response = await fetch(
        "https://toprofile-backend.onrender.com/api/v1/property/listing/category/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setMessage("Category created successfully!");
        resetForm();
        getCategories(); // Fetch updated categories after submission
      } else {
        setMessage("Failed to create category.");
      }
    } catch (error) {
      setMessage("An error occurred while creating the category.");
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  // Function to delete a category
  const handleDelete = async (categoryId) => {
    const token = getTokenTOLocalStorage();
    if (!token) {
      setMessage("No token found. Please log in.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://toprofile-backend.onrender.com/api/v1/property/listing/category/${categoryId}/`, // Adjust the URL according to your API
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setMessage("Category deleted successfully!");
        getCategories(); // Refresh categories after deletion
      } else {
        setMessage("Failed to delete category.");
      }
    } catch (error) {
      setMessage("An error occurred while deleting the category.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between px-20 pt-10 pb-5">
        <h1 className="text-2xl">Category</h1>
        <MdOutlineCancelPresentation
          className="h-6 w-6"
          onClick={handleCloseModal}
        />
      </div>

      <div className="px-20 py-10">
        {loading && (
          <div className="text-blue-500 text-center mb-4">
            Creating category, please wait...
          </div>
        )}

        {message && (
          <div
            className={`text-center mb-4 ${
              message.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}

        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Name is required")
              .min(1, "Name must be at least 1 character long")
              .max(225, "Name must be at most 225 characters long"),
          })}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm">
                  New Category Name
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter category name"
                  className="outline-none border text-black border-slate-200 bg-transparent rounded px-4 py-2 text-sm"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="flex items-center justify-center gap-4 pt-16">
                <button
                  type="submit"
                  className="bg-lite text-sm text-white px-4 py-2 w-full lg:w-[50%] xl:w-[20%] rounded xl:text-base hover:bg-blue"
                >
                  {loading ? "Creating..." : "Done"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Display the list of all categories */}
        <div className="mt-10">
          <label htmlFor="name" className="text-sm">
            Category Listing
          </label>
          {categories && categories.length > 0 ? (
            <ul className="list-disc pl-5">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="flex justify-between items-center text-sm"
                >
                  <span>{category.name}</span>
                  <MdDeleteOutline
                    className="cursor-pointer"
                    onClick={() => handleDelete(category.id)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div>No categories found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePropertyCategory;
