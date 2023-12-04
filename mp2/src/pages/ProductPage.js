import React from 'react'


function ProductPage() {
  return (
    <section id="product-page" className="section-p1">
        <div className="single-pro-image">
            <img src="img/shop/accessory1.jpg" id="main-img" />
        </div>
        <div className="prod-details" >
          <div className="single-pro-details">
            <h6>Home / T-shirts</h6>
            <hr />
            <h4>Men Square Frame Glasses</h4>
            <h2>P399</h2>
            <button className="add-cart-btn">Add to cart</button>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak</p>
          </div>
        </div>
    </section>
  )
}

export default ProductPage
