import { Storage, API, graphqlOperation, Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { createCartProduct, updateProduct } from '../../graphql/mutations'
import { getUser } from '../../graphql/queries'
import './Product.css'

const Product = ({ product }) => {
    const [user, setUser] = useState(null)
    const history = useHistory()
    const fetchImage = async () => {
        const signedUrl = await Storage.get(product.id + '.jpeg')
        await API.graphql(graphqlOperation(updateProduct, {input: {id: product.id, imageUrl: signedUrl}}))
    }
    const getUserInfo = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        setUser(userData)
        console.log(userData)
    }
    const onClick = async () => {
        const newCartProduct = await API.graphql(graphqlOperation(createCartProduct, {input: {cartID: user.data.getUser.cart.id, productID: product.id}}))
        console.log(newCartProduct)
        history.push('/cart')
    }
    useEffect(() => {
        fetchImage()
        getUserInfo()
    }, [])
    return (
        <li className ="product_block">
            <a className="badges">Best Seller</a>
            <img src={product.imageUrl} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={onClick}>Add to Cart</button>
        </li>
    )
}

export default Product
