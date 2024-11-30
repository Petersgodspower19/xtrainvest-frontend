import React, { useState } from 'react'
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
  

function Directors() {
    const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
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
      
    </div>
  )
}

export default Directors
