import { Storage, API, graphqlOperation} from 'aws-amplify'
import React, { useEffect } from 'react'
import { updateProduct } from '../../graphql/mutations'
import './Product.css'

const Product = ({ product }) => {
    const fetchImage = async () => {
        const signedUrl = await Storage.get(product.id + '.jpeg')
        await API.graphql(graphqlOperation(updateProduct, {input: {id: product.id, imageUrl: signedUrl}}))
    }

    useEffect(() => {
        fetchImage()
    }, [])
    // await API.graphql(graphqlOperation(updateProduct, {input: {id: product.id, imageUrl: signedUrl}}))
    // console.log(signedUrl)
    return (
        <div>
            <img src={product.imageUrl} />
            <p>{product.name}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default Product
