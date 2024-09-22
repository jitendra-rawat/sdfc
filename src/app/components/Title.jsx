import React from 'react'

const Title = ({label}) => {
  return (
    <div className="relative left-0 right-0 top-0 bg-black pt-60 pb-20">
    <h2 className="text-white text-3xl text-center font-bold">{label}</h2>
  </div>
  )
}

export default Title