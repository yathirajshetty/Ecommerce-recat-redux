import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductInitiate,addCart} from '../Redux/action';
const ProductDetails = () => {
  let dispatch = useDispatch();
  const {product} = useSelector((state) => state.data);
  const { productId } = useParams();
//   useEffect(() => {
//     dispatch( getSingleProductInitiate(productId));
//   }, []);
  useEffect(() => {
      if(productId && productId !=="")
      {
        dispatch(getSingleProductInitiate(productId));
      }
  }, [productId]);
  console.log(product.title);
  const {product_id,image, title, price, category, description}= product;
  console.log(title);
const onAddCart =()=>{
  
  const item ={
    product_id,
    title,
    image,
    price,
    category,
    description
  };
  dispatch(addCart(item));
};
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <button className="visible content" onClick={onAddCart} style={{border:"none", background:"none", color:"white"}} >Add to Cart</button>
                  {/* <div  className="visible content" >Add to Cart</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;