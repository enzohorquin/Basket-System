import axios from 'axios'; 
import jwt_decode from 'jwt-decode'; 
import { GET_ERRORS,SET_CURRENT_USER } from './type';
import setAuthToken from '../service/setAuthToken';

export const logIn = ( user ) =>  dispatch => {
     axios.post('http://localhost:3000/user/login',{

        email:user.email,
        password:user.password
        
    }).then(result => {
        console.log(result);
        const token  = result.data.data ;
        console.log(token);
        sessionStorage.setItem('user',token); 
                //setAuthToken(token);
                const decoded = jwt_decode(token);
                console.log(decoded);
                dispatch(setCurrentUser(decoded));

    }).catch(err =>{
        console.log(err);
    })
}
export const setCurrentUser = decoded => {
  return {
      type: SET_CURRENT_USER,
      payload: decoded
  }
}

const getToken = () =>{

    return sessionStorage.getItem('user'); 
}

export const getProfile = _ => {
    const token = getToken();
    const profile = jwt_decode(token);

    return profile;
  }
export const loggedIn = () => {
    try{
        const token = getToken();
        return token; 
      }
      catch(err){
        return false;
      }
}

export const register = ( newUser,history ) => dispatch => {
        return axios.post('http://localhost:3000/user/signup',{
        name:newUser.name,  
        email:newUser.email,
        password:newUser.password,
        password_confirm:newUser.password_confirm,
        adress:newUser.adress
    }).then(result => {
            history.push('/login');
    }).catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    });
    })

}
export const logoutUser = (history) => dispatch => {
  localStorage.removeItem('user');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/login');
}