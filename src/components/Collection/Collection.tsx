"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import ticketriver from "../../../public/ticket-river-cat.jpg";
import ticketlas from "../../../public/ticket-las-vegas.jpg";
import ticketriver2 from "../../../public/ticket-river-cat.jpg";
import ticketlas2 from "../../../public/ticket-las-vegas.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    isDarkMode: boolean;
}

// carousel arrow functions 

function SampleLeftArrow({ className, style, onClick, isDarkMode }: SampleArrowProps) {

    const arrowColor = isDarkMode ? '#2C9CF0' : '#2C9CF0';
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <style jsx>{`
                .slick-prev:before,
                .slick-next:before {
                    visibility: hidden;
                }
            `}</style>
            <div className='border-2 py-1 pr-5 -pl-1 border-[#2C9CF0] hidden md:block'>
                <FiChevronLeft size={24} color={arrowColor} />
            </div>
           
        </div>
    );
}
function SampleRightArrow({ className, style, onClick, isDarkMode }: SampleArrowProps) {
    const arrowColor = isDarkMode ? '#2C9CF0' : '#2C9CF0';

    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <style jsx>{`
                .slick-prev:before,
                .slick-next:before {
                    visibility: hidden;
                }
            `}</style>
            <div className='border-2 py-1 pr-5 border-[#2C9CF0] hidden md:block'>
                <FiChevronRight size={24} color={arrowColor} />
            </div>
           
        </div>
    );
}


interface CollectionProps {
    isDarkMode: boolean;
}

// main component Collection function 

const Collection: React.FC<CollectionProps> = ({ isDarkMode }) => {
    const cardBackgroundColor = isDarkMode ? '#3B3E47' : '#FFFFFF';
    //  ticket data 
    const ticketData = [
        { image: ticketlas, title: "Las Vegas Aviators", date: "Oct 15", day: "SUN", time: "4:30 PM", location: "Las Vegas Ballpark, Las Vegas, Nevada", coll: "Take Fight Button" },
        { image: ticketriver, title: "Sacramento River Cats", date: "Oct 15", day: "SUN", time: "4:30 PM", location: "Sutter Health Park, Sacramento, California", coll: "Orange Collection" },
        { image: ticketlas2, title: "Las Vegas Aviators", date: "Oct 15", day: "SUN", time: "4:30 PM", location: "Las Vegas Ballpark, Las Vegas, Nevada", coll: "Take Fight Button" },
        { image: ticketriver2, title: "New Jersey Devils", date: "Oct 15", day: "SUN", time: "4:30 PM", location: "Sutter Health Park, Sacramento, California", coll: "Orange Collection" },
    ];

    // slider settings 
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleRightArrow isDarkMode={isDarkMode} />,
        prevArrow: <SampleLeftArrow isDarkMode={isDarkMode} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div style={{ backgroundColor: isDarkMode ? '#292B32' : '#F7F7F8', color: isDarkMode ? '#FFFFFF' : '#000000' }} className=' max-w-3xl mx-auto mt-16 pb-10'>
            <h3 className='text-center text-3xl lg:text-5xl font-bold'>Collection Spotlight</h3>
            <p className='text-sm text-center my-6 '>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            {/* slide part  */}
            <div className="slider-container">
                <Slider className='' {...settings}>
                    {ticketData.map((ticket, index) => (
                        <div key={index}>
                            {/* ticket image  */}
                            <div style={{ backgroundColor: cardBackgroundColor }} className="p-3 text-center mx-2">
                                <div className=' rounded-b-full'>
                                    <Image src={ticket.image} alt={ticket.title} />
                                </div>   
                            </div>
                            {/* ticket card divider  */}
                            <div style={{ backgroundColor: cardBackgroundColor }} className='flex  mx-3 justify-between items-center'>
                                <div style={{ backgroundColor: isDarkMode ? '#292B32' : '#F7F7F8' }} className='text-center -ml-4 p-3 rounded-full border-[#F7F7F8]'></div>
                                <div className='text-center text-[#A9ACB2]'> <p>--------------------------</p></div>
                                <div style={{ backgroundColor: isDarkMode ? '#292B32' : '#F7F7F8' }} className='text-center -mr-4 p-3 rounded-full border-[#F7F7F8]'></div>
                            </div>
                            {/* bottom part of ticket  */}
                            <div style={{ backgroundColor: cardBackgroundColor }} className="px-3 pb-3 text-center mx-2">
                                <div className=' rounded-b-full '>
                                    <h3 className="text-base font-medium">{ticket.title}</h3>
                                    <div className='my-2'>
                                        <p className="text-sm my-1">{ticket.date} | {ticket.day} |  {ticket.time}</p>
                                    </div>
                                    <p className='text-xs'>{ticket.location}</p>
                                    <button className='mt-5 bg-black text-white text-xs w-full py-3'>{ticket.coll}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Collection;
