import { CLEAR_CART,SET_ORDERS } from './type';
import axios from 'axios';
import { getToken } from './user';
export const requestOrder = (cart) => dispatch => {
    
    let array = cart.map (item => { 
        return {count:item.count, id:item.id}
    })

    let config = {
        headers: {'Authorization': 'Bearer ' + getToken()}
    };
    console.log(array);
    
    return axios.post('http://localhost:3000/order/create_order',{cart:array},config).then(result=>{
        console.log(result);
        dispatch({
            type:CLEAR_CART
        })
    }).catch(err => {
        console.log(err);   
    })
   


}

export const getAllOrders = () => dispatch => {
    let config = {
        headers: {'Authorization': 'Bearer ' + getToken()}
    };
   
     axios.post('http://localhost:3000/order/all',config).then(result=>{
        console.log(result);

        dispatch({
            type:SET_ORDERS,
            payload:result.data.data
        })
        
    }).catch(err => {
        console.log(err);   
    })
   
}