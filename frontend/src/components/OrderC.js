import React from 'react'; 
/* import './OrderContainer.css';  */
/* import Order from './Order'; */
import { connect } from 'react-redux'; 
/* import { getAllOrders } from '../../actions/order';
import { restoreLogin } from '../../actions/user';
 */
export class OrderC extends React.Component {

    // eslint-disable-next-line no-useless-constructor

    componentDidMount(){
     // eslint-disable-next-line no-unused-expressions
     //this.props.restoreLogin(this.props.history,'/login'); 
     console.log(this.props);
   
     
    }

    render(){
        
        
        return <div></div>; 
    }

}

const mapStateToProps = (state) => ({
    order:state.order.order
})

export default connect(mapStateToProps,null)(OrderC); 

