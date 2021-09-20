import React, { useEffect, useState } from "react";
import './header.css';
import { Link } from 'react-router-dom'
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
  const update = (event) => {
    setDropdown(event.target.value)
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
            {/* <option value="1">All Departments</option>
            <option value="search-alias=audible">Audible Books &amp; Originals</option>
            <option value="search-alias=alexa-skills">Alexa Skills</option>
            <option value="search-alias=amazon-devices">Amazon Devices</option>
            <option value="search-alias=amazonfresh">Amazon Fresh</option>
            <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
            <option value="search-alias=warehouse-deals">Amazon Warehouse</option>
            <option value="search-alias=appliances">Appliances</option>
            <option value="search-alias=mobile-apps">Apps &amp; Games</option>
            <option value="search-alias=arts-crafts">Arts, Crafts &amp; Sewing</option>
            <option value="search-alias=automotive">Automotive Parts &amp; Accessories</option>
            <option value="search-alias=baby-products">Baby</option>
            <option value="search-alias=beauty">Beauty &amp; Personal Care</option>
            <option value="search-alias=stripbooks">Books</option>
            <option value="search-alias=popular">CDs &amp; Vinyl</option>
            <option value="search-alias=mobile">Cell Phones &amp; Accessories</option>
            <option value="search-alias=fashion">Clothing, Shoes &amp; Jewelry</option>
            <option value="search-alias=fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
            <option value="search-alias=fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
            <option value="search-alias=fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
            <option value="search-alias=fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
            <option value="search-alias=fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
            <option value="search-alias=live-explorations">Amazon Explore</option>
            <option value="search-alias=collectibles">Collectibles &amp; Fine Art</option>
            <option value="search-alias=computers">Computers</option>
            <option value="search-alias=courses">Courses</option>
            <option value="search-alias=financial">Credit and Payment Cards</option>
            <option value="search-alias=edu-alt-content">Digital Educational Resources</option>
            <option value="search-alias=digital-music">Digital Music</option>
            <option value="search-alias=electronics">Electronics</option>
            <option value="search-alias=lawngarden">Garden &amp; Outdoor</option>
            <option value="search-alias=gift-cards">Gift Cards</option>
            <option value="search-alias=grocery">Grocery &amp; Gourmet Food</option>
            <option value="search-alias=handmade">Handmade</option>
            <option value="search-alias=hpc">Health, Household &amp; Baby Care</option>
            <option value="search-alias=local-services">Home &amp; Business Services</option>
            <option value="search-alias=garden">Home &amp; Kitchen</option>
            <option value="search-alias=industrial">Industrial &amp; Scientific</option>
            <option value="search-alias=prime-exclusive">Just for Prime</option>
            <option value="search-alias=digital-text">Kindle Store</option>
            <option value="search-alias=fashion-luggage">Luggage &amp; Travel Gear</option>
            <option value="search-alias=luxury">Luxury Stores</option>
            <option value="search-alias=magazines">Magazine Subscriptions</option>
            <option value="search-alias=movies-tv">Movies &amp; TV</option>
            <option value="search-alias=mi">Musical Instruments</option>
            <option value="search-alias=office-products">Office Products</option>
            <option value="search-alias=pets">Pet Supplies</option>
            <option value="search-alias=luxury-beauty">Premium Beauty</option>
            <option value="search-alias=instant-video">Prime Video</option>
            <option value="search-alias=smart-home">Smart Home</option>
            <option value="search-alias=software">Software</option>
            <option value="search-alias=sporting">Sports &amp; Outdoors</option>
            <option value="search-alias=subscribe-with-amazon">Subscription Boxes</option>
            <option value="search-alias=tools">Tools &amp; Home Improvement</option>
            <option value="search-alias=toys-and-games">Toys &amp; Games</option>
            <option value="search-alias=under-ten-dollars">Under $10</option>
            <option value="search-alias=vehicles">Vehicles</option>
            <option value="search-alias=videogames">Video Games</option>
            <option value="search-alias=wholefoods">Whole Foods Market</option>
  */}
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
            <p>Hello, <span className = "caps">{userInfo.username}</span></p>
            <span className="bold span-flex">Account &#38; Lists <span></span></span>
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
