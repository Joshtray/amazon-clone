import React, { useEffect, useState } from 'react'
import './Orders.css'
import Product from './Product'
import Item from '../../data/Item'
import { API, graphqlOperation }from 'aws-amplify'
import { listProducts } from '../../graphql/queries'

const Orders = () => {
    const [product, setProduct] = useState([])
    const fetchItems = async () => {
        const itemList = await API.graphql(graphqlOperation(listProducts))
        setProduct(itemList.data.listProducts.items)
    }
    useEffect(() => {
        fetchItems()
    }, [])
    return (
        <ul className = "product_list">
            {product.map((item) => (<Product product={item} />))}
        </ul>
    )
}

export default Orders
