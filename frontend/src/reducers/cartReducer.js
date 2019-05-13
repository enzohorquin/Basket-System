import { ADD_CART,DELETE_CART,CLEAR_CART } from '../actions/type';
const initialState = {
    list:[]
    
}
export const cartItems = (state = initialState,action) =>{

    
    switch(action.type){

        case ADD_CART: {
            let itemExists=false;

            if(state.list !== undefined){
			let newBasket = state.list.map(basketItem => {
				if(basketItem.id === action.payload.id){
					itemExists=true;
					return {...basketItem, count: basketItem.count+1};
				}else{
					return basketItem;
				}
			});
        
			if(itemExists){
				return {
					...state,
					list: newBasket
				};
			}else{
				return {
					...state,
					list: [...state.list, {...action.payload, count: 1}]
				};
        }
    } else{
        return{
            list:[{...action.payload,count:1}]
        };
    }
    }
        case DELETE_CART:{
           
            if(state.list !== undefined){
			let newBasket = state.list.map(basketItem => {
				if(basketItem.id === action.payload.id){
                   
                    if(basketItem.count > 0)
                        return {...basketItem, count: basketItem.count-1};
                    else
                        {
                            return{ ...state,list:state.filter(item => item.id !== action.payload.id) }
                        }
				}   else    {
					return basketItem;
				    }
            });
        
            }
        else
        return {
            ...state,
            list: []
        };
    
    }
       
        case CLEAR_CART: {

            return {
				...state,
				list: []
			};
        }

        default: return {state};
    
    }
}
export default cartItems;