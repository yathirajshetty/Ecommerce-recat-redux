import React, {useState,useEffect} from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {loginInitiate} from '../Redux/action';
import {useNavigate} from "react-router-dom";

const Login =()=>{
    const [state,setState]= useState({
        email:'',
        password:''
    });
    const [error,setError]= useState("");
    const {user} =useSelector((state) => state.data);
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const inputChangehandle =(e) =>{
        const {name,value} = e.target;
        setState({ ...state,[name]: value});
    };
    const signin =(e)=>{
            e.preventDefault();
            if(!email || !password)
            {
                setError("Please Enter All Fields");
            }
            else{
                dispatch(loginInitiate(email,password));
                setError("");
            }
    }
    useEffect(() => {
        if(user)
        {
            navigate('/');
        }
    },[user,dispatch]);
    
    const {email,password}= state;

    return(
        <>
        <div className="login">
            <div className="login-container">
                <h1>Sign In</h1>
                <form onSubmit={signin}>
                    <h5>Email</h5>
                        <input type="text" name="email"  value={email} onChange={inputChangehandle} />
                    <h5>Password</h5>
                        <input type="password" name="password" value={password} onChange={inputChangehandle} />
                    <button type="submit" className="login-signIn" onChange={inputChangehandle}>Sign in</button>
                </form>
            </div>
            <p>New Account</p>
            <Link to="/register">
            <button className="login-register">Create Your New Account</button>
            </Link>
            {error && <p style={{color:"red"}}>{error}</p>}
        </div>
        </>
    )
}
export default Login