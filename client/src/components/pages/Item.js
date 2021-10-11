import React, { useState } from 'react'
import './Item.css'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'
import Product from '../Product'
import { API, graphqlOperation } from 'aws-amplify'
import { createCartProduct } from '../../graphql/mutations'


const Item = ({ product }) => {
  const history = useHistory();
  const [user, setUser] = useState(null)
  const getUserInfo = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      setUser(userData)
  }
  const onClick = async () => {
    try {
      const newCartProduct = await API.graphql(graphqlOperation(createCartProduct, {input: {cartID: user.data.getUser.cart.id, productID: product.id, quantity: 1}}))
      history.push('/cart')
    }
    catch (e) {
      console.log(e)
      history.push('/login')
    }
  }
  useEffect(() => {
    getUserInfo();
  }, [])
  return (
      <Productd>
        <Picture>
          <img src={product.imageUrl} />
        </Picture>
        <Details>
          <p>{product.name}</p>
          <Link to={"/categories/" + product.category.name}>{product.category.name}</Link>
          <p>{product.description? product.description: "You're in for a suprise! ;)"}</p>
          <p>${product.price}</p>
          <p>{product.quantity}</p>
          <button onClick={onClick}>Add to Cart</button>
        </Details>
      </Productd>
  )
}

export default Item

const Productd = styled.div`
  margin: 30px 30px 0px 30px;
  display: flex;
  flex-direction: row;
  height: calc(90vh - 60px);
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  box-shadow: 7px 8px 9px 5px rgb(10 10 10 / 10%);
`
const Picture = styled.div`
  height: calc(80vh - 60px);
  width: 40%;
  margin-left: 60px;
  box-sizing: border-box;
  img{
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`
const Details = styled.div`
  height: calc(80vh - 60px);
  width: 60%;
  padding-left: 20px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  font-weight: 450;
  p:nth-child(1){
    margin: 0 0 0 0;
    font-size: 35px;
    font-weight: 700;
  }
  a{
    padding: 3px;
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    border-bottom: dashed orange 2px;
    width: fit-content;
    color: orange;
    :visited{
      color: orange;
      text-decoration: none; 
    }
  }
  p:nth-child(3){
    display:flex;
    flex-direction: column;
    font-size: 17px;
    :before{
      content:"Description:";
      font-weight: 700;
      color: orange;
    }
  }
  p:nth-child(4){
    display:flex;
    flex-direction: column;
    font-size: 17px;
    :before{
      content:"Price:";
      font-weight: 700;
      color: orange;
    }
  }
  p:nth-child(5){
    display:flex;
    flex-direction: column;
    font-size: 17px;
    :before{
      content:"Total quantity available:";
      font-weight: 700;
      color: orange;
    }
  }
  button {
    align-items: left;d
    border-style: solid;
    border-color: #a88734;
    border-width: 1px;
    background: linear-gradient(white, 10%, #f0c14b);
    width: 20%;
    border-radius: 3px;
    height: 30px;
    margin: 40px 0px;
  }
`
