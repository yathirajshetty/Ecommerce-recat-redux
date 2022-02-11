import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from '../Components/ProductComponent';
import { loadProducts, getProductInitiate } from '../Redux/action';
import { Container } from 'semantic-ui-react';
import  ProductCategoryComponent from '../Components/ProductCategoryComponent';
const ProductListing =()=>{
    const products = useSelector((state) => state.data);
    const dispatch = useDispatch();
   
      useEffect(() => {
        dispatch(getProductInitiate());
      }, []);

    return(
        <>
            <ProductCategoryComponent />
            {/* <Container style={{marginTop: 100}}> */}
                <ProductComponent />
            {/* </Container> */}
        </>
    );
};
export default ProductListing;