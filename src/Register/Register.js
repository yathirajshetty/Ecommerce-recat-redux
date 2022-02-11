import React, {useState} from 'react';
import '../Register/Register.css';
import {registerInitiate} from '../Redux/action';
import {useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom";
const Register =() =>{
    const [state,setState] = useState({
        email:"",
        password:""
    });
    const [error,setError]= useState("");
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const handleInputChange =(e) =>{
        let {name,value}= e.target;
            setState({ ...state, [name]: value});
    };
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        if( !email || !password)
        {
            setError("Please Enter All Fields");
        }
        else{
            dispatch(registerInitiate(email,password));
            navigate('/');
            setError("");
            console.log("Successfull Registered");
        }
    }
    const {email,password}= state;
    return(
        <>
            <div className="register">
                <div className="register-container">
                        <h1>Create Account</h1>
                        <form onSubmit={handleSubmit}>
                            <h5>Email</h5>
                            <input type="text" name="email" value={email} onChange={handleInputChange} />
                            <h5>Password</h5>
                            <input type="text"  name="password" value={password} onChange={handleInputChange} />
                            <button type="submit" onChange={handleInputChange}  className="continue">Continue</button>
                            <div className="detail">
                                <p>Already have a account ?</p>
                            </div>
                        </form>
                </div>
            </div>
            {error && <p style={{color: "red"}}>{error}</p>}
        </>
    );

}
export default Register;