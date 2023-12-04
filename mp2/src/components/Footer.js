import React from 'react'

function Footer({ setFavoriteVisible, productsInWishlist }) {
  return (
    <>
      <footer className="section-p1">
        <div className="col">
          <img src="img/logo.jpg" className="logo2"/>
          <h4>Contact</h4>
          <p><strong>Address:</strong>#4 L.Dimayuga St. Lipa City, Batangas</p>
          <p><strong>Phone:</strong>(+63)926-004-5117</p>
          <p><strong>Address:</strong>#4 L.Dimayuga St. Lipa City, Batangas</p>
          <div className="follow">
            <h4>Follow us at:</h4>
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>

          </div>

        </div>

        <div className="col">
        <h4>About</h4>
           <a href="">About Us</a>
           <a href="">Privacy Policy</a>
           <a href="">Terms & Conditions</a>
           <a href="/contact">Contact Us</a>
        </div>

        <div className="col">
        <h4>My Account</h4>
           <a href="">Sign In</a>
           <a className="onClick" onClick={() => setFavoriteVisible(true)}>Wishlists/Favorite</a>
           <a href="">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From Google Store or Google Play</p>
          <div className="row">
            <i className="fa-brands fa-google-play play"></i>
            <i className="fa-brands fa-app-store store"></i>
          </div>
          <p>Secured Payment Gateways</p>
            <div>
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
            </div>
        </div>

        <div className="last-col">
          <p>&#169; 2023, Created by: Harvey Tan</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
