import Auth from '@aws-amplify/auth'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import './Account.css'

const Account = () => {
    const history = useHistory()
    const fetchCart = async () => {
        try {
            await Auth.currentAuthenticatedUser()
        }
        catch (e) {
            console.log(e)
            history.push('/login')
            history.go(0)
        }
    }
    useEffect(() => {
        fetchCart()
    }, [])
    return (
        <div>
            ACCOUNT
        </div>
    )
}

export default Account
