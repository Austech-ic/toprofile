"use client";
import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import kam from "../../../../public/img/man.png";
import Link from "next/link";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import CreateTeam from "./CreateTeam/createteam";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const Teams = () => {
  const [showModal, setShowModal] = useState(false);

  const [showTeamModal, setShowTeamModal] = useState(false);
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Format as "MM/DD/YYYY" or use other formats as needed
    } catch (error) {
      return "Invalid date"; // Return a default value if there's an error
    }
  };
  if (!token) {
    console.error("No token found, please log in");
    return;
  }
  const handleDeleteTeam = async (id) => {
    if (!token) {
      console.error("No token found, please log in");
      return;
    }
    try {
      const response = await fetch(
        `http://backend.toprofile.com/api/v1/our_team/${id}/`,
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

      fetchTeam();
    } catch (error) {
      console.error("Error deleting blog:", error);
      setError(error.message);
    }
  };
  console.log("reponse>>>", team);
  const handleEditClick = (ourTeam) => {
    setShowTeamModal(true);
    setSelectedTeam(ourTeam); // Pass the blog data to the modal
  };
  const fetchTeam = async () => {
    try {
      const response = await fetch(
        "http://backend.toprofile.com/api/v1/our_team/",
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
      setTeam(data.data); // Assuming the response is in the expected format
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, [showModal]);

  const handleCreateTeamClick = () => {
    setShowModal((prevState) => !prevState); // Toggle modal visibility
  };
  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div className="bg-white ">
      <div className="flex justify-end items-center px-10 lg:py-10 xl:px-16 xl:py-10 ">
        <button
          className="bg-lite px-4 py-2 text-white flex justify-center items-center gap-2"
          onClick={handleCreateTeamClick}
        >
          <MdAdd color="white" className="text-white h-4 w-4 xl:h-6 xl:w-6" />
          Create
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
              <th className="w-[15%]">
                <p className="text-center text-sm font-medium">First Name</p>
              </th>
              <th className="w-[15%]">
                <p className="text-center text-sm font-medium ">Last Name</p>
              </th>
              <th className="w-[15%]">
                <p className="text-center text-sm font-medium">Position</p>
              </th>

              <th className="w-[15%]">
                <p className="text-center text-sm font-medium">Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {team.map((datum) => (
              <tr
                key={datum.id}
                className="h-[6vh] bg-white border-b border-slate-300 text-black "
              >
                <td className="w-[10%] ">
                  <div className="flex items-center gap-2 justify-center">
                    <p className="text-xs  text-black font-semibold">
                      {datum.id}
                    </p>
                  </div>
                </td>
                <td className="w-[15%] ">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src={datum.image}
                      alt="pic-img"
                      className="w-[20%] xl:w-[15%]"
                      width={"200"}
                      height={"150"}
                    />
                  </div>
                </td>
                <td className=" w-[15%]">
                  <div className="text-center ">
                    <p className="text-xs">{datum.first_name}</p>
                  </div>
                </td>
                <td className="text-center w-[15%]">
                  <p className="text-xs ">{datum.last_name}</p>
                </td>
                <td className="text-center w-[15%]">
                  <p className="text-xs ">{datum.postion}</p>
                </td>

                <td className="text-center w-[15%]">
                  <div className="flex justify-center items-center gap-2">
                    <FiEdit
                      className="cursor-pointer"
                      onClick={() => handleEditClick(datum.id)}
                    />
                    <MdDeleteOutline
                      onClick={() => handleDeleteTeam(datum.id)}
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
        <div className="flex items-center justify-center text-slate-500 text-sm">
          <div className="flex items-center gap-2 border border-slate-300 p-2">
            <IoIosArrowRoundBack className="h-6 w-6" />
            <p className="text-sm cursor-pointer">Previous</p>
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
            <p className="text-sm cursor-pointer">Next</p>
            <IoIosArrowRoundForward className="h-6 w-6" />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-[70%] top-6 left-[8rem] xl:left-[9rem] xl:top-[1.5rem] h-[80vh] bg-white  shadow-2xl rounded-lg overflow-y-auto">
            {/* Your modal content goes here */}
            <CreateTeam handleCloseModal={handleCloseModal} />{" "}
            {/* This assumes your modal content is in the Notifications component */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
