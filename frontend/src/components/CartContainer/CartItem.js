import React from 'react';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'; 
import { addCart, deleteCart } from '../../actions/cart';

export const CartItem = (props) => {

    return (
            <li className="list-item">
                <span className="titulo">{props.title}</span>
                <span className="precio">{props.price*props.count+'$'}</span>
                <FontAwesomeIcon icon={faPlus} style={{'cursor':'pointer'}}onClick={() => {props.addCart(props)}} />
                <span className="cantidad">{props.count}</span>
                <FontAwesomeIcon icon={faMinus} style={{'cursor':'pointer'}} onClick={() => {props.deleteCart(props)}} />
              

            </li>
    ); 

}

export default connect (null,{ addCart,deleteCart }) (CartItem) ; 