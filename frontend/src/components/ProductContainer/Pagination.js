import React from 'react'; 
import { connect } from 'react-redux'; 

import { setCurrentPage } from '../../actions/pagination'; 
import './Pagination.css';

export class Pagination extends React.Component {
    
    

handleClick = (event) => {
    this.props.setCurrentPage(Number(event.target.id));
  }

render(){

    const  currentPage  = this.props.currentPage;
    const productsPerPage = 10;
    // Logic for displaying page numbers
    const pageNumbers = [];
    const cant = this.props.products !== undefined ? this.props.products.length : 0 ;
    for (let i = 1; i <= Math.ceil( cant/ productsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        let className = number !== currentPage ? "page-item page-link page-i" : "page-item page-link page-i select-item"  ; 

        return (
          <li className={className}
            key={number}
            id={number}
            onClick={this.handleClick}
          >
          {number}
          </li>
        );
      });

    return(
                <ul className="pagination pagination-lg justify-content-center">
                    {renderPageNumbers}
                </ul>
            )
}

}

const mapStateToProps = (state) => ({
  
    products: state.products.products,
    currentPage:state.currentPage.currentPage
})

export default connect(mapStateToProps,{ setCurrentPage })(Pagination); 