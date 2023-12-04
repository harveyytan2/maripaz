import React from 'react';

function Cart({
    visibility, 
    products, 
    onProductRemove, 
    onClose, 
    onQuantityChange,
}) {

  return (
    <div 
        className="modal" 
        style={{
            display:  visibility 
            ? "block" 
            : "none",
            }}>
        <div className="shoppingCart">
            <div className="header">
            <h2>Shopping Cart</h2>
            <button className="btn close-btn" onClick={onClose}>
                <i className="fa-solid fa-xmark cls"></i>
            </button>
        </div>
        <div className="cart-products">
            {products.length === 0 && (
                <span className="empty-text">
                    Your cart is currently empty
                </span>
            )}
            {products.map(product =>(
                <div 
                    className="cart-product" 
                    key={product.id}>
                        <img 
                            src={product.img} 
                            alt={product.name} 
                        />
                    <div className="product-info">
                        <h3>
                            {product.name}
                        </h3>
                        <span className="product-price">
                            P{product.price * product.count}
                        </span>
                    </div>
                    <select 
                        className="count" 
                        value={
                            product.count
                        } onChange={(event) =>{
                            onQuantityChange(
                                product.id, 
                                event.target
                                .value
                            );
                        }}>
                            {[
                                ...Array(
                                    10
                                    ).keys(),
                            ].map(number => {
                                const num = 
                                    number + 1;
                                return (
                                    <option 
                                        value={
                                            num
                                        } 
                                        key={num}>
                                            {num}
                                    </option>
                                    );
                            })}
                            
                        </select>
                        <button 
                            className="btn remove-btn3" 
                            onClick={() => 
                                onProductRemove(
                                    product
                                )
                            }>
                                <i 
                                    class="fa-regular fa-trash-can">

                                </i>
                            </button>
                </div>
            ))}
            {products.length > 0 &&(
                <button className="btn checkout-btn">
                    Checkout
                </button>
            )}
        </div>
        </div>
                    
    </div>
  );
}

export default Cart;
