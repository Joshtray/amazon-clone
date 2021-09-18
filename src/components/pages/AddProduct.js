import React, { useState } from 'react'
import './AddProduct.css'
import { Storage, API, graphqlOperation } from 'aws-amplify'
import { findByLabelText } from '@testing-library/dom'
import { createProduct, updateProduct } from '../../graphql/mutations'

const AddProduct = () => {
    const [image, setImage] = useState()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState('')
    var imageFormat = ''


    const onChange = (e) => {
        setImage(e.target.files[0])
    }

    const onSubmit = async () => {
        if (image.type !== "image/jpeg" && image.type !== "image/png" && image.type !== "image/jpg") {
            setError('Unsupported file format. Only .png, .jpeg, and .jpg files accepted')
            console.log(error)
        }
        else {
            imageFormat = image.type.split("image/").pop()
            const newProduct = await API.graphql(graphqlOperation(createProduct, {input: {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
            }} ))
            const id = newProduct.data.createProduct.id
            const imageId = id + '.' + imageFormat
            const result = await Storage.put(imageId, image)
        }
    }

    return (
        <div className="addproduct">
            {error && <p>{error}</p>}
            <input placeholder="Product Name" onChange={(e) => (setName(e.target.value))} />
            <textarea placeholder="Product Description" onChange={(e) => (setDescription(e.target.value))} ></textarea>
            <input type='file' onChange={onChange} />
            <input type="number" placeholder="Price" onChange={(e) => (setPrice(e.target.value))} />
            <input type="number" placeholder="Quantity" onChange={(e) => (setQuantity(e.target.value))} />
            <button onClick={onSubmit}>Create Product</button>
        </div>
    )
}

export default AddProduct
