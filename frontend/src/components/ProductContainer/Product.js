import React from 'react'; 
import './Product.css'; 
import {connect} from 'react-redux';
import {addCart} from '../../actions/cart';

export const Product = (props) =>  
    (
        <li className="container-products">
        <div>
            <img  src={props.thumbnail} alt={props.title} />  
            <div className="information">
                {props.price+ '$ - '+props.title} 
                <button className="button" onClick={() => {props.addCart(props)}}>Agregar Carrito</button>
            </div>
            </div>  
        </li>
    )


export default connect(null,{ addCart }) (Product); 

/*
<img  src={props.thumbnail} alt={props.title} />
                <div className="information">
                        {props.price+ ' - '+props.title}
                </div>

*/