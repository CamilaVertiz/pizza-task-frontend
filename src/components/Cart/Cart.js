import React, { useContext, useEffect } from 'react'
import { Context } from '../../context/Provider'

const Cart =  () => { 
    const { state, setCart, total } = useContext(Context)

    const deletefromCart = (pizza) => {
        const cart = [...state.cart]
        const index = cart.findIndex((x) => x.id === pizza.id)

        if(index !== -1){
            cart.splice(index, 1)
            setCart(cart)

            setCart(cart)
        }
    }

    const removefromCart = (pizza) => {
        const cart = [...state.cart]
        const index = cart.findIndex((x) => x.id === pizza.id)

        if(index !== -1){            
            if(cart[index].qty === 1)
                 cart.splice(index, 1)
            else
                 cart[index].qty--
            
            setCart(cart)
        }
    }

    const addfromCart = (pizza) => {
        const cart = [...state.cart]
        const index = cart.findIndex((x) => x.id === pizza.id)

        if(index !== -1){
            cart[index].qty++
            setCart(cart)
        }
    }

    return (                    
        <ul className="list-unstyled cart-list">
            {state.cart.map((cart, index)=>(
                <li key={cart.id} data-testid={`cart${index}`} >
                        <span class="simple"><span className="float-left">{cart.title} (x{cart.qty})</span> <span className="float-right"><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/>{((cart.price * state.currency.conversion) * cart.qty ).toFixed(2)} <i data-testid={`removeButton${index}`} className="fa fa-times red" aria-hidden="true" onClick={() => removefromCart(cart)}></i></span></span>  
                        <span class="controls"><span className="float-left"><i className="fa fa-trash red" aria-hidden="true" onClick={() => deletefromCart(cart)}></i>  {cart.title} </span> <span className="float-right"><span className="pr-3"><i data-testid={`removeButton${index}`} className="fa fa-minus red" aria-hidden="true" onClick={() => removefromCart(cart)}></i> <span className="quantity">{cart.qty}</span> <i data-testid={`addButton${index}`} className="fa fa-plus red" aria-hidden="true" onClick={() => addfromCart(cart)}></i></span><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/>{((cart.price * state.currency.conversion) * cart.qty ).toFixed(2)} </span></span>      
                        <div class="clearfix"></div>
                </li>           
                
            ))}       
            <li className="shipping text-right">
                <span className="font-weight-bold"><small>Shipping</small> <i className={`fa fa-${state.currency.type}`} aria-hidden="true"/><small className="quantity">{ state.currency.shipping }</small> </span>   
                <div class="clearfix"></div>
            </li>   
            <li className="text-right">
                <span className="font-weight-bold">Total <i className={`fa fa-${state.currency.type}`} aria-hidden="true"/>{ total } </span>   
                <div class="clearfix"></div>
            </li>   
        </ul>
   );
}

export default Cart;