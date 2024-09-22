import React from 'react';
import Image from 'next/image';
import Title from '../components/Title';
import { management,members } from '@/utils';


const ClubMembers = () => {

  return (
    <>
      
      <Title label="Club Members"/>
    

      {/* Members Grid */}
      <div className="container mx-auto max-w-7xl px-10 py-16">


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {management.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-80  object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{member.name}</h3>
                {/* <p className="text-gray-600">{member.role}</p> */}
              </div>
            </div>
          ))}
        </div>


        


        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={300}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{member.name}</h3>
                {/* <p className="text-gray-600">{member.role}</p> */}
              </div>
            </div>
          ))}
        </div>


      </div>
    </>
  );
};

export default ClubMembers;
