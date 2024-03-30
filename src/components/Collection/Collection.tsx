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


function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "#2C9CF0" }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "#2C9CF0" }}
            onClick={onClick}
        />
    );
}

const Collection = () => {
    const ticketData = [
        { image: ticketlas, title: "Las Vegas Aviators", date: "Oct 15", day: "SUN", time: "4:30 PM", location: "Las Vegas Ballpark, Las Vegas, Nevada", coll: "Take Fight Button" },
        { image: ticketriver, title: "Sacramento River Cats", date: "Oct 15", day: "SUN", time: "4:30 PM", location: "Las Vegas Ballpark, Las Vegas, Nevada", coll: "Take Fight Button" },
        { image: ticketlas2, title: "Las Vegas Aviators", date: "Oct 15", day: "SUN", time: "4:30 PM", location: "Las Vegas Ballpark, Las Vegas, Nevada", coll: "Take Fight Button" },
        { image: ticketriver2, title: "New Jersey Devils", date: "Oct 15", day: "SUN", time: "4:30 PM", location: "Las Vegas Ballpark, Las Vegas, Nevada", coll: "Take Fight Button" },
    ];

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
                breakpoint: 600,
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
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className=' max-w-3xl mx-auto mt-16'>
            <h3 className='text-center text-5xl font-bold'>Collection Spotlight</h3>
            <p className='text-sm text-center my-6 '>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            <div className="slider-container">
                <Slider {...settings}>
                    {ticketData.map((ticket, index) => (
                        <div className=' border-8 border-[#F7F7F8]' key={index}>
                            <div className="bg-white p-3 text-center">
                                <Image src={ticket.image} alt={ticket.title} width={300} height={200} />
                                <h3 className="mt-4 text-base font-medium">{ticket.title}</h3>
                                <div className='my-2'>
                                    <p className="text-sm my-1">{ticket.date} ||{ticket.day} || {ticket.time}</p>
                                </div>
                                <p className='text-xs'>{ticket.location}</p>
                                <button className='mt-5 bg-black text-white text-xs w-full py-3'>{ticket.coll}</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Collection;
