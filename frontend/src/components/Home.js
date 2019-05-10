import React, { Component } from 'react';
import { restoreLogin } from '../actions/user';
import { connect } from 'react-redux';
import ProductContainer from './Container/ProductContainer';

export class Home extends Component {
    componentDidMount(){
        this.props.restoreLogin(this.props.history,'/login'); 
    }
    render() {
        return (
            <div style ={{textAlign:'center'}}>
                <ProductContainer />
            </div>
        );
    }
}

export default connect(null,{restoreLogin})(Home);