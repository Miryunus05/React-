import React, { Component } from 'react'
import img1 from "../assets/card1.png"
import img2 from "../assets/card2.png"
import img3 from "../assets/card3.png"

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='hero'>
        <div className='hero-child  w-2/5 h-80 '>
            <p className=' text-xs font-semibold tracking-widest'>New Arrival</p>
            <h1 className='text-5xl font-bold'>Discover Our  New Collection</h1>
            <p className='text-xs font-semibold leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='text-xs font-semibold'>BUY NOW</button>
        </div>
        </div>
        <div className='cards'>
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className=' flex gap-9'>
            <div className='card'>
                <img src={img1} alt="" />
                <h3>Dining</h3>
            </div>
            <div className='card'>
                <img src={img2} alt="" />
                <h3>Living</h3>
            </div>
            <div className='card'>
                <img src={img3} alt="" />
                <h3>Bedroom</h3>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
