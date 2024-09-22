import React from 'react';
import Link from 'next/link';

const matches = [
  {
    id: 1,
    opponent: 'JNV Pipalkoti',
    date: 'September 30, 2024',
    time: '10:00 AM',
    venue: 'SD Ground Pipalkoti',
    ticketLink: '/tickets/1', 
  
  },
  {
    id: 2,
    opponent: 'Joshimath',
    date: 'October 5, 2024',
    time: '10:00 AM',
    venue: 'SD Ground',
    ticketLink: '/tickets/2',

  },
  {
    id: 3,
    opponent: 'Gopeshwar',
    date: 'October 12, 2024',
    time: '10:00 AM',
    venue: 'Gopeshwar Stadium',
    ticketLink: '/tickets/3', 
   
  },
  {
    id: 4,
    opponent: 'Gauchar',
    date: 'November 5, 2024',
    time: '10:00 AM',
    venue: 'Gauchar Stadium',
    ticketLink: '/tickets/3', 
   
  },
];

const UpcomingMatches = () => {
  return (
    <section className="bg-[#FB3] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold text-center  mb-8">
          Upcoming Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {matches.map((match) => (
            <div key={match.id} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Vs {match.opponent}
              </h3>
              <p className="text-black">
                <strong>Date:</strong> {match.date}
              </p>
              <p className="text-black">
                <strong>Time:</strong> {match.time}
              </p>
              <p className="text-black">
                <strong>Venue:</strong> {match.venue}
              </p>
         
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
