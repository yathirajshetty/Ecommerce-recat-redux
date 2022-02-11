
import React, {useEffect} from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./Components/ProductDetails";
import Register from './Register/Register';
import Login from './Login/Login';
import {useDispatch} from "react-redux";
import {auth} from "./config/firebase";
import {setUser} from "./Redux/action";
import Checkout from './containers/Checkout/Checkout';
import AddProduct from '../src/Pages/AddProduct';
import ViewProduct from '../src/Pages/ViewProduct';
import "./App.css";
function App() {
  let dispatch= useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        dispatch(setUser(authUser));
      }
      else{
        dispatch(setUser(null));
      }
    })
  },[dispatch]);
  return (
   <>
    <Router>
   <Header />
   <Routes>
     <Route path="/" element={<ProductListing />} />
     <Route path="/addproduct" element={<AddProduct />} />
     <Route path="/viewproduct" element={<ViewProduct />} />
     <Route path="/checkout" element={<Checkout />} />
     <Route path="/product/:productId" element={<ProductDetails />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route> 404 Not Found!</Route>
   </Routes>
   </Router>
   </>
  );
}

export default App;
