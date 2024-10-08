import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineInbox,
  AiFillFileAdd,
  AiFillSetting,
} from "react-icons/ai";
import { BiMessageSquareCheck } from "react-icons/bi";
import { HiOutlineDocumentText, HiOutlineTemplate } from "react-icons/hi";
import { MdPublic, MdOutlineFax } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import { MdContactPhone } from "react-icons/md";
import styles from "./sidebar.module.css";
import { RiServiceLine } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import logone from "../../../../public/img/to.png";
import Image from "next/image";
import {
  IoIosArrowForward,
  IoIosNotifications,
  IoIosArrowDown,
} from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";
import { HiMiniUser } from "react-icons/hi2";
import { BiMessageAltDots } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { MdRealEstateAgent } from "react-icons/md";

const Sidebar = ({ closeMenu, toggleSidebar }) => {
  const handleMenuItemClick = () => {
    closeMenu(); // Close sidebar links
    toggleSidebar(); // Close sidebar
  };

  const details = [
    {
      id: 1,
      icon: <BiSolidDashboard className={styles.icon} />,
      title: "Dashboard",
      link: "/admin/dashboard",
      path: "/admin/dashboard",
    },
    {
      id: 2,
      icon: <MdRealEstateAgent className={styles.icon} />,
      title: "Property",
      link: "/admin/property",
      path: "/admin/property",
    },
    {
      id: 3,
      icon: <TbListDetails className={styles.icon} />,
      title: "Blog",
      link: "/admin/blog",
      path: "/admin/blog",
    },

    {
      id: 4,
      icon: <BiMessageSquareCheck className={styles.icon} />,
      title: "Testimonial",
      link: "/admin/testimonials",
      path: "/admin/testimonials",
    },
    {
      id: 5,
      icon: <HiUsers className={styles.icon} />,
      title: "Team",
      link: "/admin/team",
      path: "/admin/team",
    },
    {
      id: 6,
      icon: <HiMiniUser className={styles.icon} />,
      title: "Account",
      link: "/admin/account",
      path: "/admin/account",
    },
    {
      id: 7,
      icon: <TbListDetails className={styles.icon} />,
      title: "Service",
      link: "/admin/service",
      path: "/admin/service",
    },

    {
      id: 8,
      icon: <IoMdSettings className={styles.icon} />,
      title: "Settings",
      link: "/admin/settings",
      path: "/admin/settings",
    },
  ];
  console.log("details");
  return (
    <aside className={styles.sidebar}>
      <div className="p-3 md:p-8 lg:px-5 lg:py-8">
        <Image
          src={logone}
          alt="logo-img"
          className="w-[40%] md:w-[30%] lg:w-[70%] h-auto"
        />
      </div>
      <div className={styles.container}>
        {details.map((datum) => (
          <div key={datum.id} className={styles.cont}>
            <Link
              href={datum.path}
              onClick={handleMenuItemClick}
              className={styles.link}
            >
              <p>{datum.icon}</p>
              <p>{datum.title}</p>
              <p>{datum.arrow}</p>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
