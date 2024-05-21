
import { NavLink } from 'react-router-dom'

import img1 from "../assets/Logos.svg"
import img2 from "../assets/arrow.svg"
import img3 from "../assets/shop.png"
import img4 from "../assets/delete.svg"

const Card = () => {

        return (
            <div>
                <div className='fon'>
                    <div className='fon-child'>
                        <img src={img1} alt="" />
                        <h1>Card</h1>
                        <span>
                            <p>Home  </p>
                            <img src={img2} alt="" />
                            <p> Card</p>
                        </span>
                    </div>
                </div>
                <div className="shop">
                    <table>
                        <div className='table'>
                            <tr className='sarlavha'>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </div>
                        <tr className='trr'>
                            <td className='flex '><img src={img3} alt="" />Asgaard sofa</td>
                            <td className='td1'>Rs. 250,000.00</td>
                            <td className='td2'><span className='one'>1</span></td>
                            <td className='td3'>Rs. 250,000.00</td>
                            <td className='td4'><img src={img4} alt="" /></td>
                        </tr>

                    </table>
                        <div  className='box'>
                            <h2>Cart Totals</h2>
                            <span className='span1 flex gap-10'>
                                <p>Subtotal</p>
                                <p>Rs. 250,000.00</p>
                            </span>
                            <span className='span2 flex gap-10'>
                                <p>Total</p>
                                <p>Rs. 250,000.00</p>
                            </span>

                            <NavLink className="chek" to="/checkout">Check Out</NavLink>
                        </div>
                </div>
            </div>
        )
    }
    export default Card;
