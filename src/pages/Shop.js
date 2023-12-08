import React, { useEffect, useState } from 'react'


const products = [
  {
      id: 1231,
      name: "Men Sqaure Frame Fashion Glasses",
      price: 199,
      img: process.env.PUBLIC_URL + "/img/shop/accessory1.jpg"
  },{
      id: 241,
      name: "Men Ribbed Knit Top",
      price: 599,
      img: process.env.PUBLIC_URL + "/img/shop/w1.jpg"
  },{
      id: 33,
      name: "Men Ribbed Knit Top",
      price: 499,
      img: process.env.PUBLIC_URL + "/img/shop/accessory3.jpg"
  },{
      id: 42,
      name: "Manfinity Basics Men Solid Crew Neck Tee",
      price: 499,
      img: process.env.PUBLIC_URL + "/img/shop/w9.jpg"
  },{
      id: 51,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: process.env.PUBLIC_URL + "/img/shop/accessory5.jpg"
  },{
    id: 51,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/w7.jpg"
  },{
    id: 512423,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/accessory15.jpg"
  },{
    id: 51123,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/accessory13.jpg"
  },{
    id: 5167575,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/w5.jpg"
  },{
    id: 5112312,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/accessory5.jpg"
  },{
    id: 55435341,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/w4.jpg"
  },{
    id: 5176534,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/accessory10.jpg"
  },{
    id: 5112355,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/w11.jpg"
  },{
    id: 51867867,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/w13.jpg"
  },{
    id: 51867867,
    name: process.env.PUBLIC_URL + "/Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/accessory7.jpg"
  },{
    id: 51867867,
    name: "Men Simple Layered Bracelet",
    price: 799,
    img: process.env.PUBLIC_URL + "/img/shop/w16.jpg"
  }
];

function Shop({ addProductsToCart, addToWishlist }) {
  
    

  const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false);
    const detailPage = (Product) => {
        setDetail([{...Product}])
        setClose(true)
    }

  return (
    <>
    {
        close ? 
        <div className="detail_container">
        <div className="detail_contant">
            <button className="cls" onClick={() => setClose(false) }><i className="fa-solid fa-xmark"></i></button>
            {
                detail.map((x) => {
                    return(
                        <>
                        <div className="detail_info">
                            <div className="img-box">
                                <img src={x.img} alt={x.name} />
                            </div>
                            <div className="product_detail">
                            <h4>{x.name}</h4>

                                    <h2>{x.price}</h2>
                                    <button className="btn add-cart-btn" onClick={() => addProductsToCart(x)}>Add to Cart</button>
                                    <button className="fav" onClick={() => addToWishlist(x)}><i className="fa-regular fa-heart"></i></button>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak</p>
                                
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div> :null
    }
    
      <section id="product1" className="section-p1">
        <p>Shop</p>
        <div className="pro-container">
            {products.map((product) => (
                <div className="pro" key={product.id} onClick={() => detailPage (product)}>
                <img src={product.img} alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5 className="product-name">{product.name}</h5>
                    <h4 className="product-price">P{product.price}</h4>
                </div>
                <button className="btn add-cart-btn" onClick={() => addProductsToCart(product)}>Add to Cart</button>
                <button className="fav" onClick={() => addToWishlist(product) }><i className="fa-regular fa-heart"></i></button>
            </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Shop
