import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    const handleClick = () => {
        console.log('Submitted!')
    }
    return (
        <div className="login-page">
            <section className="header">
                    {/* <img src={logo}></img> */}
            </section>
            <section className="login-form">
                <h1 className="sign-in">
                    Create account
                </h1>
                <form>
                    <p>Your username</p>
                    <section className="input"><input /></section>
                    <p>Your email</p>
                    <section className="input"><input /></section>
                    <p>Password</p>
                    <section className="input"><input /></section>
                    <button onClick={handleClick}>Create your Amazon account</button>
                </form>
            </section>
            <p>Already have an account?</p> 
            <Link to='/login' className="sign-up">
                <p>Sign in</p>
            </Link>
        </div>
    )
}

export default Signup
