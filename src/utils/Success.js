import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {       

    return (    
        <div className="row p-5">
            <div className=" form-group text-center col-md-12">      
              <h3 className="title mt-2 mb-5">Your order is on its way!</h3>
              <Link to="/" className="link"> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back To Store</Link>
            </div>
        </div> 
    );
}

export default Success;
