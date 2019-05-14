import React, { Component } from 'react';
import { restoreLogin } from '../actions/user';
import { connect } from 'react-redux';
import  CategoryContainer  from './CategoryContainer/CategoryContainer';
import  ProductContainer  from './ProductContainer/ProductContainer';
import  CartContainer  from './CartContainer/CartContainer';
import './Home.css';

export class Home extends Component {
    componentDidMount(){
        this.props.restoreLogin(this.props.history,'/login'); 
    }
    render() {
        return (
            <div>
               <CategoryContainer />
               <div className="container">
                    <div className="row">
                        <ProductContainer />
                         <CartContainer />
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default connect(null,{restoreLogin})(Home);