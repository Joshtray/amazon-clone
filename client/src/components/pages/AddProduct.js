import React, { useEffect, useState } from 'react'
import './AddProduct.css'
import { Storage, API, graphqlOperation, Auth } from 'aws-amplify'
import { findByLabelText } from '@testing-library/dom'
import { createProduct, updateProduct } from '../../graphql/mutations'
import { useHistory } from 'react-router'
import { getUser, listCategories} from '../../graphql/queries'
import { createCategory } from '../../graphql/mutations'

const AddProduct = () => {
    const [image, setImage] = useState()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)
    const [page, setPage] = useState(<div></div>)
    const [categories, setCategories] = useState([])
    const history = useHistory()
    const [dropdown, setDropdown] = useState('')
    const [newCat, setNewCat] = useState('')
    var imageFormat = ''


    const onChange = (e) => {
        setImage(e.target.files[0])
    }
    const updateCat = (e) => {
        setDropdown(e.target.value)
    }

    const getCategories = async () => {
        const list = await API.graphql(graphqlOperation(listCategories))
        setCategories(list.data.listCategories.items)
        setPage(
            <div className="addproduct">
              <section className="error-message" >
                {error && <p>{error}</p>}
              </section>
                <input placeholder="Product Name" onChange={(e) => (setName(e.target.value))} />
                <textarea placeholder="Product Description" onChange={(e) => (setDescription(e.target.value))} ></textarea>
                <input type='file' onChange={onChange} />
                <select value={dropdown} onChange={updateCat}>
                    <option value="">Select a category...</option>
                    {categories.map((category)=>(<option value={category.id}>{category.name}</option>))}
                    <option value="new-cat">Create a new category</option>
                </select>
                {dropdown==="new-cat" && <div><input type="text" placeholder="Category name" onChange={(e) => (setNewCat(e.target.value))} />
                <button onClick={createNewCategory}>Create Category</button></div>}
                <input type="number" placeholder="Price" onChange={(e) => (setPrice(e.target.value))} />
                <input type="number" placeholder="Quantity" onChange={(e) => (setQuantity(e.target.value))} />
                <button onClick={onSubmit}>Create Product</button>
            </div>
        )
    }

    const createNewCategory = async () => {
        const newCatInfo = await API.graphql(graphqlOperation(createCategory, {input: {name: newCat}}))
        setDropdown(newCatInfo.data.createCategory.id)
        setPage(
            <div className="addproduct">
                {error && <p>{error}</p>}
                <input placeholder="Product Name" onChange={(e) => (setName(e.target.value))} />
                <textarea placeholder="Product Description" onChange={(e) => (setDescription(e.target.value))} ></textarea>
                <input type='file' onChange={onChange} />
                <select value={dropdown} onChange={updateCat}>
                    <option value="">Select a category...</option>
                    {categories.map((category)=>(<option value={category.id}>{category.name}</option>))}
                    <option value="new-cat">Create a new category</option>
                </select>
                {dropdown==="new-cat" && <div><input type="text" placeholder="Category name" onChange={(e) => (setNewCat(e.target.value))} />
                <button onClick={createNewCategory}>Create Category</button></div>}
                <input type="number" placeholder="Price" onChange={(e) => (setPrice(e.target.value))} />
                <input type="number" placeholder="Quantity" onChange={(e) => (setQuantity(e.target.value))} />
                <button onClick={onSubmit}>Create Product</button>
            </div>
        )
    }

    const getUserInfo = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
            setUser(userData)
            if (userData.data.getUser.accountType == "Basic") {
                history.push('/')
            }
            else {
                setPage(
                    <div className="addproduct">
                        {error && <p>{error}</p>}
                        <input placeholder="Product Name" onChange={(e) => (setName(e.target.value))} />
                        <textarea placeholder="Product Description" onChange={(e) => (setDescription(e.target.value))} ></textarea>
                        <input type='file' onChange={onChange} />
                        <select onChange={updateCat}>
                            <option value="">Select a category...</option>
                            {categories.map((category)=>(<option value={category.id}>{category.name}</option>))}
                            <option value="new-cat">Create a new category</option>
                        </select>
                        {dropdown==="new-cat" && <div><input type="text" placeholder="Category name" onChange={(e) => (setNewCat(e.target.value))} />
                        <button onClick={createNewCategory}>Create Category</button></div>}
                        <input type="number" placeholder="Price" onChange={(e) => (setPrice(e.target.value))} />
                        <input type="number" placeholder="Quantity" onChange={(e) => (setQuantity(e.target.value))} />
                        <button onClick={onSubmit}>Create Product</button>
                    </div>
                )
            }
        }
        catch (e) {
            console.log(e)
            history.push('/login')
        }
        }
    useEffect(() => {
        getUserInfo()
        getCategories()
    }, [])
    useEffect(() => {
        getCategories()
    }, [categories])
    const onSubmit = async () => {
        if (!name) {
            setError('Product name required')
        }
        else if (!dropdown || dropdown==="new-cat") {
            setError('Please select a category')
        }
        else if (!price) {
            setError('Product price required')
        }
        else if (!quantity) {
            setError('Available product quantity required')
        }
        else if (!image) {

        }
        else if (image.type !== "image/jpeg") {
            setError('Unsupported file format. Only .jpeg and .jpg files accepted')
            console.log(error)
        }
        else {
            imageFormat = image.type.split("image/").pop()
            const newProduct = await API.graphql(graphqlOperation(createProduct, {input: {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                sellerID: user.data.getUser.id,
                categoryID: dropdown
            }} ))
            const id = newProduct.data.createProduct.id
            const imageId = id + '.' + imageFormat
            const result = await Storage.put(imageId, image)
            history.push('/')
        }
    }

    return (
        <div>{page}</div>
    )
}

export default AddProduct
