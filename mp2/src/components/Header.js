import React, { useState } from 'react'
import { Link } from 'react-router-dom'; 


function Header({ setCartVisibility, productsInCart, setFavoriteVisible, productsInWishlist }) {

  const [ isMobile, setIsMobile ] = useState(false);

  return (
    
    <>
      <section id="header">
      
        <Link to="#"><img src={process.env.PUBLIC_URL + "/img/logo.jpg"} alt="" className="logo" /></Link >
        <div>
            <ul className={ isMobile ? "navbar-mobile-links" : "navbar" } onClick={() => setIsMobile(false)}>
                <li><Link to="/">Home</Link ></li>
                <li>
                    <Link to="/shop">Shops</Link >
                    <div id="dropdown">
                        <ul>
                            <li><Link to="/men">Men</Link></li>
                            <li><Link to="/women">Women</Link ></li>
                            <li><Link to="/shoes">Shoes</Link ></li>
                            <li><Link to="/accessories">Accessories</Link ></li>
                        </ul>
                    </div>
                
                </li>
                <li><Link to="/blog">Blog</Link ></li>
                <li>
                  <a onClick={() => setFavoriteVisible(true)}><i className="fa-regular fa-heart">
                    {productsInWishlist.length > 0 && (<span className="span">{productsInWishlist.length}</span>)}
                    </i></a >
                </li>
                <li>
                  <a onClick={() => setCartVisibility(true)}><i className="fa-solid fa-cart-shopping shop">
                      {productsInCart.length > 0 && (<span className="span">{productsInCart.length}</span>)}
                    </i></a >
                </li>
                <li><Link to="/signin">Sign In</Link></li>
            </ul>
        </div>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fa-regular fa-circle-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
        
    </section>   
    </>
  )
}


export default Header

