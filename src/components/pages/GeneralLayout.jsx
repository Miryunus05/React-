import { Outlet, NavLink, Link } from 'react-router-dom'
import logo from "../assets/logo.svg"
import img1 from "../assets/heart.svg"
import img2 from "../assets/myAccount.svg"
import img3 from "../assets/search.svg"
import img4 from "../assets/shopping.svg"


import { useState } from 'react';

const Layout = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <nav className='flex justify-between items-center px-12 pt-5'>
      <NavLink to="/"><img src={logo} alt="" /></NavLink>
                    <ul className=' underline flex gap-12 p-4'>
                        <li ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-blue-300" : isActive ? "text-red-300" : "no-underline	"
                        } to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-blue-300" : isActive ? "text-red-300" : "no-underline	"
                        } to="/shop">Shop</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-blue-300" : isActive ? "text-red-300" : "no-underline	"
                        } to="/card">About</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-blue-300" : isActive ? "text-red-300" : "no-underline	"
                        } to="/contact">Contact</NavLink></li>
                    </ul>
                    <span className='flex gap-5'>
                        <NavLink to='/registratsiya'>Sign up</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </span>
                    <div>
                        <ul className='flex gap-9'>
                            <li><NavLink to="#"><img src={img2} alt="" /></NavLink></li>
                            <li><NavLink to="#"><img src={img3} alt="" /></NavLink></li>
                            <li><NavLink to="#"><img src={img1} alt="" /></NavLink></li>
                            <li><NavLink to="#"><img src={img4} alt="" /></NavLink></li>
                        </ul>
                    </div>
      </nav>
      <section>
        <Outlet />
      </section>
      <footer className='flex flex-col justify-center'>
      <div className='flex justify-center	 gap-36'>
                        <div className='funiro'>
                            <h2>Funiro.</h2><br />
                            <p>400 University Drive Suite 200 Coral <br /> Gables, <br />
                                FL 33134 USA</p>

                        </div>
                        <div className='links flex gap-36'>
                            <span>
                                <p>Links</p><br />
                                <Link className='leading-10	font-medium	'>Home</Link><br />
                                <Link className='leading-10	font-medium	'>Shop</Link><br />
                                <Link className='leading-10	font-medium	'>About</Link><br />
                                <Link className='leading-10	font-medium	'>Contact</Link>
                            </span>
                            <span>
                            <p>Help</p><br />
                                <Link className='leading-10	font-medium	'>Payment Options</Link><br />
                                <Link className='leading-10	font-medium	'>Returns</Link><br />
                                <Link className='leading-10	font-medium	'>Privacy Policies</Link>
                            </span>
                        </div>
                        <div className='inp'>
                            <p>Newsletter</p><br />
                            <div className='flex gap-2'>
                                <input className='border-b-2 pb-1 outline-none	' type="text" placeholder='Enter Your Email Address'/>
                                <NavLink className="pb-1 border-b-2">SUBSCRIBE</NavLink>
                            </div>
                        </div>

                    </div>
                    <hr className='w-10/12	' />
                        <p className='all'>2024 furino. All rights reverved</p>
      </footer>
    </div>
  );
};

export default Layout;
