import React from 'react';
import { GrMoney } from 'react-icons/gr';
import { GiTakeMyMoney, GiMoneyStack } from 'react-icons/gi';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import ServiceCard from './ServiceCard';
import { NavLink } from 'react-router-dom';

function HomeServices() {
  const services = [
    {
      heading: 'Investment Advices',
      text: 'On any situation and anytime',
      icon: <GrMoney size={40} color="#F8F3F0" />,
    },
    {
      heading: 'Finance Consulting',
      text: 'Investors generally expect top',
      icon: <GiTakeMyMoney size={40} color="#F8F3F0" />,
    },
    {
      heading: 'Investment Insurance',
      text: 'On any situation and anytime',
      icon: <FaMoneyBill1Wave size={40} color="#F8F3F0" />,
    },
    {
      heading: 'Wealth Management',
      text: 'On any situation and anytime',
      icon: <GiMoneyStack size={40} color="#F8F3F0" />,
    },
  ];

  return (
    <div className='mb-5  md:px-14 md:py-14 p-[10px] bg-cream mt-7'>
      <h1 className='text-grayTheme text-2xl font-bold text-center  mb-8'>
        Our Solutions are Best
      </h1>
      <div className='flex items-center justify-center flex-wrap gap-8'>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            heading={service.heading}
            icon={service.icon}
            text={service.text}
          />
        ))}
      </div>

      <div className='text-center w-[80%] m-auto'>
      <h1 className='text-grayTheme text-2xl font-bold  mb-2 mt-4'>Who We Are?</h1>
      <p className='text-grayTheme font-light'>Investors generally expect higher returns from riskier investments. When a low risk investment is made, the
        return is also generally low. Similary, high risk comes from high returns.
      </p><br />
      <NavLink className="text-grayTheme mt-5 font-light no-underline" to="/about">Lean More &#8594;</NavLink>
      </div>
    </div>
  );
}

export default HomeServices;
