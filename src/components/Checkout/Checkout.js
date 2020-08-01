import React, { useEffect, useContext } from 'react'
import { Context } from '../../context/Provider'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

const Checkout = () => {        
    const { setHeader } = useContext(Context)

    useEffect(() => {
        setHeader(false)
    }, []);

    return (
        <div className="container checkout mt-5">       
          <div className="row p-5">
              <div className=" form-group col-md-12">      
                <Link to="/" className="link"> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back To Store</Link>
                <h3 className="title mt-2 mb-5">Order Details</h3>
                <Cart />
                <Link to="/payment" className="btn btn-primary btn-block mt-4"> Proceed <i className="fa fa-arrow-right" aria-hidden="true"></i></Link> 
              </div>
          </div> 
        </div>
    );
}

export default Checkout;
