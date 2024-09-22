import React from 'react';
import Button from './Button';

const Donate = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
          Support Our Club, Make a Difference!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your generous donations help us promote local talent and support our community programs.
        </p>
      
      <Button link="/donate" label="Donate Now" />
      </div>
    </section>
  );
};

export default Donate;
