import React from 'react';
import '../SubTotal/SubTotal.css';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getCartTotal} from '../../config/CartTotal';
import CurrencyFormat from 'react-currency-format';
const SubTotal =()=>{
    const {cart,user} =useSelector((state)=> state.data);
    let navigate= useNavigate();
    const handleCheckout =()=>{
        if(user){
            navigate('/payment');
        }
        else{
            navigate('/login');
        }
    };
        return(
            <>
            <div className="subtotal">
                    <CurrencyFormat
                    renderText={(value) => (
                        <>
                        <p style={{color:"black"}}>SubTotal ({cart.length} items) : <strong>{value}</strong></p>
                        <small className="subtotal-gift"><input type="checkbox" /> This Order Contains a gift</small>
                        </>
                    )} 
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"} />
                    <button onClick={handleCheckout}>Process to Checkout</button>
                </div>
            </>
        )
}
export default SubTotal;