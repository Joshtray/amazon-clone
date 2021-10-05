import Auth from '@aws-amplify/auth';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    const history = useHistory();
    const [error, setError] = useState('')
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [stage, setStage] = useState('sign-up')

    const getUserInfo = async () => {
        try {
          await Auth.currentAuthenticatedUser();
          history.push('/')
        }
        catch (e) {
          console.log(e)
        }
    }
    
    useEffect(() => {
        getUserInfo()
    }, [])
    
    const handleClick = async () => {
        try {
            console.log('Submitted!')
            await Auth.signUp({ username, password, attributes: { email }})
            setStage('confirm-email')
        }
        catch (error) {
            console.log("error: ", error)
            setError(error.message)
        }
    }
    const handleConfirm = async () => {
        try {
            await Auth.confirmSignUp(username, code)
            await Auth.signIn(username, password)
            history.goBack()
        }
        catch (error) {
            console.log("error: ", error)
            setError(error.message)
        }
    }
    return (
      <div>
        <div className="sign-up-page">
            <section className="home-dir">
              <span></span>
            </section>
            {stage === "sign-up" ? (
            <section className="sign-up-form">
                <h1>
                    Create account
                </h1>
                <section className="error-message" >
                    <p>{error}</p>
                </section>
                <section className="form">
                    <p>Your username</p>
                    <section className="input"><input className="sign-up-input" onChange={(e) => (setUsername(e.target.value))}/></section>
                    <p>Your email</p>
                    <section className="input"><input className="sign-up-input" onChange={(e) => (setEmail(e.target.value))}/></section>
                    <p>Set password</p>
                    <section className="input"><input className="sign-up-input" type="password" onChange={(e) => (setPassword(e.target.value))}/></section>
                    <button onClick={handleClick}>Create your Amazon account</button>
                </section>
            </section>) :
            (<section className="sign-up-form">
                <h1 className="sign-in">
                    Confirm email
                </h1>
                <section className="error-message" >
                    <p>{error}</p>
                </section>
                <section className="form">
                    <p>Username</p>
                    <section className="input"><a className="sign-in-input" type="text">{username}</a></section>
                    <p>Confirmation code: </p>
                    <section className="input"><input type="text" className="sign-in-input" onChange={(e) => (setCode(e.target.value))} /></section>
                    <button onClick={handleConfirm}>Confirm Email</button>
                </section>
            </section>)
        }
        <div className="login-dir">
          <p>Already have an account?</p>
          <Link to='/login' className="sign-up">
              <p>Sign in</p>
          </Link>
        </div>

        </div>
        <div className="login-footer"></div>
        <div className="footer-documents">
          <a>Conditions of Use</a>
          <span></span>
          <a>Privacy Notice</a>
          <span></span>
          <a>Help</a>
        </div>
        <p id="copyright">© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </div>
    )
}

export default Signup
