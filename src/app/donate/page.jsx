"use client"
import React from 'react'
import Title from '../components/Title'
import Form from '../components/Form'
import Image from 'next/image'

const Donate = () => {
  return (
    <div className=''>
    <Title label="Donate for Club" />
    <div className="max-w-7xl mx-auto container ">
       
       
    <Image src='/qr.png' width={300} height={300} className='mx-auto mt-8'/>

   
      <div className=" my-10 max-w-3xl mx-auto py-20 px-6 bg-white shadow-xl rounded-lg  ">
        <h2 className="text-2xl font-bold mb-4 text-center">Support SDFC Football Club: Help Us Reach New Heights with Your Generous Donations for Future Success</h2>
      <p className='text-center'>Please scan the QR code to make your donation and support SDFC Football Club. After completing your payment, kindly send a screenshot of the transaction to our email address for confirmation. Your generosity is greatly appreciated!</p>
      </div>

      
      
    </div>
  </div>
  )
}

export default Donate