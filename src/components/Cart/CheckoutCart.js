import React, { useContext } from 'react'
import { Context } from '../../context/Provider'
import url from '../../utils/url'

const CheckoutCart =  () => { 
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
        <table>
            <tbody>
               {state.cart.map((cart, index)=>(
                    <tr key={cart.id} data-testid={`cart${index}`}  className="item">
                        <td scope="row" className="delete"><i className="fa fa-trash red" aria-hidden="true" onClick={() => deletefromCart(cart)}></i> </td>
                        <td> <img className="img-fluid" src={`${url}` + '/' + cart.image} /></td>
                        <td className="text-left">{cart.title}</td> 
                        <td className="text-right"><small><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/> {cart.price} </small></td>
                        <td className="text-center"><i data-testid={`removeButton${index}`} className="fa fa-minus red" aria-hidden="true" onClick={() => removefromCart(cart)}></i> <span className="quantity">{cart.qty}</span> <i data-testid={`addButton${index}`} className="fa fa-plus red" aria-hidden="true" onClick={() => addfromCart(cart)}></i></td>
                        <td className="total"><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/> {((cart.price * state.currency.conversion) * cart.qty ).toFixed(2)} </td>
                    </tr>
                ))} 
                <tr className="total-amount">
                    <td scope="row"></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td className="total text-right">Total </td>
                    <td className="total"><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/>{ total }</td>
                </tr>
            </tbody>
        </table>
   );
}

export default CheckoutCart;

