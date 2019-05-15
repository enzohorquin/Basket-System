import { SET_ORDERS} from '../actions/type';

const initialState = {
    order:[]
}

export const getOrders = (state = initialState, action) => {
    switch(action.type){
        case SET_ORDERS: {
            return Object.assign({},state, {order: action.payload}) ;
        }
        
        default: return {...state};
    }
}

export default getOrders; 