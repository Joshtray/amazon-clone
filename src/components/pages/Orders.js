import React, { useEffect, useState } from 'react'
import './Orders.css'
import Product from '../Product'
import Item from '../../data/Item'
import { Auth, API, graphqlOperation, Hub }from 'aws-amplify'
import { getCart, listProducts } from '../../graphql/queries'
import { useHistory } from 'react-router'

const Orders = () => {
    const fetchCart = async () => {
        try {
            await Auth.currentAuthenticatedUser()
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
    return (<div>ORDERS</div>)
}

export default Orders
