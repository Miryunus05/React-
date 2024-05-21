
import img1 from "../assets/Logos.svg"
import img2 from "../assets/arrow.svg"
import SectionHeader from "./SectionHeader"
import ContactForm from "./ContactForm"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"
import icon5 from "../assets/maps.svg"
import icon6 from "../assets/clock.svg"
import icon7 from "../assets/bxs_phone.svg"

const Contact = () => {

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
      <SectionHeader
        title='Get In Touch With Us'
        subTitle='For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!'
      />
      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center gap-8 mt-10">
            <div className="boxes" >
              <img src={icon5} alt="" />
              <h3>Address</h3>
              <p className="w-[190px]">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="boxes" >
              <img src={icon7} alt="" />
              <h3>Phone</h3>
              <p className="w-[200px]">Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
            </div>
            <div className="boxes" >
              <img src={icon6} alt="" />
              <h3>Working Time</h3>
              <p className="w-[200px]">Monday-Friday: 9:00 - 22:00    <br />Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <ContactForm />

        </div>
      </div>
      <div className='inner mb-8 mt-8'>
        <div className='flex gap-12'>
          <div className='inner-child flex items-center justify-center gap-3'>
            <img src={icon2} alt="" />
            <span>
              <h2>High Quality</h2>
              <p>crafted from top materials</p>
            </span>
          </div>
          <div className='inner-child flex items-center justify-center gap-3'>
            <img src={icon1} alt="" />
            <span>
              <h2>Warranty Protection</h2>
              <p>Over 2 years</p>
            </span>
          </div>
          <div className='inner-child flex items-center justify-center gap-3'>
            <img src={icon3} alt="" />
            <span>
              <h2>Free Shipping</h2>
              <p>Order over 150 $</p>
            </span>
          </div>
          <div className='inner-child flex items-center justify-center gap-3'>
            <img src={icon4} alt="" />
            <span>
              <h2>24 / 7 Support</h2>
              <p>Dedicated support</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
