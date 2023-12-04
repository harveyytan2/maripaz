import React from 'react'
import { Link } from 'react-router-dom' 

function Women({ addProductsToCart, addToWishlist }) {

  const products = [
    {
        id: 6,
        name: "Men Sqaure Frame Fashion Glasses",
        price: 199,
        img: "img/shop/women-shop/p1.jpg"
    },{
        id: 7,
        name: "Men Ribbed Knit Top",
        price: 599,
        img: "img/shop//women-shop/pp1.jpg"
    },{
        id: 8,
        name: "Men Ribbed Knit Top",
        price: 499,
        img: "img/shop//women-shop/s1.jpg"
    },{
        id: 9,
        name: "Manfinity Basics Men Solid Crew Neck Tee",
        price: 499,
        img: "img/shop//women-shop/t1.jpg"
    },{
        id: 10,
        name: "Men Simple Layered Bracelet",
        price: 799,
        img: "img/shop//women-shop/p1.jpg"
    }];



  return (
    <>
      <section id="category">
            <Link to="/polo"><button>Polo</button></Link>
            <Link to="/tshirt"><button>T-Shirts</button></Link>
            <Link to="/pants"><button>Pants</button></Link>
            <Link to="/shorts"><button>Shorts</button></Link>
            <Link to="/oversize"><button>Oversized T-Shirts</button></Link>
          </section>
    <section id="product1" className="section-p1">
        <p>Women Fashion</p>
        <div className="pro-container">
            {products.map((product) => (
                <div className="pro" key={product.id}>
                <img src={product.img} alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5 className="product-name">{product.name}</h5>
                    <h4 className="product-price">P{product.price}</h4>
                </div>
                <button className="btn add-cart-btn" onClick={() => addProductsToCart(product)}>Add to Cart</button>
                <button className="fav" onClick={() => addToWishlist(product)}><i class="fa-regular fa-heart"></i></button>
            </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Women
