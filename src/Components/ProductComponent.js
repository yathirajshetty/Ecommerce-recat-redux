import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/gridstyles.css';
const ProductComponent =()=>{
    const { products } = useSelector((state) => state.data);
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
      },
      tablet: {
        breakpoint: { max: 1024, min: 480 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1
      }
    };
    const [searchKey,setSearchKey] = useState('')
    return(
        <>
        <Carousel responsive={responsive}>
        {products && products.map((product) => (
         <div className="ui link cards"><div className="card"> <div className="image"><img src={product.image} width="300" height="200"/></div><div className="content"> <div className="header">{product.title}</div></div></div></div> 
        ))}
          </Carousel>
<br />
       <input type="text" value={searchKey} onChange={(e) =>{ setSearchKey(e.target.value)}} style={{marginBottom: 40}} placeholder="search" />
           <div className="card-grid">
        {products && products.filter(obj =>obj.title.toLowerCase().includes(searchKey)).map((product) => (
         <div key={products.product_id}>
         <Link to={`/product/${product.id}`}>
         <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta price">$ {product.price}</div>
                <div className="meta">{product.category}</div>
              </div>
            </div>
          </div>
          </Link>
          </div>
            ))}
             

             </div> 
              
        </>
    );
};
export default ProductComponent;