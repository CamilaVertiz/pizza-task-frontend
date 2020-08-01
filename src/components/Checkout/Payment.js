import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../context/Provider'
import { Link } from 'react-router-dom'
import ErrorMessage from '../../utils/ErrorMessage'
import Success from '../../utils/Success'
import Loading from '../../utils/Loading'
import url from '../../utils/url'
import axios from 'axios'

const formState = {
   firstname: '',
   lastname: '',
   email: '',
   address: '',
   city: '',
   clientstate: '',
   zip: ''
};

const Payment = () => {    
    const { state, setCart, setHeader, total, quantity } = useContext(Context)
    const [error, setError] = useState()
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [{ firstname, lastname, email, address, city, clientstate, zip }, setState] = useState(formState)

    const onChange = e => {
      const { name, value } = e.target;
      setState(prevState => ({ ...prevState, [name]: value }));
    };

    const sendOrder = async () => {
        setLoading(true)
        try{  
            let config = {
                method: 'POST',
                crossdomain: true,
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                data: { 
                  cart: state.cart,
                  client: {
                     firstname, lastname, email, address, city, clientstate, zip, total, quantity
                  }
                }
            } 
            const orderRes = await axios(`${url}/api/order`, config)          

            if(orderRes.data.status === 'false'){    
              setError(orderRes.data.status)     
            }else{                      
              setCart([])
              setSuccess(true) 
              setLoading(false)
            }
        } catch(err){
           console.log(err)
        }
    };
    
    useEffect(() => {
        setHeader(false)
    }, []);

    return (
        <div className="container payment mt-5"> 
          {success ? 
              <Success />
          : loading ? <Loading/> :
          <div className="row p-5">            
              <div className="col-md-12">      
                <Link to="/checkout" className="link"> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back To Checkout</Link>
                <h3 className="title mt-2 mb-5">Delivery Details</h3>
              </div>
              <div className="form-group col-sm-4">
                <input id="firstname" type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" value={firstname} name="firstname" onChange={onChange}/>
              </div>
              
              <div className="form-group col-sm-4">
                <input id="lastname" type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" value={lastname} name="lastname" onChange={onChange}/>
              </div>
              
              <div className="form-group col-sm-4">
                <input id="email" type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" value={email} name="email" onChange={onChange}/>
              </div>

              <div className="form-group col-sm-12">
                <input id="address" type="text" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1" value={address} name="address" onChange={onChange}/>
              </div>
              
              <div className="form-group col-sm-4">
                <input id="city" type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon1" value={city} name="city" onChange={onChange}/>
              </div>
              
              <div className="form-group col-sm-4">
                <input id="state" type="text" className="form-control" placeholder="State" aria-label="State" aria-describedby="basic-addon1" value={clientstate} name="clientstate" onChange={onChange}/>
              </div>
              
              <div className="form-group col-sm-4">
                <input id="zip" type="text" className="form-control" placeholder="ZIP" aria-label="ZIP" aria-describedby="basic-addon1" value={zip} name="zip" onChange={onChange}/>
              </div>

              {error ? 
                <div className="form-group col-sm-12">
                  <ErrorMessage errores={error}  clearError={()=> setError(undefined)}/>
                </div>
                :
                ''
              }
              
              <div className="col-md-12">      
                <h3 className="title mt-2 mb-5">Credit Card Information</h3>
              </div>
              <div className="form-group col-sm-7">
                <input id="card-holder" type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-5">
                <div className="input-group expiration-date">
                  <input type="number" className="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
                  <span className="date-separator">/</span>
                  <input type="number" className="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div className="form-group col-sm-8">
                <input id="card-number" type="number" className="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-4">
                <input id="cvc" type="number" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-12">
                   <a className="btn btn-primary btn-block mt-4" onClick={sendOrder}> Finish </a>
              </div>
          </div> 
          }
      </div>
    );
}

export default Payment;
