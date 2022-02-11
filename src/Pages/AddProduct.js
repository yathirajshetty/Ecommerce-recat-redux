import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { ProductInitiate} from '../Redux/action';
import {useNavigate} from 'react-router-dom';
const AddProduct =() =>{
    const [state,setState]= useState({
        id:'',
        title:'',
        price: '',
        description:'',
        category:'',
        image:''
    });
    const [error,setError]= useState("");
    let dispatch= useDispatch();
    const navigate = useNavigate();
    const inputChangehandle =(e)=>{
        const {name,value}= e.target;
        setState({...state,[name]: value});
    };
    const onSubmithangle =(e)=>{
        e.preventDefault();
        if(!title || !price || !description || !category || !image)
        {
            setError("Please Enter All Input Field");
        }
        else{
            dispatch(ProductInitiate(state));
            navigate("/");
            setError("");
        }
    }
    const {title,price,description,category,image}= state;
    return(
        <>
        <form onSubmit={onSubmithangle} style={{marginTop: 100, marginLeft: 50}}>
            <input type="text" name="title" value={title} onChange={inputChangehandle} placeholder="Title" /><br /><br />
            <input type="text" name="price" value={price} onChange={inputChangehandle} placeholder="price" /><br /><br />
            <input type="text" name="description" value={description} onChange={inputChangehandle} placeholder="description" /><br /><br />
            <input type="text" name="category" value={category} onChange={inputChangehandle} placeholder="category" /><br /><br />
            <input type="file" name="image" value={image} onChange={inputChangehandle}  /><br /><br />
            <button type="submit" onChange={inputChangehandle}>Add</button>
        </form>
        </>
    );
}
export default AddProduct;