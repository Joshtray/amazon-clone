import { Storage, API, graphqlOperation, Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { createCartProduct, deleteCartProduct, updateCartProduct, updateProduct } from '../../graphql/mutations'
import { getUser } from '../../graphql/queries'
import './Product.css'
import styled from 'styled-components'

const Product = (props) => {
  const { product, cartProduct } = props
  const [user, setUser] = useState(null)
  const history = useHistory()
  let quantities = []
  const updateQuantity = async (event) => {
    await API.graphql(graphqlOperation(updateCartProduct, {input: {id: cartProduct.id, quantity: event.target.value}}))
  }
  const fetchImage = async () => {
      const signedUrl = await Storage.get(product.id + '.jpeg')
      await API.graphql(graphqlOperation(updateProduct, {input: {id: product.id, imageUrl: signedUrl}}))
  }
  const getUserInfo = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      setUser(userData)
  }
  const goToItem = async () => {
    history.push('/item/' + product.id)
  }
  const delProduct = async () => {
    await API.graphql(graphqlOperation(deleteCartProduct, {input: {id: cartProduct.id}}))
  }

  const onClick = async () => {
      const newCartProduct = await API.graphql(graphqlOperation(createCartProduct, {input: {cartID: user.data.getUser.cart.id, productID: product.id, quantity: 1}}))
      history.push('/cart')
  }
  useEffect(() => {
      fetchImage()
      getUserInfo()
      for (let i=0; i<= product.quantity; i++) {
        quantities.push(i)
      }
  }, [])
  return (
      <Product_block className ="product_block">
          <a className="badges">{product.category.name}</a>
          <div className="img_block"  onClick={goToItem}>
            <img src={product.imageUrl} />
          </div>
          <div className="content_block">
            <p>{product.name}</p>
            <p className="price">${product.price}</p>
            <button onClick={onClick}>Add to Cart</button>
            <div className = "hide">
              <select defaultValue={cartProduct ? cartProduct.quantity : "0"} id="searchDropdownBox" className="dropdown_class" onChange={updateQuantity}>
                {quantities.map((quantity) => (<option key={quantity} value={quantity}>Qty: {quantity}</option>))}
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
      </Product_block>
  )
}

export default Product

const Product_block = styled.div`
  position: relative;
`
