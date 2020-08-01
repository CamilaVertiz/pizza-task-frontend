import React, { useContext } from 'react'
import { Context } from '../../context/Provider'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import axios from 'axios'

const Header = () => {
    const { state, setCurrency, total, quantity } = useContext(Context)

    const changeCurrency = async () => {
        if(state.currency.type === 'usd'){
             try{       
                 const conRes = await axios.get('https://api.exchangeratesapi.io/latest?base=USD') 
                 setCurrency({ ...state.currency, type: 'eur', conversion: conRes.data.rates.EUR , shipping: (state.shippingFixed * conRes.data.rates.EUR).toFixed(2) })            
             } catch(err){
                console.log(err)
             }
        }else{
             setCurrency({ ...state.currency, type:'usd', conversion: 1, shipping: state.shippingFixed * 1 })
        }       
    }
    return (
        <div className="header">
            <header className="header-fixed">
                <div className="header-limiter">
                    <a href="/"><span className="logo"></span> <h1 className="title">Pizza Task</h1></a> 
                   
                    <nav>
                        <h1>
                            <span className="currency-exchange" onClick={changeCurrency}></span> 
                            <span className="total"><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/>{ total }</span>
                            <span>
                                <span className="dropdown">
                                    <i className="fa fa-shopping-cart"></i>                                
                                    <span className="cart-count">{ quantity }</span>
                                    <div className={`dropdown-content ${state.cart.length > 0 ? "" : "hidden"}`}>
                                        <Cart />
                                        <Link to="/checkout" className="link">checkout  <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </span>     
                            </span>
                        </h1>
                    </nav>
                </div>
            </header>

            <div className="header-fixed-placeholder"></div>
        </div>
   );
}

export default Header;