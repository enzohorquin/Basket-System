import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import categoryItems from './categoryReducer'
import getProducts from './productReducer';
import cartItems from './cartReducer';
export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    categories:categoryItems,
    products:getProducts,
    list:cartItems
});