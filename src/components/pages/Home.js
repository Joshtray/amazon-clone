import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from './Product'
import Item from '../../data/Item'
import { API, graphqlOperation }from 'aws-amplify'
import { listProducts } from '../../graphql/queries'
import { useHistory } from 'react-router'

const Home = () => {
    const history = useHistory()
    const [product, setProduct] = useState([])
    const fetchItems = async () => {
        try {
            const itemList = await API.graphql(graphqlOperation(listProducts))
            setProduct(itemList.data.listProducts.items)
        }
        catch (e) {
            console.log(e)
            // history.push('/login')
        }
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

export default Home
