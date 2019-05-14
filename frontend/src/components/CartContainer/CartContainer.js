import React from 'react'; 
import './CartContainer.css'; 
import { connect } from 'react-redux';


export class CartContainer extends React.Component {

render(){
    return (
        <div className="col-4 container-cart">

        </div>
    )
}
}

const mapStateToProps = (state) => ({
    cart:state.list.list
})
export default connect(mapStateToProps,null)(CartContainer);

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