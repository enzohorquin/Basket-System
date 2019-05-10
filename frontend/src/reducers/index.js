import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import categoryItems from './categoryReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    categories:categoryItems
});