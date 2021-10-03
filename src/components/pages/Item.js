import React from 'react'
import './Item.css'
import styled from 'styled-components'
import Product from './Product'

const Item = ({ product }) => {
    return (
        <Productd>
         <Picture>
           <img src={product.imageUrl} />
         </Picture>
         <Details>
           <p>{product.name}</p>
           <p>{product.category.name}</p>
           <p>{product.description}</p>
           <p>{product.price}</p>
           <p>{product.quantity}</p>
         </Details>
        </Productd>
    )
}

export default Item

const Productd = styled.div`
  margin: 0px 30px 0px 30px;
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px);
  align-items: center;
;
`
const Picture = styled.div`
  height: calc(80vh - 60px);
  width: 40%;
  box-sizing: border-box;
  img{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`
const Details = styled.div`
  height: calc(80vh - 60px);
  width: 60%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 450;
  p:nth-child(2){
    :before{
      content:"Category: ";
      font-weight: 300;
    }
  }
  p:nth-child(3){
    display:flex;
    flex-direction: column;
    margin-left: 10px;
    :before{
      content:"Description:";
      font-weight: 300;
      margin-left: -10px;
    }
  }
  p:nth-child(4){
    display:flex;
    flex-direction: column;
    margin-left: 10px;
    :before{
      content:"Price:";
      font-weight: 300;
      margin-left: -10px;
    }
  }
  p:nth-child(5){
    display:flex;
    flex-direction: column;
    margin-left: 10px;
    :before{
      content:"Total quantity available:";
      font-weight: 300;
      margin-left: -10px;
    }
  }
`
