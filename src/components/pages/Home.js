import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from '../Product'
import Item from '../../data/Item'
import { API, graphqlOperation }from 'aws-amplify'
import { listProducts } from '../../graphql/queries'
import { useHistory } from 'react-router'
import styled from 'styled-components'

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
        <Product_list className = "product_list home">
            {product.map((item) => (<Product key={item.id} product={item} />))}
        </Product_list>
    )
}

export default Home

const Product_list = styled.div`
  display: grid;
`
