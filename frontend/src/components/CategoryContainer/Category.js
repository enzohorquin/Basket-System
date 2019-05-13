import React from 'react';
import './Category.css'
import COLUMNS from '../../icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { selectCategoria } from '../../actions/category'; 
import { getProducts } from '../../actions/product';
import { connect } from 'react-redux';

export const Category = (props) => {
    let icono;
    icono = COLUMNS[props.id].icon;
    return (
            <li className="lista" onClick={() => {
                props.selectCategoria(props.id)
                props.getProducts(props.id)}}>
            <FontAwesomeIcon icon={icono}/>
            <div>
                {props.name}
            </div>

            </li>
    );
}

export default connect(null,{ selectCategoria,getProducts }) (Category);