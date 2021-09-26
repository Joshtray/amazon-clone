import React from 'react'
import './Item.css'
import styled from 'styled-components'
import Product from './Product'

const Item = ({ product }) => {
    return (
        <Productd>
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </Productd>
    )
}

export default Item

const Productd = styled.div`
  margin: 0px 30px 0px 30px;
`
