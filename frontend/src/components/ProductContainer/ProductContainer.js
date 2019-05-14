import React from 'react'; 
import { connect } from 'react-redux'; 
import { getProducts } from '../../actions/product'; 
import { setCurrentPage } from '../../actions/pagination'; 
import Product from './Product';
import Pagination from './Pagination';
import './ProductContainer.css';

export class ProductContainer extends React.Component {
    
    
componentDidMount(){
    this.props.getProducts(this.props.categoria);
    
}
handleClick = (event) => {
    this.props.setCurrentPage(Number(event.target.id));
  }

render(){

    const  currentPage  = this.props.currentPage;
    const productsPerPage = 10;
    
    // Logic for displayingthis.props.products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProd = (this.props.products || []).slice(indexOfFirstProduct, indexOfLastProduct);

    return(<div className="col-8">
                <ul className="lista-container">
                     {(currentProd || []).map(product => (
                             <Product key={product.id} {...product}/>
                     ))}
                </ul>
               <Pagination />
            </div>)
}

}

const mapStateToProps = (state) => ({
    categoria : state.categories.category,
    products: state.products.products,
    currentPage:state.currentPage.currentPage
})

export default connect(mapStateToProps,{ getProducts,setCurrentPage })(ProductContainer); 