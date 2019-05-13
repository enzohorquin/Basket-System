import React, { Component } from 'react';
import { restoreLogin } from '../actions/user';
import { connect } from 'react-redux';
import  CategoryContainer  from './CategoryContainer/CategoryContainer';
import  ProductContainer  from './ProductContainer/ProductContainer';
import Product from './ProductContainer/Product';

export class Home extends Component {
    componentDidMount(){
        this.props.restoreLogin(this.props.history,'/login'); 
    }
    render() {
        return (
            <div>
               <CategoryContainer />
                <ProductContainer />
            </div>
            
        );
    }
}

export default connect(null,{restoreLogin})(Home);