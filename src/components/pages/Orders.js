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
                    <p id = "date"><span>{item.createdAt.slice(0, 10)+ "  " + item.createdAt.slice(12, 16)+" GMT"}</span></p>
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
  p{
    margin: 0;
  }
  .cart_sec{
    section{
      margin-bottom: 60px;
      #date{
        display: flex;
        flex-direction: row;
        width: 100%;
        text-align: center;
        align-items: center;
        margin: 15px 0px 15px 0px; 
        span{
          width: 350px;
        }
        :before{
          content: "";
          display: block;
          border-top-width: 1px;
          border-top-style: solid;
          border-color: black;
          width: 100%;
        }
        :after{
          content: "";
          display: block;
          border-top-width: 1px;
          border-top-style: solid;
          border-color: black;
          width: 100%;
        }
      }
    }
    .product_list{
      .product_block{
        .content_block{
          #hide{
            display: block;
          }
          :hover{
            .hide{
              display: none;
            }
          }
        }
      }
    }
  }
`
