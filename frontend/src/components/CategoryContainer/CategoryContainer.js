import React from 'react'; 
import { connect } from 'react-redux'; 
import { getCategories } from '../../actions/category'; 
import './CategoryContainer.css';
import Category from './Category';



export class CategoryContainer extends React.Component {
    
    componentDidMount(){
        this.props.getCategories();
        
        
    }
   
    render(){
        return  <nav className="navbar navbar-expand-lg navbar-danger color-nav">
                    <div className="header-categorias" >
                         <div className="categorias-container">
                            <ul className="categoria-lista">
                            
                            {(this.props.categories.categories || []).map(category =>(<Category key={category.id} id= {category.id} name={category.name}/>))}
                            </ul>

                        </div>
                    </div>
                </nav>
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories
   
})

export default connect(mapStateToProps,{ getCategories })(CategoryContainer);