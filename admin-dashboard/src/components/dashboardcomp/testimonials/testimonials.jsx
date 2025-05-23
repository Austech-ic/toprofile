"use client";
import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import kam from "../../../../public/img/man.png";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdEye } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import CreateTestimonial from "./CreateTestimonial/createTestimonial";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import UpdateTestimonial from "./UpdateTestimonial/updateTestimonial";
import { getTokenTOLocalStorage } from "@/components/utils/storage";

const Testimonials = () => {
  const [testimonial, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = getTokenTOLocalStorage();
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleUpdateTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowUpdateModal(true); // Open update modal
  };

  const handleCreateTestimonialClick = () => {
    setShowModal((prevState) => !prevState); // Toggle modal visibility
  };
  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };
  if (!token) {
    console.error("No token found, please log in");
    return;
  }
  const fetchTestimonials = async () => {
    try {
      const response = await fetch(
        "https://toprofile-backend.onrender.com/api/v1/testimony/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("data", data);
      setTestimonials(data.data); // Assuming the response is in the expected format
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

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

  const handleDeleteBlog = async (id) => {
    if (!token) {
      console.error("No token found, please log in");
      return;
    }
    try {
      const response = await fetch(
        `https://toprofile-backend.onrender.com/api/v1/testimony/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the blog");
      }

      // After successful deletion, refetch the blogs to update the UI
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting blog:", error);
      setError(error.message);
    }
  };
  console.log("testi>>>", testimonial);
  return (
    <div className="bg-white ">
      <div className="flex justify-end items-center  px-10 lg:py-5 xl:px-16 xl:py-10">
        <button
          className="bg-lite px-4 py-2 text-white flex justify-center items-center gap-2"
          onClick={handleCreateTestimonialClick}
        >
          <MdAdd color="white" className="text-white h-4 w-4 xl:h-6 xl:w-6" />
          Create Post
        </button>
      </div>

      <div className=" px-5 pt-5">
        <div className="cursor-pointer border border-slate-300"></div>
      </div>

      <div>
        <table className="table-auto w-full text-sm xl:text-base ">
          <thead className=" h-[7vh]">
            <tr className="">
              <th className="w-[10%] ">
                <div className="flex items-center gap-2 justify-center">
                  {/* <input type='checkbox' /> */}
                  <p className="text-center text-sm  font-medium">S/N</p>
                </div>
              </th>
              <th className="w-[15%]">
                <p className="text-center text-sm font-medium">Image</p>
              </th>
              <th className="w-[15%]">
                <p className="text-center text-sm font-medium">Name</p>
              </th>
              <th className="w-[45%]">
                <p className="text-center text-sm font-medium">Comment</p>
              </th>

              <th className="w-[15%]">
                <p className="text-center text-sm font-medium">Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {testimonial.map((datum, index) => (
              <tr
                key={datum.id}
                className="h-[6vh] bg-white border-b border-slate-300 text-black "
              >
                <td className="w-[10%] ">
                  <div className="flex items-center gap-2 justify-center">
                    {/* <input type='checkbox' /> */}
                    <p className="text-xs  text-black font-semibold">
                      {index + 1}
                    </p>
                  </div>
                </td>
                <td className="w-[15%] ">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src={datum.image || ""}
                      alt="pic-img"
                      className="w-[20%] xl:w-[15%]"
                      width={"200"}
                      height={"150"}
                    />
                  </div>
                </td>
                <td className=" w-[15%]">
                  <div className="text-center ">
                    <p className="text-xs">{datum.name}</p>
                  </div>
                </td>
                <td className="text-center w-[45%]">
                  <p className="text-xs ">
                    {truncateDescription(datum.comment, 10)}
                  </p>
                </td>

                <td className="text-center w-[15%]">
                  <div className="flex justify-center items-center gap-2">
                    <FiEdit
                      className="cursor-pointer"
                      onClick={() => handleUpdateTestimonialClick(datum.id)}
                    />
                    <MdDeleteOutline
                      onClick={() => handleDeleteBlog(datum.id)}
                      className="cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center px-5 pt-[300px] pb-10 ">
        <div>
          <p className="text-sm text-slate-500">
            Showing 1 to 10 of 20 entries
          </p>
        </div>
        <div className="flex items-center justify-center text-slate-500">
          <div className="flex items-center gap-2 border border-slate-300 p-2">
            <IoIosArrowRoundBack className="h-6 w-6" />
            <p className="text-sm  cursor-pointer">Previous</p>
          </div>
          <div className="border border-slate-300 px-4 py-2 hover:bg-lite hover:text-white ">
            <p className="text-sm ">1</p>
          </div>
          <div className="border border-slate-300 px-4 py-2 hover:bg-lite hover:text-white  ">
            <p className="text-sm ">2</p>
          </div>
          <div className="border border-slate-300 px-4 py-2 hover:bg-lite hover:text-white  ">
            <p className="text-sm ">3</p>
          </div>

          <div className="flex items-center gap-2 border border-slate-300 p-2">
            <p className="text-sm  cursor-pointer">Next</p>
            <IoIosArrowRoundForward className="h-6 w-6" />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-[70%] top-6 left-[8rem] xl:left-[9rem] xl:top-[1.5rem] h-[80vh] bg-white  shadow-2xl rounded-lg overflow-y-auto">
            {/* Your modal content goes here */}
            <CreateTestimonial
              handleCloseModal={handleCloseModal}
              fetchTestimonials={fetchTestimonials}
            />{" "}
            {/* This assumes your modal content is in the Notifications component */}
          </div>
        </div>
      )}
      {showUpdateModal && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-[70%] top-6 left-[8rem] xl:left-[9rem] xl:top-[1.5rem] h-[80vh] bg-white shadow-2xl rounded-lg overflow-y-auto">
            {/* Pass the selected testimonial to the update modal */}
            <UpdateTestimonial
              testimonialId={selectedTestimonial}
              handleCloseModal={() => setShowUpdateModal(false)}
              fetchTestimonials={fetchTestimonials}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
