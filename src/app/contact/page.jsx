"use client"
import React from 'react'
import Title from '../components/Title'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div className=''>
      <Title label="Contact" />
      <div className="max-w-7xl mx-auto container flex flex-wrap items-center justify-between">
        
        {/* Left Side: Contact Details */}
        <div className="w-full md:w-1/2 my-10 max-w-lg mx-auto py-20 px-6 bg-white shadow-xl rounded-lg space-y-4 ">
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <p><strong>Phone:</strong> +91 99176 33080 </p>
          <p><strong>Email:</strong> contact@sdfc.com</p>
          <p><strong>Address:</strong> SD Ground, Pipalkoti, Chamoi(Uttrakhand)</p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2">
          <Form label="Contact" />
        </div>
        
      </div>
    </div>
  )
}

export default Contact
