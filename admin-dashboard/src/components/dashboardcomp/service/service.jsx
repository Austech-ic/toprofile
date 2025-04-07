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
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";
import CreateService from "./createService/createservice";
import UpdateService from "./updateService/updateservice";
import { getTokenTOLocalStorage } from "@/components/utils/storage";

const Service = () => {
  const [showModal, setShowModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const token = getTokenTOLocalStorage();
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
  const handleCreateServiceClick = () => {
    setShowModal((prevState) => !prevState); // Toggle modal visibility
  };
  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  const [service, setService] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const itemsPerPage = 10;

  const fetchService = async () => {
    try {
      const response = await axios.get(
        `https://toprofile-backend.onrender.com/api/v1/our_service/`
      );
      setService(response.data.data);
    } catch (err) {
      setError("Failed to fetch service");
      console.error(err);
    }
  };
  useEffect(() => {
    fetchService();
  }, [currentPage]);
  const handleDeleteService = async (id) => {
    if (!token) {
      console.error("No token found, please log in");
      return;
    }
    try {
      const response = await fetch(
        `https://toprofile-backend.onrender.com/api/v1/our_service/${id}/`,
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

      fetchService();
    } catch (error) {
      console.error("Error deleting blog:", error);
      setError(error.message);
    }
  };
  const handleEditClick = (service) => {
    setShowServiceModal(true);
    setSelectedService(service);
  };
  return (
    <div className="bg-white ">
      <div className="flex justify-end items-center px-10 lg:py-10 xl:px-16 xl:py-10 ">
        <button
          className="bg-lite px-4 py-2 text-white flex justify-center items-center gap-2"
          onClick={handleCreateServiceClick}
        >
          <MdAdd color="white" className="text-white h-4 w-4 xl:h-6 xl:w-6" />
          Create Service
        </button>
      </div>

      <div className=" pt-5 px-10 xl:px-16  ">
        <div className="cursor-pointer border border-slate-300"></div>
      </div>

      <div className="px-10 xl:px-16 ">
        <table className="table-auto w-full text-sm xl:text-base ">
          <thead className=" h-[7vh]">
            <tr className="">
              <th className="w-[10%]">
                <div className="flex items-center gap-2 justify-center">
                  {/* <input type='checkbox' /> */}
                  <p className="text-center text-sm  font-medium">S/N</p>
                </div>
              </th>
              <th className="w-[15%]">
                <p className="text-center text-sm font-medium">Image</p>
              </th>

              <th className="w-[30%]">
                <p className="text-center text-sm font-medium">Title</p>
              </th>
              <th className="w-[30%]">
                <p className="text-center text-sm font-medium">Content</p>
              </th>

              <th className="w-[15%]">
                <p className="text-center text-sm font-medium">Actions</p>
              </th>
            </tr>
          </thead>
          {service.length > 0 ? (
            service.map((datum, index) => (
              <tbody key={datum.id}>
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
                        src={datum.image}
                        width={"50"}
                        height={"50"}
                        alt="pic-img"
                        className="w-[20%] xl:w-[15%]"
                      />
                    </div>
                  </td>
                  <td className=" w-[30%]">
                    <div className="text-center ">
                      <p className="text-xs">
                        {truncateDescription(datum.title, 20)}
                      </p>
                    </div>
                  </td>
                  <td className="w-[30%] ">
                    <div className="text-center ">
                      <p className="text-xs">
                        {truncateDescription(datum.content, 40)}
                      </p>
                    </div>
                  </td>

                  <td className="text-center w-[15%]">
                    <div className="flex justify-center items-center gap-2">
                      <FiEdit
                        className="cursor-pointer"
                        onClick={() => handleEditClick(datum.id)}
                      />
                      <MdDeleteOutline
                        onClick={() => handleDeleteService(datum.id)}
                        className="cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <p className="w-full bg-primary text-center">
              No Service available
            </p>
          )}
        </table>
      </div>

      <div className="flex justify-between items-center px-5 pt-[300px] pb-10 ">
        <div>
          <p className="text-sm text-slate-500">
            Showing{" "}
            {Math.min((currentPage - 1) * itemsPerPage + 1, totalEntries)} to{" "}
            {Math.min(currentPage * itemsPerPage, totalEntries)} of{" "}
            {totalEntries} entries
          </p>
        </div>
        <div className="flex items-center justify-center text-slate-500 text-sm">
          <div
            className={`flex items-center gap-2 border border-slate-300 p-2 ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            <IoIosArrowRoundBack className="h-6 w-6" />
            <p className="text-sm">Previous</p>
          </div>

          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              className={`border border-slate-300 px-4 py-2 ${
                currentPage === index + 1
                  ? "bg-lite text-white"
                  : "hover:bg-lite hover:text-white"
              } cursor-pointer`}
              onClick={() => setCurrentPage(index + 1)}
            >
              <p className="text-sm">{index + 1}</p>
            </div>
          ))}

          <div
            className={`flex items-center gap-2 border border-slate-300 p-2 ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
          >
            <p className="text-sm">Next</p>
            <IoIosArrowRoundForward className="h-6 w-6" />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-[70%] top-6 left-[8rem] xl:left-[9rem] xl:top-[1.5rem] h-[80vh] bg-white  shadow-2xl rounded-lg overflow-y-auto">
            {/* Your modal content goes here */}
            <CreateService
              fetchService={fetchService}
              handleCloseModal={handleCloseModal}
            />{" "}
            {/* This assumes your modal content is in the Notifications component */}
          </div>
        </div>
      )}
      {showServiceModal && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-[70%] bg-white shadow-2xl rounded-lg overflow-y-auto">
            <UpdateService
              serviceId={selectedService}
              handleCloseModal={() => setShowServiceModal(false)}
              fetchService={fetchService}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
