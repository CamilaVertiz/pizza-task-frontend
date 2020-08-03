import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../context/Provider'
import Loading from '../../utils/Loading'
import url from '../../utils/url'
import Card from './Card'
import axios from 'axios'

const Products = () => {  
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const feedPizzas = async () => {
        setLoading( true );
        try{       
            const pizzasRes = await axios.get(`${url}/api/pizza`)    
            setPizzas( pizzasRes.data );
            setLoading( false );
        } catch(err){
            
        }
    };
    
    useEffect(() => {    
        feedPizzas();
    }, []);    
    
    return (
        <div className="container products">
            {loading ? <Loading /> : <Card pizzas={pizzas}/> }
        </div>
   );
}

export default Products;
