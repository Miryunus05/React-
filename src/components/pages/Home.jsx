import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../assets/card1.png"
import img2 from "../assets/card2.png"
import img3 from "../assets/card3.png"
import images from "../assets/image1.png"
import images2 from "../assets/images2.png"
import images3 from "../assets/image3.png"
import images4 from "../assets/image4.png"
import images5 from "../assets/image5.png"
import images6 from "../assets/image6.png"
import images7 from "../assets/image7.png"
import images8 from "../assets/image8.png"
import images9 from "../assets/corousel1.png"
import images10 from "../assets/corousel2.png"
import galarey1 from "../assets/galarey1.png"
import galarey2 from "../assets/galarey2.png"
import galarey3 from "../assets/galarey3.png"
import galarey4 from "../assets/galarey4.png"
import galarey5 from "../assets/galarey5.png"
import galarey6 from "../assets/galarey6.png"
import galarey7 from "../assets/galarey7.png"
import galarey8 from "../assets/galarey8.png"
import galarey9 from "../assets/galarey9.png"

export default class Home extends Component {


  render() {

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1.5,
        slidesToSlide: 2 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    return (
      <div>
        <div className='hero'>
          <div className='hero-child  w-2/5 h-80 '>
            <p className=' text-xs font-semibold tracking-widest'>New Arrival</p>
            <h1 className='text-5xl font-bold'>Discover Our New Collection</h1>
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

        <div className='wrapper'>
          <h2>Our Products</h2>
          <div className='wrapper-child flex gap-8 justify-center '>
            <div className='wrapper-card'>
              <img src={images} alt="" />
              <span className='chegirma bg-[#E97171]'>
                -30%
              </span>
              <div className='pl-5'>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <span className='flex gap-5'>
                  <small>Rp 2.500.000</small>
                  <small>Rp 3.500.000</small>
                </span>

              </div>
              <div className='qora-fon'><button className='add'>Add to card</button></div>
            </div>
            <div className='wrapper-card'>
              <img src={images2} alt="" />

              <div className='pl-5'>
                <h3>Levios</h3>
                <p>Stylish cafe chair</p>
                <span className='flex gap-5'>
                  <small>Rp 2.500.000</small>

                </span>

              </div>
              <div className='qora-fon'><button className='add'>Add to card</button></div>
            </div>
            <div className='wrapper-card'>
              <img src={images3} alt="" />
              <span className='chegirma bg-[#E97171]'>
                -50%
              </span>
              <div className='pl-5'>
                <h3>Lolito</h3>
                <p>Stylish cafe chair</p>
                <span className='flex gap-5'>
                  <small>Rp 7.000.000</small>
                  <small>Rp 14.000.000</small>
                </span>

              </div>
              <div className='qora-fon'><button className='add'>Add to card</button></div>
            </div>
            <div className='wrapper-card'>
              <img src={images4} alt="" />
              <span className='chegirma bg-[#2EC1AC]'>
                New
              </span>
              <div className='pl-5'>
                <h3>Respire</h3>
                <p>Stylish cafe chair</p>
                <span className='flex gap-5'>
                  <small>Rp 500.000</small>

                </span>

              </div>
              <div className='qora-fon'><button className='add'>Add to card</button></div>
            </div>
          </div>


          <div className='wrapper-child flex gap-8 justify-center '>
            <div className='wrapper-card'>
              <img src={images5} alt="" />

              <div className='pl-5'>
                <h3>Grifo</h3>
                <p>Stylish cafe chair</p>
                <span className='flex gap-5'>
                  <small>Rp 1.500.000</small>
                </span>

              </div>
              <div className='qora-fon'><button className='add'>Add to card</button></div>
            </div>
            <div className='wrapper-card'>
              <img src={images6} alt="" />
              <span className='chegirma bg-[#2EC1AC]'>
                New
              </span>
              <div className='pl-5'>
                <h3>Muggo</h3>
                <p>Stylish cafe chair</p>
                <span className='flex gap-5'>
                  <small>Rp 150.000</small>

                </span>

              </div>
              <div className='qora-fon'><button className='add'>Add to card</button></div>
            </div>
            <div className='wrapper-card'>
              <img src={images7} alt="" />
              <span className='chegirma bg-[#E97171]'>
                -50%
              </span>
              <div className='pl-5'>
                <h3>Pingky</h3>
                <p>Stylish cafe chair</p>
                <span className='flex gap-5'>
                  <small>Rp 7.000.000</small>
                  <small>Rp 14.000.000</small>
                </span>

              </div>
              <div className='qora-fon'><button className='add'>Add to card</button></div>
            </div>
            <div className='wrapper-card'>
              <img src={images8} alt="" />
              <span className='chegirma bg-[#2EC1AC]'>
                New
              </span>
              <div className='pl-5'>
                <h3>Potty</h3>
                <p>Stylish cafe chair</p>
                <span className='flex gap-5'>
                  <small>Rp 500.000</small>

                </span>

              </div>
              <div className='qora-fon'><button className='add'>Add to card</button></div>
            </div>


          </div>
          <NavLink className="more">Show more</NavLink>
        </div>
        <div className='corouselBar'>
          <div className='corouselBar-child'>
            <h2>50+ Beautiful rooms <br />
              inspiration</h2>
              <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
              <NavLink className='exploreLink'>Explore More</NavLink>
          </div>
          <Carousel className='corousel'
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div><img className='iimg' src={images9} alt="" /></div>
            <div><img className='iimg' src={images10} alt="" /></div>
            <div><img className='iimg' src={img1} alt="" /></div>
            <div><img className='iimg' src={img2} alt="" /></div>
          </Carousel>
        </div>

      <div className='galarey'>
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
        <div className='overflov1 flex flex-wrap'>
              <img className='w-[274px] h-[380px]' src={galarey1} alt="" />
              <img className='w-[450px] h-[312px]'  src={galarey2} alt="" />
              <img className='w-[280px] h-[320px]'  src={galarey3} alt="" />
              <img className='w-[300px] h-[242px]'  src={galarey4} alt="" />
              <img className='w-[290px] h-[390px]'  src={galarey5} alt="" />
              <img className='w-[290px] h-[350px]'  src={galarey6} alt="" />
              <img className='w-[178px] h-[240px]'  src={galarey7} alt="" />
              <img className='w-[260px] h-[200px]'  src={galarey8} alt="" />
              <img className='w-[425px] h-[433px]'  src={galarey9} alt="" />
        </div>
      </div>

      </div>
    )
  }
}
