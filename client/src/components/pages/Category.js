import React, { useEffect, useState } from 'react'
import './Category.css'
import { listProducts, productByCategory } from '../../graphql/queries'
import { useHistory } from 'react-router'
import { API, graphqlOperation } from 'aws-amplify'
import Product from '../Product'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Category = ({ category }) => {
    const history = useHistory()
    const [product, setProduct] = useState([])
    const fetchItems = async () => {
        try {
            const itemList = await API.graphql(graphqlOperation(productByCategory, {categoryID: category.id}))
            setProduct(itemList.data.productByCategory.items)
        }
        catch (e) {
            console.log(e)
            history.push('/login')
        }
    }
    useEffect(() => {
        fetchItems()
    }, [category])
    return (
      <div className="category">
        <h1>
         Category: {category.name}
        </h1>
        <Product_list className = "product_list">
            {product.map((item) => (<Product key={item.id} product={item} />))}
        </Product_list>
      </div>
    )
}

export default Category


const Product_list = styled.div`
  display: grid;
`
