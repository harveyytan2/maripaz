import React, { useState } from 'react'


function Header({ setCartVisibility, productsInCart, setFavoriteVisible, productsInWishlist }) {

  const [ isMobile, setIsMobile ] = useState(false);

  return (
    
    <>

  

      <section id="header">
      
        <a href="#"><img src="img/logo.jpg" alt="" className="logo" /></a>
        <div>
            <ul className={ isMobile ? "navbar-mobile-links" : "navbar" } onClick={() => setIsMobile(false)}>
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/shop">Shops</a>
                    <div id="dropdown">
                        <ul>
                            <li><a href="/men">Men</a></li>
                            <li><a href="/women">Women</a></li>
                            <li><a href="/shoes">Shoes</a></li>
                            <li><a href="/accessories">Accessories</a></li>
                        </ul>
                    </div>
                
                </li>
                <li><a href="/blog">Blog</a></li>
                <li>
                  <a onClick={() => setFavoriteVisible(true)}><i className="fa-regular fa-heart">
                    {productsInWishlist.length > 0 && (<span className="span">{productsInWishlist.length}</span>)}
                    </i></a>
                </li>
                <li>
                  <a onClick={() => setCartVisibility(true)}><i className="fa-solid fa-cart-shopping shop">
                      {productsInCart.length > 0 && (<span className="span">{productsInCart.length}</span>)}
                    </i></a>
                </li>
                <li><a href="/signin">Sign In</a></li>
            </ul>
        </div>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i class="fa-regular fa-circle-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
        
    </section>   
    </>
  )
}


export default Header

