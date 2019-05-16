import React from 'react';
import './Order.css';


export const Order = (props) =>{

    return (
        <li className="order-item">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                 <img src={props.thumbnail} alt={props.title}/>
                            </div>
                        <div className="col">
                             <span style={{'color':'#0066C0','fontSize':'15px'}}>{props.title}</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-2" style={{'color':'#B12704'}}>{props.price+'$'}</div>
                    <div className="col-2">{props.count}</div>
                </div>
            </div>
        </li>
    ); 
}

export default Order; 