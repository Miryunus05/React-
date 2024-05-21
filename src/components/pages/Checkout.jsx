import img1 from "../assets/Logos.svg"
import img2 from "../assets/arrow.svg"


const Checkout = () => {
    return (
      <div>
                <div className='fon'>
            <div className='fon-child'>
                <img src={img1} alt="" />
                <h1>Checkout</h1>
                <span>
                    <p>Home  </p>
                    <img src={img2} alt="" />
                    <p> Checkout</p>
                </span>
            </div>
        </div>
      </div>
    )
  }

  export default Checkout; 

