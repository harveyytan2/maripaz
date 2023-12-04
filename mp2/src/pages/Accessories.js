import React from 'react'


const products = [
    {
        id: 1231,
        name: "Men Sqaure Frame Fashion Glasses",
        price: 199,
        img: "img/shop/accessories/a1.jpg"
    },{
        id: 241,
        name: "Men Ribbed Knit Top",
        price: 599,
        img: "img/shop/accessories/a5.jpg"
    },{
        id: 33,
        name: "Men Ribbed Knit Top",
        price: 499,
        img: "img/shop/accessories/a6.jpg"
    },{
        id: 42,
        name: "Manfinity Basics Men Solid Crew Neck Tee",
        price: 499,
        img: "img/shop/accessories/a7.jpg"
    },{
        id: 51,
        name: "Men Simple Layered Bracelet",
        price: 799,
        img: "img/shop/accessories/a8.jpg"
    },{
      id: 51,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: "img/shop/accessories/menacce/a4.jpg"
    },{
      id: 512423,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: "img/shop/accessories/a9.jpg"
    },{
      id: 51123,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: "img/shop/accessories/menacce/a3.jpg"
    },{
      id: 5167575,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: "img/shop/accessories/a10.jpg"
    },{
      id: 5112355,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: "img/shop/accessories/menacce/a2.jpg"
    },{
      id: 51867867,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: "img/shop/accessories/menacce/a1.jpg"
    },{
      id: 51867867,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: "img/shop/accessories/a3.jpg"
    },{
      id: 51867867,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: "img/shop/accessories/a2.jpg"
    }
  ];

function Accessories({ addProductsToCart, addToWishlist }) {

    

  return (
    <>
      <section id="product1" className="section-p1">
        <p>Shop</p>
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

export default Accessories
