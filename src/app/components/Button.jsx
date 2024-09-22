"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; 

const Button = ({ onClick, label, className = '', type = 'button', link  }) => {
  const router = useRouter();

  const handleClick = (e) => {
    if (onClick) onClick(e); 
    router.push(link); 
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-[#FB3] hover:bg-[#e08d00] text-black font-semibold py-3 px-8 rounded-md transition duration-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
