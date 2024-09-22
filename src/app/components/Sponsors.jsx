import React from 'react';
import Image from 'next/image';

const sponsors = [
  { id: 1, logo: '/deep.jpg',  },
  { id: 2, logo: '/computer.jpg',  },
  { id: 3, logo: '/medical.jpg', },
  { id: 4, logo: '/h.jpg', },
  
];

const Sponsors = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
          Our Sponsors & Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center items-center bg-white h-56 shadow-md p-4 rounded-lg">
                <Image src={sponsor.logo} alt={`Sponsor Logo ${sponsor.id}`} width={200} height={150} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
