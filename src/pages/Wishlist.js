import React from 'react'

function Wishlist({

    addProductsToCart,
    visible,
    result,
    onProductEliminate,
    onEliminate

}) {
  return (
    <div className="modal2" style={{ display: visible ? "block" : "none", }}>
        <div className="wishlist">
            <div className="header">
                <h2>Wishlist</h2>
                <button className="btn close-btn" onClick={onEliminate}>
                    <i className="fa-solid fa-xmark close"></i>
                </button>
            </div>
            <div className="cart-products">
                {result.length === 0 && (<span className="empty-text">Your wishlist is currently empty</span>)}
                {result.map(product => (
                    <div className="cart-product" key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <div className="product-info">
                            <h3 className="eme">{product.name}</h3>
                        </div>
                        <button className="btn add-cart" onClick={() => addProductsToCart(product)}>Add to Cart</button>
                        <button className="btn remove-btn2" onClick={() => onProductEliminate(product)}>Remove</button>
                    </div>
                ))}   
            </div>
            </div>
    </div>
  )
}

export default Wishlist
