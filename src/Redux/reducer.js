import * as types from './actionType';
const initialState ={
    products: [],
    product: [],
    cart:[],
    category: [],
    user: null,
    error: null,
    loading: true,
}
const useReducers = (state = initialState, action) =>{
    switch(action.type)
    {
        case types.ADD_CART:
        const newCart= [...state.cart, action.payload]
        return{
            ...state,
            // cart: newCart,
            loading:false,
        };
        case types.REMOVE_CART:
        let updateCart=[...state.cart];
        const index= state.cart.findIndex((item) => item.id === action.payload);
        if(index >=0){
            updateCart.splice(index, 1);
        }
        return{
            ...state,
            cart: updateCart
        };
        case types.ADD_PRODUCT:
                return{
                    ...state,
                    products: action.payload,
                    loading: false,
                };
        case types.GET_PRODUCTS:
                return{
                    ...state,
                    products: action.payload,
                    loading: false,
                };
        case types.GET_CATEGORYPRODUCT:
                return{
                    ...state,
                    product: action.payload,
                    loading: false,
                };

        case types.SET_PRODUCTS:
                return {
                    ...state,
                    products: action.payload,
                    loading: false,
                };
        case types.SET_SELECTED_PRODUCTS:
        return{
            ...state,
            product: action.payload,
            loading:false,
        };
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
        return{
            ...state,
            loading:true,
        };
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        return{
            ...state,
            user:action.payload,
            loading:false,
        };
        case types.LOGOUT_SUCCESS:
        return{
            ...state,
            user:null,
            loading:false,
        };
        case types.SET_USER:
        return{
            ...state,
            user:action.payload,
            loading:false,
        };
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGIN_FAIL:
        return{
            ...state,
            error: action.payload,
            loading:true,
        };
      
        case types.GET_CATEGORY:
                return{
                    ...state,
                    category: action.payload,
                    loading: false,
                };
        // case types.GET_CATEGORYPRODUCT:
        //         return{
        //             ...state,
        //             products: action.payload,
        //             loading: false,
        //         };

        default:
           return state;
    }
}
export default useReducers;