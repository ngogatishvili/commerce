import React from 'react'

const Rating = ({numReviews,rating}) => {
    const ratingArr=Array.from({length:Math.ceil(rating)},(_,i)=>i+1);
    console.log(ratingArr)
  return (
    <div className="rating">
      {ratingArr.map(rat=>{
          if(rating>=rat) {
              console.log(rating,rat)
              console.log("aq")
              return <span><i className="fa fa-star"></i></span>
          }else if(rating>=rat-0.5) {
              console.log("anu aq ara?")
              return <span><i className="fas fa-star-half"></i></span>
          }else{
              return <span><i className="fa fa-star-o"/></span>
          }
      })}
      <span>{numReviews} Reviews</span>
    </div>
  )
}

export default Rating
