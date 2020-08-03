import React, { useContext } from 'react'
import { Context } from '../../context/Provider'

const CheckoutCart =  () => { 
    const { state, total } = useContext(Context)
    
    return (   
        <table>
            <tbody>
               {state.cart.map((cart, index)=>(
                    <tr key={cart.id} data-testid={`cart${index}`}  className="item">
                        <td colSpan="8"></td>
                        <td colSpan="2" className="text-right"><span>{cart.title} (x{cart.qty})</span> </td>
                        <td colSpan="2" ><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/> {((cart.price * state.currency.conversion) * cart.qty ).toFixed(2)} </td>
                    </tr>
                ))} 
                <tr className="shipping">                    
                    <td colSpan="8"></td>
                    <td colSpan="2" className="total text-right"><small>Shipping</small> </td>
                    <td colSpan="2" className="total"><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/><small className="quantity">{ state.currency.shipping }</small></td>
                </tr>
                <tr className="total-amount">                 
                    <td colSpan="8"></td>
                    <td colSpan="2" className="total text-right">Total </td>
                    <td colSpan="2" className="total"><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/>{ total }</td>
                </tr>
            </tbody>
        </table>
   );
}

export default CheckoutCart;

