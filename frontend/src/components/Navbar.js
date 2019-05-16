import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/user';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {searchProduct} from '../actions/product'
import { setCurrentPage } from '../actions/pagination'

class Navbar extends Component {

    onLogout = (e) => {
        e.preventDefault();
      
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav ml-auto">
          
            
            <li className="nav-item">
                 <Link className="nav-link" to="/order">  <FontAwesomeIcon icon={faHistory} /></Link>
            </li>
            <li>
                <Link to="/login" className="nav-link" onClick={this.onLogout}><FontAwesomeIcon icon={faSignOutAlt} /></Link>
            </li>    
            </ul>
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register"><FontAwesomeIcon icon={faUserAlt} /></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login"><FontAwesomeIcon icon={faSignInAlt} /></Link>
            </li>
        </ul>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-light color-nav">
                <Link className="navbar-brand" to="/home"><FontAwesomeIcon icon={faShoppingBasket} /></Link>
                <input hidden={!isAuthenticated} style ={{'width':'600px','position':'relative'}}type="text" className="form-control" onChange={(event) => {this.props.searchProduct(event); this.props.setCurrentPage(1)}} placeholder="Search Product"/>
               
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser,searchProduct,setCurrentPage })(withRouter(Navbar));