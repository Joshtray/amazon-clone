import React from "react";
import './header.css';
import { Link } from 'react-router-dom'

export default function Header () {

  return (
    <header>
      <section class="left-container">
        <Link to="/" className="logo" >
          <span></span>
        </Link>
        <Link to="/" className="direction">
          <span></span>
          <div>
            <p>Deliver to Tomiwa</p> {/*Deliver to [user.name] capitalize first word*/}
            <span>
              <p>Chicago 60616</p>{/* Location: [State] [Zip Code]*/}
            </span>
          </div>
        </Link>
      </section>
      <section class="search-bar">
        <form>
          {/*option*/}
          <input/>
          {/*font-awesome search icon*/}
        </form>
      </section>
      <section class="account-details">
        <a>
          {/*option*/}
        </a>
        <a>
          <p></p> {/*Hello, [User.name]*/}
          <p class="bold">Account &#38; Lists </p>
        </a>
        <a>
          <p>Returns <br/><span>&#38; Orders</span></p>
        </a>
        <Link to="/" className="cart" >
          <span>1</span>{/* [Item.no] */}
          <p>Cart</p>
        </Link>
      </section>
    </header>

    )
}
