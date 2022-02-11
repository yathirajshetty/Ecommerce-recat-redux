import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProductInitiate} from '../Redux/action';
import {useNavigate} from 'react-router-dom';
const ViewProduct =() =>{
    let dispatch = useDispatch();
    const {products} = useSelector(state => state.data);
    useEffect(()=>{
        dispatch(getProductInitiate());
    },[]);
    return(
        <>
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Description</th>
                <th>Image</th>
            </tr>
            {products && products.map((item,index) =>(
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td><img src={item.image} width="150" height="80" /></td>
            </tr>

            ))}
        </table>
        </>
    )
}
export default ViewProduct;