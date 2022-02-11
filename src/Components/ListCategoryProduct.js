import React,{useEffect} from 'react';
import {getCategoryProductInitiate} from '../Redux/action';
import {useSelector,useDispatch} from 'react-redux';
const ListCategoryProduct =()=>{
    const {products}= useSelector(state => state.data);
    let dispatch= useDispatch();
    const category="mens's clothing"
    useEffect(()=>{
       dispatch(getCategoryProductInitiate(category));
    },[]);
    return(
        <>

        </>
    )
}
export default ListCategoryProduct;