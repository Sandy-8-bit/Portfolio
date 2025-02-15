import React from 'react'
import pic from "./pics.svg"
import "./Tech.css"
const Tech = () => {
  return (
    <div className='whole-whole'>
      <div className="wholes">
        <div className="top-techs" style={{ fontFamily: "Satoshi" }}>
            <h2>02 Technologies</h2>
        </div>
        <div className="bottom-tech">
            <img src={pic} alt='photo'></img>
        </div>
      </div>
    </div>
  )
}

export default Tech
