import React from 'react'
import cardData from './jsonData/cardData.json'
import CardItems from './CardItems'

const CardComponent = () => {
  return (
    <div className="w-full flex flex-wrap">
        {cardData.map((card,index) => (
             <CardItems key ={index} title= {card.title}  description={card.description}/>
        ))}
        <CardItems cardData/>
  
    </div>
  )
}

export default CardComponent