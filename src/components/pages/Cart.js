import React from 'react'
import './Cart.css'
import Item from './Item.js'

const Cart = () => {
    return (
        <div className="item-list">
            CART
            <div className="item-block">
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
            </div>
        </div>
    )
}

export default Cart
