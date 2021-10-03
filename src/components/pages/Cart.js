import { Auth, API, graphqlOperation, Hub } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getCart } from '../../graphql/queries'
import './Cart.css'
import Item from './Item.js'
import Product from './Product'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { onDeleteCartProduct, onUpdateCartProduct } from '../../graphql/subscriptions'

const Cart = () => {
    const history = useHistory()
    const [cartSum, setCartSum] = useState(0)
    const [cart, setCart] = useState([])
    const fetchCart = async () => {
        try {
            const userData = await Auth.currentAuthenticatedUser()
            if (userData) {
                const cartList = await API.graphql(graphqlOperation(getCart, {userID: userData.attributes.sub}))
                setCart(cartList.data.getCart.cartProduct.items)
                var cartItems = cartList.data.getCart.cartProduct.items
                var sum = 0
                for (let i=0; i<cartItems.length; i++) {
                  sum = sum + (cartItems[i].product.price)*(cartItems[i].quantity)
                }
                setCartSum(sum)
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

    useEffect(() => {
      const subscription = API.graphql(graphqlOperation(onDeleteCartProduct)).subscribe({
          next: async (data) => {
              fetchCart()
          }
      })
      return () => subscription.unsubscribe()
    }, [])

    useEffect(() => {
      const subscription = API.graphql(graphqlOperation(onUpdateCartProduct)).subscribe({
          next: async (data) => {
              fetchCart()
          }
      })
      return () => subscription.unsubscribe()
    }, [])

    return (
      <Cartcontainer>
        <div className="cart_sec">
          <ul className = "product_list">
              {cart.map((item) => (<Product product={item.product} cartProduct={item} />))}
          </ul>
        </div>
        <Total_sec>
          <p>Subtotal ({cart.length} item{cart.length > 1 && 's'}): ${cartSum}</p>
          <Link to='/'>Proceed to checkout</Link>
        </Total_sec>
      </Cartcontainer>

    )
}

export default Cart

const Cartcontainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eaeded;
  min-height: calc(100vh - 60px);
  padding-left: 20px;
`

const Total_sec = styled.div`
  margin: 20px 10px 0px 20px;
  margin-left: 20px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
  p{
    margin: 0px;
    padding: 15px 0px 15px 0px;
  }
  a{
    text-decoration: none;
    color: #443d12;
    padding: 4px 6px 4px 6px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    line-height: 19px;
    background-color: #ffd814;
    border-radius: 7px;
    flex: 1;
    transition: all .1s linear;
    &:hover{
      background-color: #F7CA00;
    }
  }
`
