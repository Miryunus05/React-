import { NavLink } from 'react-router-dom'
import React, { useEffect , useState} from 'react'
import {backendUrl} from "../constantos/backendUrl"
import axios from 'axios'
import img1 from "../assets/Logos.svg"
import img2 from "../assets/arrow.svg"
import images from "../assets/image1.png"
import images2 from "../assets/images2.png"
import images3 from "../assets/image3.png"
import images4 from "../assets/image4.png"
import img3 from "../assets/menu.svg"
import img4 from "../assets/filtr.svg"
import img5 from "../assets/Vectr.svg"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"

export default function Shop() {




    return (
        <div>
            <div className='fon'>
                <div className='fon-child'>
                    <img src={img1} alt="" />
                    <h1>Shop</h1>
                    <span>
                        <p>Home  </p>
                        <img src={img2} alt="" />
                        <p> Shop</p>
                    </span>
                </div>
            </div>
            <div className='filtr '>
                <div className='flex gap-6 border-r-slate-400'>
                    <span className='flex gap-3'>
                        <img src={img4} alt="" />
                        <h5>Filter</h5>

                    </span>
                    <img src={img5} alt="" />
                    <img src={img3} alt="" />
                    |
                    <p className='showing'>Showing 1–16 of 32 results</p>
                </div>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-4'>
                        <p className='short'>Show</p>
                        <input className='w-[55px] h-[55px] text-center outline-none' type="namber" placeholder='16' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='short'>Short by</p>
                        <input className='w-[188px] h-[55px] text-center outline-none' type="text" placeholder='Default' />
                    </div>
                </div>
            </div>

            <div className='wrapper'>

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


                <div className='BN flex gap-6'>
                    <span>Before</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>...</span>
                    <span>Next</span>
                </div>
            </div>
            <div className='inner'>
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
