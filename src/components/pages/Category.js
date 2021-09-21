import React, { useEffect, useState } from 'react'
import './Category.css'
import { listProducts, productByCategory } from '../../graphql/queries'
import { useHistory } from 'react-router'
import { API, graphqlOperation } from 'aws-amplify'
import Product from './Product'
import { useLocation } from 'react-router-dom'

const Category = ({ category }) => {
    const history = useHistory()
    const [product, setProduct] = useState([])
    const fetchItems = async () => {
        try {
            const itemList = await API.graphql(graphqlOperation(productByCategory, {categoryID: category.id}))
            console.log(itemList)
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
        <ul className = "product_list">
            {product.map((item) => (<Product product={item} />))}
        </ul>
      </div>
    )
}

export default Category
