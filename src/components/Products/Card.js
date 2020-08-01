import React, { useContext } from 'react'
import { Context } from '../../context/Provider'
import url from '../../utils/url'

const Card = ( { pizzas } ) => {
    const { state, setCart } = useContext(Context)

    const addToCart = (pizza) => {
        const cart = [...state.cart]
        const index = cart.findIndex((x) => x.id === pizza.id)
            
        if(index === -1){
            const newPizza = { ...pizza, qty: 1 }
            setCart([...state.cart, newPizza])
        }else{
            cart[index].qty++
            setCart(cart)
        }
    }

    return (
        <div className="row">
        {pizzas.map((pizza)=>(
            <div className="col-lg-3 col-sm-6 item" key={pizza.id}>
                <div className="card item-card card-block">
                    <img src={`${url}` + '/' + pizza.image} />
                    <div className="card-content">
                        <h5 className="card-title">{pizza.title}</h5>
                        <p className="card-text">{pizza.description}</p>
                        <span><i className={`fa fa-${state.currency.type}`} aria-hidden="true"/> {(pizza.price * state.currency.conversion).toFixed(2)}</span>
                        <button className="btn btn-primary" onClick={() => addToCart(pizza)}>Add to cart</button>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
}

export default Card;