import React, {useEffect} from 'react';
import '../Styles/gridstyles.css';
import {useSelector,useDispatch} from "react-redux";
import {getCategoryInitiate} from '../Redux/action';
import {Link} from 'react-router-dom';
const ProductCategoryComponent =()=>{
    let dispatch= useDispatch();
    const {category} = useSelector(state => state.data);
    useEffect(()=>{
        dispatch(getCategoryInitiate());
    },[]);
    return(
        <>
        <div style={{backgroundColor:'aliceblue', paddingTop:16, paddingBottom: 15}}>
         <div className="category-card-grid" style={{marginTop: 100}}>
        {category && category.map((cat) => (
         <div key={cat.category_id}>
         <Link to='#'>
         <div className="ui link cards">
            <div className="card">
            <div style={{textAlign:"center"}}><h2 style={{position:"absolute"}} align="center">{cat.category_name}</h2></div>
              <div className="image" style={{marginTop:30}}>
                <img src={cat.category_image} alt={cat.category_name} />
              </div>
            </div>
          </div>
          </Link>
          </div>
            ))}
             

             </div> 
             </div>
        </>
    )
}
export default ProductCategoryComponent;