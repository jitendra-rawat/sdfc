"use client"
import React from 'react'
import Title from '../components/Title'
import Form from '../components/Form'

const FixMatch = () => {
  return (
    <div className=''>
    <Title label="Play a Match" />
    <div className="max-w-7xl mx-auto container flex flex-wrap items-center justify-between">
      
      {/* Left Side: Contact Details */}
      <div className="w-full md:w-1/2 my-10 max-w-lg mx-auto py-20 px-6 bg-white shadow-xl rounded-lg space-y-4 ">
        <h2 className="text-2xl font-bold mb-4">Friendly Match or Invite us for a Football Tournament</h2>
      <p>SDFC Club is excited to invite you for a friendly football match or to participate in your upcoming tournament. We look forward to great competition and building stronger sportsmanship together. Please share your availability.</p>
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2">
        <Form label="Match" />
      </div>
      
    </div>
  </div>
  )
}

export default FixMatch