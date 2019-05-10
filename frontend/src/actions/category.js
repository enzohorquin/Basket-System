import axios from 'axios'; 
import jwt_decode from 'jwt-decode'; 
import setAuthToken from '../service/setAuthToken';
import { getToken } from './user';

export const getCategories = () => dispatch  => {

    let config = {
        headers: {'Authorization': "Bearer " + getToken()}
    };
    console.log(config);
    axios.get('http://localhost:3000/category/all',config).then(result=>{
        dispatch(setCategories(result)); 
    }).catch(err => {
        dispatch(setCategories([]));    
    })

}

const setCategories = (categorias) =>{
    return {
        type:'SET_CATEGORIAS', 
        payload:categorias
    }
}