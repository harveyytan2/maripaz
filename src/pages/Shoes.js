import React, { useState } from 'react'


const products = [
    {
        id: 9876967,
        name: "Men Sqaure Frame Fashion Glasses",
        price: 199,
        img: process.env.PUBLIC_URL + "/img/shop/shoes/s1.jpg"
    },{
        id: 45674567,
        name: "Men Ribbed Knit Top",
        price: 599,
        img: process.env.PUBLIC_URL + "/img/shop/shoes/s2.jpg"
    },{
        id: 2452435,
        name: "Men Ribbed Knit Top",
        price: 499,
        img: process.env.PUBLIC_URL + "/img/shop/shoes/s3.jpg"
    },{
        id: 12341234,
        name: "Manfinity Basics Men Solid Crew Neck Tee",
        price: 499,
        img: process.env.PUBLIC_URL + "/img/shop/shoes/s4.jpg"
    },{
        id: 5678568,
        name: "Men Simple Layered Bracelet",
        price: 799,
        img: process.env.PUBLIC_URL + "/img/shop/shoes/s5.jpg"
    },{
      id: 4567456,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: process.env.PUBLIC_URL + "/img/shop/shoes/s6.jpg"
    },{
      id: 52345,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: process.env.PUBLIC_URL + "/img/shop/shoes/s7.jpg"
    },{
      id: 56785678,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: process.env.PUBLIC_URL + "/img/shop/shoes/s8.jpg"
    },{
      id: 978569,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: process.env.PUBLIC_URL + "/img/shop/shoes/s9.jpg"
    },{
      id: 123124,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: process.env.PUBLIC_URL + "/img/shop/shoes/s11.jpg"
    },{
      id: 7543654,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: process.env.PUBLIC_URL + "/img/shop/shoes/s22.jpg"
    },{
      id: 4534534,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: process.env.PUBLIC_URL + "/img/shop/shoes/s33.jpg"
    },{
      id: 123433,
      name: "Men Simple Layered Bracelet",
      price: 799,
      img: process.env.PUBLIC_URL + "/img/shop/shoes/s44.jpg"
    }
  ];

function Shoes({ addProductsToCart, addToWishlist }) {

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
                <div className="pro" key={product.id} onClick={() => detailPage ( product )}>
                <img src={product.img} alt="" />
                <div className="des">
                    <span>Maripaz</span>
                    <h5 className="product-name">{product.name}</h5>
                    <h4 className="product-price">P{product.price}</h4>
                </div>
                <button className="btn add-cart-btn" onClick={() => addProductsToCart(product)}>Add to Cart</button>
                <button className="fav" onClick={() => addToWishlist(product)}><i className="fa-regular fa-heart"></i></button>
            </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Shoes
