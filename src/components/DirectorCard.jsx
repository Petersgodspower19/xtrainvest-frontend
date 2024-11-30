import React from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function DirectorCard({ src, name, position, isActive, onClick }) {
  return (
    <div
      className={`relative w-[350px] h-[370px] cursor-pointer transition-transform duration-300 ${
        isActive ? 'scale-105' : 'hover:scale-105'
      }`}
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={src}
        alt={name}
        className="w-full h-[300px] object-cover"
      />

      {/* Details */}
      <div
        className="bg-grayTheme p-[10px] text-center"
      >
        <h1 className="text-xl font-bold text-cream">{name}</h1>
        <p className="text-sm text-cream">{position}</p>
      </div>

      {/* Icons (Visible only when active) */}
      {isActive && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-grayTheme/80 z-10">
          <FaFacebookF size={24} color="#F8F3F0" />
          <FaTwitter size={24} color="#F8F3F0" />
          <FaLinkedinIn size={24} color="#F8F3F0" />
        </div>
      )}
    </div>
  );
}

export default DirectorCard;
