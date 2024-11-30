import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonials Data
const testimonials = [
  {
    comment: "This service changed my life! Highly recommend to everyone.",
    name: "John Doe",
    occupation: "Entrepreneur"
  },
  {
    comment: "A wonderful experience, truly professional and top-notch!",
    name: "Jane Smith",
    occupation: "Marketing Specialist"
  },
  {
    comment: "Exceeded my expectations, the team was amazing to work with.",
    name: "Michael Lee",
    occupation: "Software Engineer"
  },
  {
    comment: "I am extremely satisfied with the results, worth every penny!",
    name: "Emily Davis",
    occupation: "Designer"
  }
];

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="text-center mb-5 mt-4 md:px-14 md:py-14">
      <h2 className="bg-darkCream text-lg font-light text-grayTheme w-fit m-auto p-4 uppercase tracking-[4px]">
        Testimonials
      </h2>
      <h1 className="text-[24px] mt-4 text-grayTheme font-semibold capitalize">
        What our customers say
      </h1>
      <h1 className="text-6xl mt-4 text-darkCream tracking-[8px] font-bold">''</h1>

      {/* Slider Section */}
      <Slider {...settings} className="mt-3 z-[-10px]">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-8  rounded-lg">
            <p className="text-xl text-darkCream mb-4">"{testimonial.comment}"</p>
            <div className="text-lg font-semibold text-darkCream">
              <h2>{testimonial.name}</h2>
              <p className="text-sm text-darkCream">{testimonial.occupation}</p>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
}

export default Reviews;
