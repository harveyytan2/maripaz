import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section id="hero">

        <h4>Trend Style 2024</h4>
        <h2>This year's gift.</h2>
        <h1>Next year greatness.</h1>

        <p style={{fontSize: "12px"}}>Apparel | Accessories | Shoes | Bags</p>
        <button>View New Release</button>    
    </section>
    <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Christmas Collection. New Modern Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src="img/featured/featured1.jpg" alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5>Rose Gold Watch</h5>
                    <h4>P6500</h4>
                </div>
                <Link to="/shop"><button className="btn add-cart-btn">View Shop</button></Link>
            </div>
            <div className="pro">
                <img src="img/featured/featured3.3.jpg" alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5>Rose Gold Watch</h5>
                    <h4>P6500</h4>
                </div>
                <Link to="/shop"><button className="btn add-cart-btn">View Shop</button></Link>
            </div>
            <div className="pro">
                <img src="img/featured/featured3.jpg" alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5>Rose Gold Watch</h5>
                    <h4>P6500</h4>
                </div>
                <Link to="/shop"><button className="btn add-cart-btn">View Shop</button></Link>
            </div>
            <div className="pro">
                <img src="img/featured/featured4.jpg" alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5>Rose Gold Watch</h5>
                    <h4>P6500</h4>
                </div>
                <Link to="/shop"><button className="btn add-cart-btn">View Shop</button></Link>
            </div>
        </div>
    </section>
    <section id="banner" className="section-m1">
      <h4>Conquer any course style</h4>
      <h2>Up to <span>70% Off</span> - All t-Shirts & Accessories</h2>
      <a href='/shop'><button>Explore More</button></a>
    </section>
    <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Christmas Collection. New Modern Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src="img/featured/featured9.jpg" alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5>Rose Gold Watch</h5>
                    
                </div>
                <a href='/men'><button className="btn add-cart-btn">View more</button></a>
            </div>
            <div className="pro">
                <img src="img/featured/featured6.jpg" alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5>Rose Gold Watch</h5>
                    
                </div>
                <a href='/women'><button className="btn add-cart-btn">View more</button></a>
            </div>
            <div className="pro">
                <img src="img/shop/shoes/s6.jpg" alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5>Rose Gold Watch</h5>
                    
                </div>
                <a href='/shoes'><button className="btn add-cart-btn">View more</button></a>
            </div>
            <div className="pro">
                <img src="img/shop/accessories/a7.jpg" alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5>Rose Gold Watch</h5>
                    
                </div>
                <a href='/accessories'><button className="btn add-cart-btn">View more</button></a>
            </div>
        </div>
    </section>
    <section id="banner2" className="section-p1">
      <div className="banner-box">
      <h4>crazy deals</h4>
      <h2>buy 1 get 1 free</h2>
      <span>The best classic dress is on sale at Maripaz</span>
      <button>Learn More</button>

      </div>
      <div className="banner-box banner-box2">

      <h2>Respect your Rivalry.</h2>

      <button>Learn More</button>

      </div>
    </section>
    
    </>
    
  )
}

export default Home
