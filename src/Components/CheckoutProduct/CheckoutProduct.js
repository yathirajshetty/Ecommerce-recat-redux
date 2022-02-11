import React from 'react';
import {useDispatch} from 'react-redux';
import '../CheckoutProduct/CheckoutProduct.css';
import {removeCart} from '../../Redux/action';
const CheckoutProduct =({id,title,image,price})=>{
    let dispatch = useDispatch();
    const removeItemFromCart =()=>{
            dispatch(removeCart(id));
    };
        return(
            <>
             <div className="checkout-product">
           <img src={image} alt="" className="checkout-product-image" />
           <div className="checkout-product-info">
               <p className="checkout-product-title">{title}</p>
               <p className="checkout-product-price"><strong>$</strong><strong>{price}</strong></p>
            <button onClick={removeItemFromCart}>Remove from Cart</button>
           </div>
            </div> 
            </>
        )
}
export default CheckoutProduct;