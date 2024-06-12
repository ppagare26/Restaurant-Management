import React from 'react'

const CardItems = ({title,description}) => {
  return (
   
    <div className="w-full md:w-1/3 p-2">
    <div className="bg-gray-800 rounded-lg p-4">
      <h4 className="text-lg font-bold">{title}</h4>
      <p>{description}</p>
    </div>
  </div>
  )
}

export default CardItems