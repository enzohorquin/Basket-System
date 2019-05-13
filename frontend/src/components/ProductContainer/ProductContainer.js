import React from 'react'; 
import { connect } from 'react-redux'; 
import { getProducts } from '../../actions/product'; 
import Product from './Product';
import './ProductContainer.css';
export class ProductContainer extends React.Component {
    
componentDidMount(){
    this.props.getProducts(this.props.categoria);
}

render(){
    
    return(<div className="container">
            <ul className="lista-container">
                {(this.props.products || []).map(product => (
                    <Product key={product.id} {...product}/>
                ))}
            </ul>
            </div>)
}

}

const mapStateToProps = (state) => ({
    categoria : state.categories.category,
    products: state.products.products
})

export default connect(mapStateToProps,{ getProducts })(ProductContainer); 