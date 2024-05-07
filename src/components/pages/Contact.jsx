import React, { Component } from 'react'
import img1 from "../assets/Logos.svg"
import img2 from "../assets/arrow.svg"


export default class Contact extends Component {
  render() {
    return (
      <div>
                <div className='fon'>
            <div className='fon-child'>
                <img src={img1} alt="" />
                <h1>Contact</h1>
                <span>
                    <p>Home  </p>
                    <img src={img2} alt="" />
                    <p> Contact</p>
                </span>
            </div>
        </div>
      </div>
    )
  }
}
