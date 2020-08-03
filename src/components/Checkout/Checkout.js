import React, { useContext } from 'react'
import { Context } from '../../context/Provider'
import { Link } from 'react-router-dom'
import CheckoutCart from '../Cart/CheckoutCart'

const Checkout = () => {        
    const { state } = useContext(Context)

    return (
        <div className="container checkout mt-5">       
          <div className="row p-5">
              <div className=" form-group col-md-12">      
                <Link to="/" className="link"> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back To Store</Link>
                <h3 className="title mt-2 mb-5">Order Details</h3>
                {state.cart.length > 0 ?
                   <span>
                     <CheckoutCart />
                     <Link to="/payment" className="btn btn-primary btn-block mt-4"> Confirm <i className="fa fa-arrow-right" aria-hidden="true"></i></Link> 
                   </span>
                :                
                   <Link to="/" className="btn btn-primary btn-block mt-4"><i className="fa fa-arrow-left" aria-hidden="true"></i> Go Back </Link> 
                }
              </div>
          </div> 
        </div>
    );
}

export default Checkout;
