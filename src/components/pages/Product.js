import { Storage, API, graphqlOperation, Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { createCartProduct, deleteCartProduct, updateProduct } from '../../graphql/mutations'
import { getUser } from '../../graphql/queries'
import './Product.css'

const Product = (props) => {
  const { product, cartProduct } = props
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
    }
    const delProduct = async () => {
      await API.graphql(graphqlOperation(deleteCartProduct, {input: {id: cartProduct.id}}))
      history.go(0)
    }

    const onClick = async () => {
        const newCartProduct = await API.graphql(graphqlOperation(createCartProduct, {input: {cartID: user.data.getUser.cart.id, productID: product.id}}))
        history.push('/cart')
        history.go(0)
    }
    useEffect(() => {
        fetchImage()
        getUserInfo()
    }, [])
    return (
        <li className ="product_block">
            <a className="badges">{product.category.name}</a>
            <div className="img_block">
              <img src={product.imageUrl} />
            </div>
            <div className="content_block">
              <p>{product.name}</p>
              <p className="price">${product.price}</p>
              <button onClick={onClick}>Add to Cart</button>
              <div className = "hide">
                <select defaultValue="1" id="searchDropdownBox" className="dropdown_class">
                  <option value="1">Qty: 1</option>
                  <option value="2">Qty: 2</option>
                  <option value="3">Qty: 3</option>
                  <option value="4">Qty: 4</option>
                  <option value="5">Qty: 5</option>
                  <option value="6">Qty: 6</option>
                  <option value="7">Qty: 7</option>
                  <option value="8">Qty: 8</option>
                  <option value="9">Qty: 9</option>
                  <option value="10">Qty: 10+</option>
                </select>
                <i></i>
                <a onClick={delProduct}>Delete</a>
                <i></i>
                <a>Save for later</a>
                <i></i>
                <a>Compare with similar products</a>
              </div>
            </div>
            <div className="price_sec">
              <p>${product.price}</p>
            </div>
        </li>
    )
}

export default Product
