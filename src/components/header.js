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
        <a>
          <div>
            {/*font awesome navigation icon*/}
          </div>
          <div>
            <p></p> {/*Deliver to [user.name]*/}
            <span>
              <p></p>
              {/* Location: [State]*/}
              <p></p> {/*Location: [Zip Code]*/}
            </span>
          </div>
        </a>
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
        <a>
          {/*Font-awesome tag but depends on no of items*/}
        </a>
      </section>
    </header>

    )
}
