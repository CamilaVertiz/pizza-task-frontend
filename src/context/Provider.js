import React, { useEffect } from 'react'
import { useLocalStorage } from '../utils/useLocalStorage'

export const InitialState = {
    currency: { type: 'usd', conversion: 1, shipping: 0 },
    shippingFixed: 6.50,
    cart: [],
    header: true,
}

export const Context = React.createContext();
    const Provider = (props) => {
            const [state, setState] = useLocalStorage('globalKey', InitialState)

        const setCart = (cart) => {
            setState({
            ...state,
            cart,
            })
        }

        const setCurrency = (currency) => {
            setState({
            ...state,
            currency,
        })}

        const setHeader = (header) => {
            setState({
            ...state,
            header,
        })}
        
        let quantity = state.cart.reduce(function(prev, current) {
            return prev + current.qty
        }, 0);

        let total = (state.cart.reduce(function(prev, current) {
            return prev + (+current.price * current.qty) 
        }, state.cart.length > 0 ? state.shippingFixed : 0) * state.currency.conversion).toFixed(2);

        useEffect(() => {
            let shipping = 0;
            if( state.cart.length > 0)
                shipping = (state.shippingFixed * state.currency.conversion).toFixed(2);

            setCurrency({ ...state.currency, shipping})
        }, [state.cart]);    
        
        return (
            <Context.Provider value={{ state, setCurrency, setCart, setHeader, total, quantity}}>
            {props.children}
            </Context.Provider>
        )
    }

export default Provider;