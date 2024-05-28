"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import multi from '../../../../public/img/multi.png';
import dem from '../../../../public/img/dem.jpg';
import win from '../../../../public/img/win.jpeg';
import wm from '../../../../public/img/wm.jpeg';
import rck from '../../../../public/img/rck.jpeg';
import bd from '../../../../public/img/bd.jpg';
import eden from '../../../../public/img/eden.jpg';
import dp from '../../../../public/img/dp.jpg';
import winone from '../../../../public/img/winone.jpeg';
import wintwo from '../../../../public/img/wintwo.jpeg';
import winthree from '../../../../public/img/winthree.jpeg';
import winfour from '../../../../public/img/winfour.jpeg';
import winfive from '../../../../public/img/winfive.jpeg';
import winsix from '../../../../public/img/winsix.jpeg';
import winseven from '../../../../public/img/winseven.jpeg';
import wemone from '../../../../public/img/wemone.jpeg';
import wemsix from '../../../../public/img/wemsix.jpg';
import wemfive from '../../../../public/img/wemfive.jpg';
import wemtwo from '../../../../public/img/wemtwo.jpg';
import wemthree from '../../../../public/img/wemthree.jpg';
import { FaLandmark } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineArrowLeft, AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const properties = [
    {
        id: 1,
        pic: win,
        label: "WINGATE ESTATE KUJE ABUJA",
        text: "4 BEDROOMS TERRACE DUPLEX",
        sqr: "250 SQM",

        items: [
            {
                id: 1,
                pic: win,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "4 BEDROOMS TERRACE DUPLEX",
                sqr: "250 SQM",
            },
            {
                id: 2,
                pic: winone,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "2-BEDROOM FULLY DETACHED BUNGALOW.",
                sqr: "250 SQM",
            },
            {
                id: 3,
                pic: winfour,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM SEMI DETACHED DUPLEX",
                sqr: "350 SQM",
            },
            {
                id: 4,
                pic: winthree,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "450 SQM",
            },
            {
                id: 5,
                pic: winsix,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "5 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "550 SQM",
            },
            {
                id: 6,
                pic: winseven,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "6 UNIT OF 3 BEDROOM BLOCK OF FLAT",
                sqr: "550 SQM",
            }
        ]
    },
    {
        id: 2,
        pic: wm,
        label: "WEMBLEY CITY JIKWOYI ABUJA",
        text: "2 BEDROOMS TERRACE DUPLEX",
        sqr: "180 SQM",
        items: [
            {
                id: 1,
                pic: wemone,
                label: "WEMBLEY CITY",
                location: "JIKWOYI",
                city: 'ABUJA',
                text: "2 BEDROOMS TERRACE DUPLEX",
                sqr: "180 SQM",
            },
            {
                id: 2,
                pic: winsix,
                label: "WEMBLEY CITY",
                location: "JIKWOYI",
                city: 'ABUJA',
                text: "4 BEDROOM TERRACE DUPLEX",
                sqr: "250 SQM",
            },
            {
                id: 3,
                pic: wemfive,
                label: "WEMBLEY CITY",
                location: "JIKWOYI",
                city: 'ABUJA',
                text: "4 BEDROOM SEMI-DETACHED PENTHOUSE",
                sqr: "350 SQM",
            },
            {
                id: 4,
                pic: wemtwo,
                label: "WEMBLEY CITY",
                location: "JIKWOYI",
                city: 'ABUJA',
                text: "3 BEDROOM BUNGALOW WITH BUNGALOW WITH ATTACHED BQ",
                sqr: "450 SQM",
            },
            {
                id: 5,
                pic: wemthree,
                label: "WEMBLEY CITY",
                location: "JIKWOYI",
                city: 'ABUJA',
                text: "DETACREDPINItOUSE WITH ATTACHED BO",
                sqr: "450 SQM",
            },
            {
                id: 6,
                pic: winsix,
                label: "WEMBLEY CITY",
                location: "JIKWOYI",
                city: 'ABUJA',
                text: "4 BEDROOM FULLY DETACHED DUPLEX WITH DETACHED BQ",
                sqr: "500 SQM",
            }
        ]
    },
    {
        id: 3,
        pic: eden,
        label: "EDENLAND KURUDU ABUJA",
        text: "2 BEDROOMS TERRACE DUPLEX WITH ATTACHED BQ",
        sqr: "180 SQM",
        items: [
            {
                id: 1,
                pic: win,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "4 BEDROOMS TERRACE DUPLEX",
                sqr: "250 SQM",
            },
            {
                id: 2,
                pic: winone,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "2-BEDROOM FULLY DETACHED BUNGALOW.",
                sqr: "250 SQM",
            },
            {
                id: 3,
                pic: winfour,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM SEMI DETACHED DUPLEX",
                sqr: "350 SQM",
            },
            {
                id: 4,
                pic: winthree,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "450 SQM",
            },
            {
                id: 5,
                pic: winsix,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "5 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "550 SQM",
            },
            {
                id: 6,
                pic: winseven,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "6 UNIT OF 3 BEDROOM BLOCK OF FLAT",
                sqr: "550 SQM",
            }
        ]
    },
    {
        id: 4,
        pic: dem,
        label: "DOUBLE KING VILLA GUZAPE 2 ABUJA",
        text: "4 BEDROOMS SEMI-DETACHED PENTHOUSE",
        sqr: "350 SQM",
        items: [
            {
                id: 1,
                pic: win,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "4 BEDROOMS TERRACE DUPLEX",
                sqr: "250 SQM",
            },
            {
                id: 2,
                pic: winone,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "2-BEDROOM FULLY DETACHED BUNGALOW.",
                sqr: "250 SQM",
            },
            {
                id: 3,
                pic: winfour,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM SEMI DETACHED DUPLEX",
                sqr: "350 SQM",
            },
            {
                id: 4,
                pic: winthree,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "450 SQM",
            },
            {
                id: 5,
                pic: winsix,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "5 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "550 SQM",
            },
            {
                id: 6,
                pic: winseven,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "6 UNIT OF 3 BEDROOM BLOCK OF FLAT",
                sqr: "550 SQM",
            }
        ]
    },
    {
        id: 5,
        pic: rck,
        label: "ROYALHILLS ESTATE ASOKORO EXTENSION ABUJA",
        text: "2 BEDROOMS TERRACE DUPLEX WITH AN ATTACHED BQ",
        sqr: "300 SQM",
        items: [
            {
                id: 1,
                pic: win,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "4 BEDROOMS TERRACE DUPLEX",
                sqr: "250 SQM",
            },
            {
                id: 2,
                pic: winone,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "2-BEDROOM FULLY DETACHED BUNGALOW.",
                sqr: "250 SQM",
            },
            {
                id: 3,
                pic: winfour,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM SEMI DETACHED DUPLEX",
                sqr: "350 SQM",
            },
            {
                id: 4,
                pic: winthree,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "450 SQM",
            },
            {
                id: 5,
                pic: winsix,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "5 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "550 SQM",
            },
            {
                id: 6,
                pic: winseven,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "6 UNIT OF 3 BEDROOM BLOCK OF FLAT",
                sqr: "550 SQM",
            }
        ]
    },
    {
        id: 6,
        pic: dp,
        label: "TREASURELAND ESTATE JIKWOYI ABUJA",
        text: "2 BEDROOMS TERRACE DUPLEX WITH ATTACHED BQ",
        sqr: "180 SQM",
        items: [
            {
                id: 1,
                pic: win,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "4 BEDROOMS TERRACE DUPLEX",
                sqr: "250 SQM",
            },
            {
                id: 2,
                pic: winone,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "2-BEDROOM FULLY DETACHED BUNGALOW.",
                sqr: "250 SQM",
            },
            {
                id: 3,
                pic: winfour,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM SEMI DETACHED DUPLEX",
                sqr: "350 SQM",
            },
            {
                id: 4,
                pic: winthree,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "450 SQM",
            },
            {
                id: 5,
                pic: winsix,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "5 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "550 SQM",
            },
            {
                id: 6,
                pic: winseven,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "6 UNIT OF 3 BEDROOM BLOCK OF FLAT",
                sqr: "550 SQM",
            }
        ]
    },
    {
        id: 7,
        pic: bd,
        label: "NEFT COURT, IDU ABUJA",
        text: "4 BEDROOMS TERRACE DUPLEX WITH ATTACHED BQ",
        sqr: "250 SQM",
        items: [
            {
                id: 1,
                pic: win,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "4 BEDROOMS TERRACE DUPLEX",
                sqr: "250 SQM",
            },
            {
                id: 2,
                pic: winone,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "2-BEDROOM FULLY DETACHED BUNGALOW.",
                sqr: "250 SQM",
            },
            {
                id: 3,
                pic: winfour,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM SEMI DETACHED DUPLEX",
                sqr: "350 SQM",
            },
            {
                id: 4,
                pic: winthree,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "3 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "450 SQM",
            },
            {
                id: 5,
                pic: winsix,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "5 BEDROOM FULLY DETACHED BUNGALOW WITH A DETACHED BQ",
                sqr: "550 SQM",
            },
            {
                id: 6,
                pic: winseven,
                label: "WINGATE ESTATE",
                location: "KUJE",
                city: 'ABUJA',
                text: "6 UNIT OF 3 BEDROOM BLOCK OF FLAT",
                sqr: "550 SQM",
            }
        ]
    },
];

const slugify = (text) => {
    return text.toLowerCase().replace(/,/g, '').replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

const ITEMS_PER_PAGE = 4;
const MAX_PAGES = 5;

const EstatePage = () => {


    const { estate } = useParams();
    const formattedEstate = slugify(estate);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const property = properties.find(p => slugify(p.label) === formattedEstate);

    if (!property) {
        return <div>Property not found</div>;
    }
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = property.items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(property.items.length / ITEMS_PER_PAGE);

    const paginate = (pageNumber) => {
        setLoading(true);
        setTimeout(() => {
            setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className='container mx-auto px-4 py-8'>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <div className='mt-8'>
                        {currentItems.map((datum) => (
                            <div key={datum.id} className='flex flex-col gap-2 md:gap-4 px-2 py-4 md:py-6 lg:px-2 lg:py-8 xl:px-6'>
                                <div className='shadow-2xl shadow-slate-400 rounded-xl flex flex-col lg:flex-row'>
                                    <div className="flex-1">
                                        <div className='flex items-center justify-center h-full md:h-[30vh] lg:h-[40vh] xl:h-[30vh]'>
                                            <div className="h-full w-full">
                                                <Image src={datum.pic} alt="pic-img" className="w-full h-full object-cover lg:rounded-l-xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-2 flex flex-col gap-2 justify-center px-5 pt-4 pb-5 md:pb-10 lg:pb-0 md:px-6 lg:px-5'>
                                        <div className='flex flex-col gap-4'>
                                            <p className='text-xs md:text-lg lg:text-sm font-medium'>{datum.label}</p>
                                            <p className='text-xs md:text-lg lg:text-sm leading-5 font-light'>{datum.text}</p>
                                            <div className='flex items-center gap-1 md:gap-1 lg:gap-2'>
                                                <IoLocationSharp className='text-orange h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />
                                                <p className='text-xs md:text-lg lg:text-sm font-light'>{datum.location},</p>
                                                <p className='text-xs md:text-lg lg:text-sm font-light'>{datum.city}</p>
                                            </div>
                                            <div className='flex items-center gap-2 md:gap-2 lg:gap-2'>
                                                <FaLandmark className='text-orange h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />
                                                <p className='text-xs md:text-lg lg:text-sm leading-5 font-light'>{datum.sqr}</p>
                                            </div>
                                            <div>
                                                <button className='flex justify-center items-center px-8 py-2 gap-4 border bg-lite text-white text-xs md:text-lg lg:text-sm'>
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center justify-center gap-2 md:gap-4 pt-10 pb-5 md:pt-16 lg:pt-20 xl:pt-24'>
                        <button
                            className='gap-2 p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100'
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <IoIosArrowBack className='h-5 w-5 md:w-7 md:h-7 lg:h-7 lg:w-7 xl:h-8 xl:w-8' />
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map(number => (
                            <button
                                key={number}
                                className={`gap-2 p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100 ${number === currentPage ? 'bg-white text-orange' : ''}`}
                                style={{ height: loading ? '100vh' : 'auto' }}
                                onClick={() => paginate(number)}
                            >
                                <span className='text-xs md:text-lg lg:text-sm'>{number}</span>
                            </button>
                        ))}

                        <button
                            className='gap-2 p-2 flex justify-center items-center shadow-2xl bg-white h-8 w-8 md:h-14 md:w-14 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full border border-slate-100'
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <IoIosArrowForward className='h-5 w-5 md:w-7 md:h-7 lg:h-7 lg:w-7 xl:h-8 xl:w-8' />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default EstatePage;
