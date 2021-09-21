import React, { useEffect, useState } from "react";
import './header.css';
import { Link, useHistory } from 'react-router-dom'
import Auth from "@aws-amplify/auth";
import API from "@aws-amplify/api";
import { getUser, listCategories } from "../graphql/queries";
import { graphqlOperation, Hub } from "aws-amplify";

export default function Header () {
  const [dropdown, setDropdown] = useState('1')
  const [dropdown_class, setDropdown_class] = useState('')
  const [userInfo, setUserInfo] = useState({username: "Sign In"})
  const [cart, setCart] = useState(0)
  const [categories, setCategories] = useState([])

  const history = useHistory()
  const loggedIn = async () => {
    Hub.listen("auth", (event) => {
      if (event.payload.event === "signOut") {
        setUserInfo({username: "Sign In"})
        setCart(0)
      }
      else if (event.payload.event === "signIn") {
        getUserInfo()
      }
    })
  }
  const getCategories = async () => {
    const list = await API.graphql(graphqlOperation(listCategories))
    setCategories(list.data.listCategories.items)
    console.log(list.data.listCategories.items)
  }

  const getUserInfo = async () => {
    const userData = await Auth.currentAuthenticatedUser()
    setUserInfo(userData)
    if (userData) {
      const usrData = await API.graphql(graphqlOperation(getUser, { id: userData.attributes.sub }))
      if (usrData.data.getUser) {
        if (usrData.data.getUser.cart) {
          if (usrData.data.getUser.cart.cartProduct.items) {
            setCart(usrData.data.getUser.cart.cartProduct.items.length)
          }
        }
      }
    }
  }
  const update = async (event) => {
    setDropdown(event.target.value)
    if (event.target.value === "1"){
      history.push('/')
    }
    else {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].id === event.target.value) {
          history.push('/categories/' + categories[i].name)
        }
      }
    }
  }
  useEffect(() => {
    getUserInfo()
    loggedIn()
    getCategories()
  }, [])
  useEffect(() => {
    if (dropdown === "1") {
      setDropdown_class("width1")
    }
    else {
      setDropdown_class("width2")
    }
  }, [dropdown])
  return (
    <header>
      <section className="left-container">
        <Link to="/" className="logo" >
          <span></span>
        </Link>
        <Link to="/" className="direction">
          <span></span>
          <div>
            <p>Deliver to <span className="caps">{userInfo.username}</span></p> {/*Deliver to [user.name] capitalize first word*/}
            <span className="adress">
              <p>San Francisco, CA, </p><span>94102</span>{/* Location: [State] [Zip Code]*/}
            </span>
          </div>
        </Link>
      </section>
      <section className="search-bar">
        <form>
          <select defaultValue="1" id="searchDropdownBox" onChange={update} className={dropdown_class}>
            <option value='1'>All Departments</option>
            {categories.map((category)=>(<option value={category.id}>{category.name}</option>))}
          </select>
          <input id = "search-type"/>
          <input id="nav-search-submit-button" type="submit" value="Go"/>
        </form>
      </section>
      <section className="account-details">
        <Link to="/languages" className="languages">
          <span className="maps"></span>
          <span className="drop-arrow"></span>
        </Link>
        <Link to="/account" className="account">
          <div>
            <p>Hello, <span className = "caps">{userInfo.username}</span></p>
            <span className="bold span-flex">Account &#38; Lists <span></span></span>
          </div>
          <ul>
            <li>
              <h4>Your Account</h4>
              <a>Account</a>
              <a>Orders</a>
              <a>Sign Out</a>
            </li>
          </ul>
        </Link>
        <Link to="/orders" className="returns">
            <p>Returns <br/><span className="bold">&#38; Orders</span></p>
        </Link>
        <Link to="/cart" className="cart" >
          <span>
            <p>{cart}</p>{/* [Item.no] */}
          </span>
          <p>Cart</p>
        </Link>
      </section>
    </header>
    )
}
