import React from 'react'
import './Orders.css'
import Product from './Product'
import Item from '../../data/Item'

const Orders = () => {
    return (
        <div>
            {Item.map((item) => (<Product product={item} />))}
            
        </div>
    )
}

export default Orders
