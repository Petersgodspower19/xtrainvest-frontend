import React, { useState } from 'react';
import m1 from '../../assets/m1.jpg';
import m2 from '../../assets/m2.jpg';
import m3 from '../../assets/m3.jpg';
import DirectorCard from '../../components/DirectorCard';

const directors = [
  {
    name: 'Bob Kingman',
    position: 'Co-Founder',
    img: m1,
  },
  {
    name: 'Sarah Sperson',
    position: 'Manager & Analyzer',
    img: m2,
  },
  {
    name: 'Robin McCalister',
    position: 'Risk Manager',
    img: m3,
  },
];

const details = [
    {
     heading: "37+",
     text: "Years of experience"
    },
    {
        heading: "98K",
        text: "Success Investments"
       },
       {
        heading: "65B",
        text: "Dollar Money Profit"
       },
       {
        heading: "24+",
        text: "Expert Advisors"
       },
]

function HomeAbout() {
    const [activeIndex, setActiveIndex] = useState(null);
  
    return (
      <div className=" py-12">
        
        <div className="flex flex-wrap gap-8 justify-center mb-12">
          {directors.map((director, index) => (
            <DirectorCard
              key={index}
              src={director.img}
              name={director.name}
              position={director.position}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
  
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 text-grayTheme
               hover:bg-grayTheme hover:text-cream rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h1 className="text-4xl font-bold">{detail.heading}</h1>
              <p className="text-sm mt-2">{detail.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default HomeAbout;
