import * as types from "./actionType";
import {auth, db} from "../config/firebase";
import axios from "axios";
import { QuerySnapshot } from "@firebase/firestore";
export const addCart =(item)=>({
    type:types.ADD_CART,
    payload: item,
});
export const removeCart =(id)=>({
    type:types.REMOVE_CART,
    payload: id,
});
const setProducts =(products)=>({
    type: types.SET_PRODUCTS,
    payload: products
});

const setSingleProduct =(product)=>({
    type: types.SET_SELECTED_PRODUCTS,
    payload: product
});

const  registerStart =() =>({
    type: types.REGISTER_START,
});
const  registerSuccess =(user) =>({
    type: types.REGISTER_SUCCESS,
    payload: user
});
const  registerError =(error) =>({
    type: types.REGISTER_FAIL,
});

const  loginStart =() =>({
    type: types.LOGIN_START,
});
const  loginSuccess =(user) =>({
    type: types.LOGIN_SUCCESS,
    payload: user
});


const  loginError =(error) =>({
    type: types.LOGIN_FAIL,
    payload:error,
});

const addProduct =() =>({
    type: types.ADD_PRODUCT,
});
const getProduct =(product) =>({
    type: types.ADD_PRODUCT,
    payload: product,
});
const getSingleProduct =(product) =>({
    type: types.GET_SINGLEPRODUCT,
    payload: product,
});

export const  setUser =(user) =>({
    type: types.SET_USER,
    payload: user
});

const  logoutStart =() =>({
    type: types.LOGOUT_START,
});
const  logoutSuccess =() =>({
    type: types.LOGOUT_SUCCESS,
});


const  logoutError =(error) =>({
    type: types.LOGOUT_FAIL,
    payload:error,
});

const getCategory =(category) =>({
    type: types.GET_CATEGORY,
    payload: category,
});

// const getCategoryProduct =(product) =>({
//     type: types.GET_CATEGORYPRODUCT,
//     payload: product,
// });

// export const loadProducts = () => {
//     return function(dispatch)
//     {
//         axios.get(`${process.env.REACT_APP_API}`).then((resp)=>{
//             dispatch(setProducts(resp.data));
//         }).catch((error) => console.log(error));
//     }
// }

// export const getSingleProducts = (id) => {
//     return function(dispatch)
//     {
//         axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp)=>{
//             console.log("resp", resp)
//             dispatch(setSingleProduct(resp.data));
//         }).catch((error) => console.log(error));
//     }
// }
export const registerInitiate = (email,password) =>{
    return function(dispatch){
        dispatch(registerStart());
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) =>{
            dispatch(registerSuccess(user));
        }).catch((error) => dispatch(registerError(error.message)))
    }
}

export const loginInitiate = (email,password) =>{
    return function(dispatch){
        dispatch(loginStart());
        auth
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) =>{
            dispatch(loginSuccess(user));
        }).catch((error) => dispatch(loginError(error.message)))
    }
}
export const logoutInitiate = () =>{
    return function(dispatch){
        dispatch(logoutStart());
        auth
        .signOut((resp) =>{
            dispatch(logoutSuccess());
        })
        .catch((error) => dispatch(logoutError(error.message)))
    }
}

export const ProductInitiate = (product) =>{
    return function(dispatch){
       db.collection("products").doc().set(product);
       dispatch(addProduct());
    }
}

export const getProductInitiate = () =>{
    return function(dispatch){
       db.collection("products").onSnapshot((querySnapshot) =>{
           const products= [];
           querySnapshot.forEach((doc) =>{
               products.push({ ...doc.data(), id: doc.id});
           });
           dispatch(getProduct(products));
       });
      
    }
}


export const getSingleProductInitiate = (id) =>{
    return function(dispatch){
        db.collection("products").doc(id).get().then((product) =>{
            dispatch(getSingleProduct({ ...product.data() }));
            console.log(product.data);
        })
        .catch((error) => console.log(error));
        
    }

}
export const getCategoryInitiate = () =>{
    return function(dispatch){
       db.collection("categorys").onSnapshot((querySnapshot) =>{
           const category= [];
           querySnapshot.forEach((doc) =>{
            category.push({ ...doc.data(), id: doc.id});
           });
           dispatch(getCategory(category));
       });
      
    }
}

// export const getCategoryProductInitiate = (category) =>{
//     return function(dispatch){
//         db.collection("products").doc().get(category).then((product) =>{
//             dispatch(getCategoryProduct({ ...product.data() }));
//             console.log(product.data);
//         })
//         .catch((error) => console.log(error));
        
//     }

// }

