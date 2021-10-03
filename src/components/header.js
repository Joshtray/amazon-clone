import React, { useEffect, useState } from "react";
import './header.css';
import { Link, useHistory } from 'react-router-dom'
import Auth from "@aws-amplify/auth";
import API from "@aws-amplify/api";
import { getUser, listCategories } from "../graphql/queries";
import { updateUser } from "../graphql/mutations"
import { onCreateCartProduct, onDeleteCartProduct, onUpdateUser } from "../graphql/subscriptions"
import { graphqlOperation, Hub } from "aws-amplify";
import styled from 'styled-components'

export default function Header () {
  const [dropdown, setDropdown] = useState('1')
  const [currentUser, setCurrentUser] = useState(null)
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
      else if (event.payload.event === "tokenRefresh") {
      }
    })
    try {
      const usrInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })
      if (usrInfo) {
        // setCurrentUser(userInfo)
        const userData = await API.graphql(graphqlOperation(getUser, {id: usrInfo.attributes.sub}))
        if (userData.data.getUser) {
          setCurrentUser(userData.data.getUser)
        }
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  const signOut = async () => {
    await Auth.signOut()
    history.go(0)
    setCurrentUser(null)
  }

  const getCategories = async () => {
    try {
      const list = await API.graphql(graphqlOperation(listCategories))
      setCategories(list.data.listCategories.items)
    }
    catch (e) {
      console.log(e)
    }
  }

  const getUserInfo = async () => {
    try {
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
    catch (e) {
      console.log(e)
    }
  }
  const signInLink = () => {
    history.push('/login')
    history.go(0)
  }

  const upgradeAccount = async () => {
    await API.graphql(graphqlOperation(updateUser, {input: {id: userInfo.attributes.sub, accountType: "Seller" }}))
    history.go(0)
  }

  const downgradeAccount = async () => {
    await API.graphql(graphqlOperation(updateUser, {input: {id: userInfo.attributes.sub, accountType: "Basic" }}))
    history.go(0)
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
    const subscription = API.graphql(graphqlOperation(onCreateCartProduct)).subscribe({
        next: async (data) => {
            getUserInfo()
        }
    })
    return () => subscription.unsubscribe()
}, [])

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onDeleteCartProduct)).subscribe({
        next: async (data) => {
            getUserInfo()
        }
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onUpdateUser)).subscribe({
        next: async (data) => {
            getUserInfo()
        }
    })
    return () => subscription.unsubscribe()
  }, [])

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
          <div className="overlay"></div>
          <Headertext>
            <div>
              <p>Deliver to <span className="caps">{userInfo.username}</span></p> {/*Deliver to [user.name] capitalize first word*/}
              <span className="adress">
                <p>San Francisco, CA, </p><span>94102</span>{/* Location: [State] [Zip Code]*/}
              </span>
            </div>
          </Headertext>
          <Directionform className="show">
            <input placeholder="Street" />
            <input placeholder="City" />
            <input placeholder="State" />
            <input placeholder="Zip Code" />
            <textarea placeholder="Apt, Room No. , etc" ></textarea>
          </Directionform>
        </Link>
      </section>
      <section className="search-bar">
        <form>
          <div className="overlay">
          </div>
          <select defaultValue="1" id="searchDropdownBox" onChange={update} className={dropdown_class}>
            <option value='1'>All Departments</option>
            {categories.map((category)=>(<option key={category.id} value={category.id}>{category.name}</option>))}
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
        <div className = "account">
          <div className="overlay">
          </div>
          <div>
            <Link to="/account" className="account_link">
              <p>Hello, <span className = "caps">{userInfo.username}</span></p>
              <span className="bold span-flex">Account &#38; Lists <span></span></span>
            </Link>
          </div>
          <ul>
            <li>
              <h4>Your Account</h4>
              <Link to="/account">Account</Link>
              <Link to="/orders">Orders</Link>
              {currentUser && (currentUser.accountType !== "Basic" && <Link to="/add-product">Add a Product</Link>)}
              {currentUser && (currentUser.accountType === "Basic" ? <a onClick={upgradeAccount}>Upgrade to Seller account</a> : <a onClick={downgradeAccount}>Downgrade to Basic account</a>)
              }
              {currentUser ? <a onClick={signOut}>Sign Out</a> : <a onClick={signInLink}>Sign In</a> }
            </li>
          </ul>
        </div>
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

const Headertext = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px 8px 0px 0px;
  margin: auto 1px auto 1px;
  color: #CCCCCC;
  :before {
    content:"";
    margin-top: 8px;
    background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405937547_.png);
    background-repeat: repeat-x;
    color: #d6d6d6;
    background-size: 350px;
    background-position: -71px -378px;
    width: 15px;
    height: 18px;
    cursor: pointer;
    outline: -1px;
    padding-right: 3px;
  }
`
const Directionform = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  width: 350px;
  top: 150px;
  bottom: auto;
  left: calc(50vw - 175px);
  right: calc(50vw - 175px);
  z-index: 4;
  padding: 10px;
  background-color: #ffffff;
  input{
    font-size: 14px;
    height: 30px;
    padding: 5px;
    border: 1px solid transparent;
    border-color: #dbdbdb;
    border-radius: 3px;
    line-height: 1.5;
    color: #363636;
    box-shadow: inset 0 1px 2px rgb(10 10 10 / 10%);
    margin-bottom: 20px;
  }
  input:focus-visible{
    outline: 0px;
  }
  input:focus{
    border-color: #f0c14b;
  }
  textarea{
    font-size: 14px;
    max-height: 600px;
    min-height: 120px;
    width: 95%;
    padding: 10px;
    border: 1px solid transparent;
    border-color: #dbdbdb;
    border-radius: 3px;
    line-height: 1.5;
    color: #363636;
    box-shadow: inset 0 1px 2px rgb(10 10 10 / 10%);
    margin-bottom: 20px;
  }
  textarea:focus{
    border-color: #f0c14b;
  }
  textarea:focus-visible{
    outline: 0px;
  }
`
