"use client";
import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Createblogs from "./CreateBlogs/createblogs";
import UpdateBlog from "./UpdateBlogs/updateblog";
import Image from "next/image";

const Blogs = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Format as "MM/DD/YYYY"
    } catch (error) {
      return "Invalid date";
    }
  };

  const handleEditClick = (blog) => {
    setShowBlogModal(true);
    setSelectedBlog(blog);
  };

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await fetch("http://backend.toprofile.com/api/v1/blog/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogs(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      console.error("No token found, please log in");
      setError("No token found, please log in");
      setLoading(false);
      return;
    }
    fetchBlogs();
  }, [showModal, token, fetchBlogs]);

  const handleDeleteBlog = async (slug) => {
    try {
      const response = await fetch(
        `http://backend.toprofile.com/api/v1/blog/${slug}/`,
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

      fetchBlogs();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCreateblogsClick = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white">
      <div className="flex justify-end items-center px-10 lg:py-10 xl:px-16 xl:py-10">
        <button
          className="bg-lite px-4 py-2 text-white flex justify-center items-center gap-2"
          onClick={handleCreateblogsClick}
        >
          <MdAdd color="white" className="text-white h-4 w-4 xl:h-6 xl:w-6" />
          Create Post
        </button>
      </div>

      <div className="pt-5 px-10 xl:px-16">
        <div className="cursor-pointer border border-slate-300"></div>
      </div>

      <div className="px-10 xl:px-16">
        <table className="table-auto w-full text-sm xl:text-base">
          <thead className="h-[7vh]">
            <tr>
              <th className="w-[5%]">S/N</th>
              <th className="w-[15%]">Image</th> {/* New column for image */}
              <th className="w-[40%]">Title</th>
              <th className="w-[15%]">Date</th>
              <th className="w-[15%]">Views</th>
              <th className="w-[10%]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((datum, index) => (
              <tr
                key={datum.id}
                className="h-[6vh] bg-white border-b border-slate-300 text-black"
              >
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  <Image
                    src={datum.image || "placeholder.jpg"} // Replace with actual URL or a placeholder
                    alt={datum.title}
                    className="h-12 w-12 object-cover mx-auto"
                  />
                </td>
                <td className="text-center">{datum.title}</td>
                <td className="text-center">{formatDate(datum.created_at)}</td>
                <td className="text-center">
                  <div className="flex justify-center items-center gap-2">
                    <IoMdEye />
                    <p>{datum.view}</p>
                  </div>
                </td>
                <td className="text-center">
                  <div className="flex justify-center items-center gap-2">
                    <FiEdit onClick={() => handleEditClick(datum.slug)} />
                    <MdDeleteOutline
                      onClick={() => handleDeleteBlog(datum.slug)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal components */}
      {showModal && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-[70%] bg-white shadow-2xl rounded-lg overflow-y-auto">
            <Createblogs
              handleCloseModal={handleCloseModal}
              fetchBlogs={fetchBlogs}
            />
          </div>
        </div>
      )}
      {showBlogModal && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-[70%] bg-white shadow-2xl rounded-lg overflow-y-auto">
            <UpdateBlog
              blogId={selectedBlog}
              handleCloseModal={() => setShowBlogModal(false)}
              fetchBlogs={fetchBlogs}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
