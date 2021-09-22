import { Auth, API, graphqlOperation, Hub } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getCart } from '../../graphql/queries'
import './Cart.css'
import Item from './Item.js'
import Product from './Product'

const Cart = () => {
    const history = useHistory()

    const [cart, setCart] = useState([])
    const fetchCart = async () => {
        try {
            const userData = await Auth.currentAuthenticatedUser()
            if (userData) {
                const cartList = await API.graphql(graphqlOperation(getCart, {userID: userData.attributes.sub}))
                setCart(cartList.data.getCart.cartProduct.items)
            }
        }
        catch (e) {
            console.log(e)
            history.push('/login')
            history.go(0)
        }
    }
    useEffect(() => {
        fetchCart()
    }, [])
    return (
      <div>
        <div className="cart_sec">
          <ul className = "product_list">
              {cart.map((item) => (<Product product={item.product} cartProduct={item} />))}
          </ul>
        </div>
        <div className="total_sec">

        </div>
      </div>

    )
}

export default Cart
