import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logoutInitiate} from '../Redux/action';
const Header =()=>{
    const {user, cart}= useSelector((state)=>state.data);
    let dispatch= useDispatch();
    const authHandle =() =>{
        if(user){
            dispatch(logoutInitiate());
        }
    };
    return(
        <div className="ui fixed menu">
        <div className="ui container center" style={{display:"flex", justifyContent:"space-between"}} >
        <div><h2>FakeShop</h2> </div>
        <div> <ul style={{display:"flex", listStyleType:"none"}}>
        <li style={{padding:14, fontSize:18}}><Link to="/checkout"> Cart({cart && cart.length}) </Link></li>
        <li  style={{padding:14, fontSize:18}}>
        <Link to={`${user ? "/" : "/login"}`} >
        <div>
        <h3>Hii,&nbsp;<span>{user ? user.email: "Guest"}{""}</span>&nbsp;&nbsp;<span onClick={authHandle}>{user ? "Sign Out" : "Sign In"}</span></h3>
        </div>
        </Link></li>
        </ul> </div>
        {/* <div style={{display:"flex", justifyContent:"space-between"}}>
            <div><h2>FakeShop</h2> </div>
            <div> <ul style={{display:"flex", listStyleType:"none"}}><li>Sign In</li><li>Cart</li></ul> </div>
        </div> */}
           
           
        </div>

        </div>
    )
}
export default Header;