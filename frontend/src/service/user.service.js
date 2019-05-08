import axios from 'axios'; 
import jwt_decode from 'jwt-decode'; 

export const logIn = ( user ) => {
    return axios.post('http://localhost:3000/user/login',{

        email:user.email,
        password:user.password
        
    }).then(result => {
        sessionStorage.setItem('user',result.data); 
    }).catch(err =>{
        console.log(err); 
    })
}

const getToken = () =>{

    return sessionStorage.getItem('user'); 
}

export const getProfile = _ => {
    const token = getToken();
    const profile = jwt_decode(token);
    console.log(profile);
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

export const register = ( newUser ) => {
    return axios.post('http://localhost:3000/user/signup',{
        email:newUser.email,
        password:newUser.password,
        adress:newUser.adress
    }) ;

}