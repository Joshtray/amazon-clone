import React, { useState } from 'react'
import './Login.css'
import logo from '../../images/Amazon_logo_PNG3.png'
import { Link, useHistory } from 'react-router-dom'
import Auth from '@aws-amplify/auth'

const Login = () => {
    const history = useHistory();
    const [error, setError] = useState('')
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async () => {
        try {
            await Auth.signIn(username, password)
            history.push("/")
        }
        catch (error) {
            console.log("error: ", error)
            setError(error.message)
        }
    }
    return (
        <div>
          <div className="login-page">
            <Link to='/' className="home-dir">
              <span></span>
            </Link>
            <section className="login-form">
                <h1>
                    Sign-In
                </h1>
                <section className="error-message" >
                    <p>{error}</p>
                </section>
                <section className="form">
                    <p>Username</p>
                    <section className="input"><input className="login-input" type="text" onChange={(e) => (setUsername(e.target.value))} /></section>
                    <p>Password</p>
                    <section className="input"><input type="password" className="login-input" onChange={(e) => (setPassword(e.target.value))} /></section>
                    <button onClick={handleSubmit}>Sign In</button>
                </section>
            </section>
            <Link to='/sign-up' className="sign-up">
                <button>Create your Amazon account</button>
            </Link>
          </div>
          <div className="login-footer"></div>
          <div className="footer-documents">
            <a>Conditions of Use</a>
            <a>Privacy Notice</a>
            <a>Help</a>
          </div>
        </div>
    )
}

export default Login
