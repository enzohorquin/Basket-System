import React from 'react'; 
import './Product.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export const Product = (props) =>  
    (
        <li>
            <div className="container">
                <img  src={props.thumbnail} alt={props.title} />
                <div className="information">
                        {props.price+ ' - '+props.title}
                </div>
                <FontAwesomeIcon icon={faPlus}  onClick = {props.onClick} />>
            </div>
        </li>
    )
export default Product; 