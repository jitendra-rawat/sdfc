'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newsUpdates = [
  { id: 1, title: "Match Result: SDFC Pipalkoti vs. Team A", date: "September 15, 2024", content: "SDFC Pipalkoti secured a victory against Team A with a score of 3-1!" },
  { id: 2, title: "Player Transfer: Star Forward Joins SDFC", date: "September 10, 2024", content: "The club is excited to announce the signing of forward John Doe from Team B." },
  { id: 3, title: "Club Announcement: New Training Facility", date: "September 5, 2024", content: "SDFC Pipalkoti is proud to unveil a new state-of-the-art training facility." },
  { id: 4, title: "Match Result: SDFC Pipalkoti vs. Team B", date: "September 1, 2024", content: "A thrilling match ended in a draw, with both teams scoring 2 goals." },
  { id: 5, title: "Press Release: Upcoming Charity Match", date: "August 28, 2024", content: "Join us for a charity match to support local initiatives. More details to follow!" },
];

const News = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="py-20 ">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-8">News and Updates</h2>
        <Slider {...settings}>
          {newsUpdates.map(({ id, title, date, content }) => (
            <div key={id} className="h-48 p-4 rounded-lg shadow-inner mx-2  bg-white">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-500 text-sm mb-2">{date}</p>
              <p className="text-gray-700">{content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default News;
