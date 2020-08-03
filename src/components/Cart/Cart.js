import React, { useContext } from 'react'
import { Context } from '../../context/Provider'

const Cart =  () => { 
    const { state, setCart, total } = useContext(Context)

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

    return (                    
        <ul className = "list-unstyled">
            {state.cart.map((cart, index)=>(
                <li key={cart.id} data-testid={`cart${index}`} >
                        <span className="float-left">{cart.title} (x{cart.qty})</span> <span className="float-right"><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/>{((cart.price * state.currency.conversion) * cart.qty ).toFixed(2)} <i data-testid={`removeButton${index}`} className="fa fa-times red" aria-hidden="true" onClick={() => removefromCart(cart)}></i></span>   
                </li>           
            ))}   
            <li className="text-right">
                <span className="font-weight-bold">Total <i className={`fa fa-${state.currency.type}`} aria-hidden="true"/>{ total } </span>   
            </li>   
        </ul>
   );
}

export default Cart;