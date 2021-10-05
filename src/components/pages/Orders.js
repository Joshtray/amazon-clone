import { Auth, API, graphqlOperation, Hub } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getCart, getUser } from '../../graphql/queries'
import './Orders.css'
import Item from './Item.js'
import Product from '../Product'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { onDeleteCartProduct, onUpdateCartProduct } from '../../graphql/subscriptions'

const Orders = () => {
    const history = useHistory()
    const [orders, setOrders] = useState([])
    const fetchOrders = async () => {
      try {
          const userData = await Auth.currentAuthenticatedUser()
          if (userData) {
              const usrData = await API.graphql(graphqlOperation(getUser, {id: userData.attributes.sub}))
              console.log(usrData)
              setOrders(usrData.data.getUser.orders.items.reverse())
          }
      }
      catch (e) {
          console.log(e)
          history.push('/login')
          history.go(0)
      }
    }
    useEffect(() => {
        fetchOrders()
    }, [])

    useEffect(() => {
      const subscription = API.graphql(graphqlOperation(onDeleteCartProduct)).subscribe({
          next: async (data) => {
              fetchOrders()
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
        <Orderscontainer>
            <div className="cart_sec">

            {orders.map((item) => 
                <section key={item.id}>
                    <p>Delivered on {item.createdAt}</p>
                    <ul className = "product_list">
                        {item.orderProduct.items.map((prod) => (<Product key={prod.id} product={prod.product} cartProduct={prod} />))}
                    </ul>
                </section>
            )}    
            
            </div>
        </Orderscontainer>
    )
}

export default Orders


const Orderscontainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eaeded;
  min-height: calc(100vh - 60px);
  padding-left: 20px;
`
