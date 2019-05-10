import React from 'react'; 
import { connect } from 'react-redux'; 
import { getCategories } from '../../actions/category'; 


export class ProductContainer extends React.Component {


   
    render(){
        return <div>{this.props.getCategories}</div>
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories
   
})

export default connect(mapStateToProps,{getCategories})(ProductContainer);