import React from 'react'; 
import './OrderC.css'
import { connect } from 'react-redux'; 
import { getAllOrders } from '../actions/order';
import { restoreLogin } from '../actions/user';
 import Order from './Order';
 export class OrderC extends React.Component {

   
    componentDidMount(){
     
     this.props.restoreLogin(this.props.history,'/login','/order'); 
     
     this.props.getAllOrders();
             
    }

    render(){
        
        return <div className="container-fluid">
                <div className="row">
                    <div className="col-8 orders">
                        <h2>Order History</h2>
                        <div className="row">
                            <div className="col-8"> 
                            </div>
                            <div className="col-2" style={{'fontSize':'13px'}}>Price</div>
                            <div className="col-2" style={{'fontSize':'13px'}}>Quantity</div>
                        </div>
                        <ul className="lista-orders">
                        {(this.props.order || []).map(item => (<Order key={item.id} {...item}/>))}

                        </ul>
                    </div>
                    
  </div>
          
        </div>; 
    }

}

const mapStateToProps = (state) => {

    return({
    order:state.orders.order
})}

export default connect(mapStateToProps,{getAllOrders, restoreLogin})(OrderC); 

