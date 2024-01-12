/* Necessary Modules from react-router */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChatBot from 'react-simple-chatbot'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

/* Components */
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import NewsLetter from './components/NewsLetter';
import Men from './pages/Men';
import Women from './pages/Women'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Signin from './pages/Signin'
import Shoes from './pages/Shoes'
import Signup from './pages/Signup'
import Accessories from './pages/Accessories';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import ProductPage from './pages/ProductPage';


function App() {


  /* Add to Cart */
  const [ cartsVisibility, setCartVisibility ] = useState(false);
  const [ productsInCart, setProducts ] = useState(JSON.parse(localStorage.getItem("shopping-cart")) || []);
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);



  const addProductsToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    }
    setProducts([...productsInCart, newProduct, ]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1){
        oldState[productsIndex].count = count;
      }
      return[... oldState];
    });
  };

  const onProductRemove = (product) =>{
    setProducts((oldState) => {const productsIndex = oldState.findIndex((item) => item.id === product.id);
    if (productsIndex !== -1){
      oldState.splice(productsIndex, 1);
    }
    return[... oldState];
  })
  }
  /* Favorite/Wishlist */

    const [ favoriteVisibility, setFavoriteVisible ] = useState(false);
    const [ productsInWishlist, setProductsWishlist ] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);
    useEffect(() => {
      localStorage.setItem("wishlist", JSON.stringify(productsInWishlist));
    }, [productsInWishlist]);

    const  addToWishlist = (product) => {
      const newWishlist = {
        ...product,
        count: 1,
      }
      setProductsWishlist([...productsInWishlist, newWishlist])
    }
    const onProductEliminate = (product) =>{
      setProductsWishlist((oldState) => {const productsIndex = oldState.findIndex((item) => item.id === product.id);
      if (productsIndex !== -1){
        oldState.splice(productsIndex, 1);
      }
      return[... oldState];
    })
    }

  return (
    <>
    <ChatBot
    steps={[
      {
        id: '1',
        message: 'Good day, how can I help you today?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'How to order', trigger: '3' },
          { value: 2, label: 'How to refund', trigger: '4' },
          { value: 3, label: 'Whats your Location', trigger: '5' },
        ],
      },
      {
        id: '3',
        message: 'Click the item you want. Click add to cart and then proceed to check out',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Contact thru via Email or Contacts. Then state the reason of refund',
        trigger: '2',
      },
      {
        id: '5',
        message: 'Lipa City, Batangas',
        trigger: '2',
      }
    ]}
    style={{height: "550px"}}
    
    floating={true}
  />
  <Cart 
    visibility={cartsVisibility} 
    products={productsInCart} 
    onClose={() => setCartVisibility(false)} 
    onQuantityChange={onQuantityChange} 
    onProductRemove={onProductRemove}
  />
  <Wishlist 
    visible={favoriteVisibility}
    result = {productsInWishlist}
    onEliminate={() => setFavoriteVisible(false)}
    addProductsToCart={addProductsToCart}
    onProductEliminate={onProductEliminate}
  
  />

      <Router>
        <Header 
          setCartVisibility={setCartVisibility} 
          productsInCart={productsInCart}
          setFavoriteVisible={setFavoriteVisible}
          productsInWishlist={productsInWishlist}

        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<Shop addProductsToCart={addProductsToCart} addToWishlist={addToWishlist} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/productpage" element={<ProductPage addProductsToCart={addProductsToCart}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/men" element ={<Men addProductsToCart={addProductsToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/women" element={<Women addProductsToCart={addProductsToCart} addToWishlist={addToWishlist} />} />
          <Route path="/shoes" element={<Shoes addProductsToCart={addProductsToCart} addToWishlist={addToWishlist} />} />
          <Route path="/accessories" element={<Accessories addProductsToCart={addProductsToCart} addToWishlist={addToWishlist} />} />

        </Routes>
        <NewsLetter />
        <Footer 
          setFavoriteVisible={setFavoriteVisible}
          productsInWishlist={productsInWishlist}
        
        />
      </Router>
    </>
  );
}


export default App


