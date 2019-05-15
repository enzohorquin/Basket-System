import React from 'react'; 
import './CartContainer.css'; 
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { requestOrder } from '../../actions/order';

export class CartContainer extends React.Component {

render(){

    let amount =0;
     amount = (this.props.cart || []).map(item =>{
       return item.price*item.count
    })
    let suma = amount.reduce((a, b) => a + b, 0);
    let total = this.props.cart.length !== 0 ? 'Total: '+suma+'$' : '' ;
    const button =this.props.cart.length !== 0 ? (<button tpye="button" onClick={   ()=> {this.props.requestOrder(this.props.cart)}} className="btn btn-primary boton" >Purchase</button>) : null;

    return (
        <div className="col-4 container-cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <ul className="list-style">
            {
                (this.props.cart || []).map(item => (<CartItem key={item.id} {...item} />))
            }
            <div className="row">
            <span className="total">{
               total
            }</span>
            {button}
            </div>
            </ul>
        </div>
    )
}
}

const mapStateToProps = (state) => ({
    cart:state.list.list
})
export default connect(mapStateToProps,{ requestOrder })(CartContainer);

/*
This is a web application where the user can shop differents products from our database. He filter products by different types of categorys or product tittle that are stored in our database.
Also, the user can add or delete any items from his cart.
Role in the Project 
    Full Stack Engineer

His Responsabilities include
Create the server and make the connections between the server and DB. Create all the API routes and controllers.
Design and create the React Components and connect them with the Redux Library. Make the integration between the Front-end and Back-end
Technologies and Tools
    React.JS, Redux:JS, Node.JS, Express.JS, MySQL, HTML, CSS, Bootstrap 4, JWT.io .
    */