import React from 'react';
import './Category.css'
import COLUMNS from '../../icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { selectCategoria } from '../../actions/category'; 
import { getProducts } from '../../actions/product';
import { setCurrentPage } from '../../actions/pagination'; 
import { connect } from 'react-redux';

export const Category = (props) => {
    let icono;
    icono = COLUMNS[props.id].icon;
    return (
            <li className="lista" onClick={() => {
                props.selectCategoria(props.id)
                props.getProducts(props.id)
                props.setCurrentPage(1)}}>
            <FontAwesomeIcon icon={icono}/>
            <div>
                {props.name}
            </div>

            </li>
    );
}

export default connect(null,{ selectCategoria,getProducts, setCurrentPage }) (Category);