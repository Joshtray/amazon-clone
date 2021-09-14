import React from 'react'
import './Product.css'

const Product = ({ product }) => {
    return (
        <div>
            <img src={product.imageUrl}></img>
            <p>{product.name}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default Product
