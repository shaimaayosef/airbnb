import React from 'react'

const Card = ({card}) => {
    let badgeText
    if (card.openSpots===0){
        badgeText="sold out"
    } else if (card.location==="Online"){
        badgeText="online"
    }
    
  return (
    <div className='card'>
       { badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={card.coverImg} alt={card.title} className='card-image'/>
      <div className='card-state'>
          <img src="/images/star.png" alt="star" className='card-star' />
          <span> {card.stats.rating} </span>
          <span className='gray'> ({card.stats.reviewCount})• </span>
          <span className='gray'> {card.location} </span>
      </div>
      <p className='card-title'> {card.title} </p>
      <p className='card-price'>
          <span className='bold'>
            from $ {card.price}
          </span>
          /person
      </p>
    </div>
  )
}

export default Card
