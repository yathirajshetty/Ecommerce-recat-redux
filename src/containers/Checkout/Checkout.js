import React from 'react';
import '../Checkout/Checkout.css';
import {useSelector} from 'react-redux';
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct';
import SubTotal from '../../Components/SubTotal/SubTotal';
const Checkout =()=>{
    const {cart, user} = useSelector((state)=> state.data);
   
    return(
        <>
        <div className="checkout">
            <div className="checkout-left">

            </div>
            <div>
                <h3>Hello, {user.email}</h3>
                <h2 className="checkout-title">
                    {cart.length ===0 
                    ? "Your Cart is Empty"
                    : "Your Cart"}
                </h2>
                { cart && cart.map((item) =>( 
                    <CheckoutProduct 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price} />
                ))}
            </div>
        </div>
        <div className="checkout-right">
                <SubTotal />
        </div>
        </>
    )
}
export default Checkout;