import { Auth, API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { createLocation, updateUser } from '../../graphql/mutations'
import { getUser } from '../../graphql/queries'
import './Account.css'

const Account = () => {
    const history = useHistory()
    const [userInfo, setUserInfo] = useState(null)
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [changeEmail, setChangeEmail] = useState(false)
    const [emailConfirm, setEmailConfirm] = useState('')
    const [location, setLocation] = useState('Dummy Location')
    const [changeLocation, setChangeLocation] = useState(false)
    const [apt, setApt] = useState('')
    const [error, setError] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState(0)
    const [confirmEmail, setConfirmEmail] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('')
    const fetchData = async () => {
        try {
            const userData = await Auth.currentAuthenticatedUser()
            setUser(userData)
            if (userData) {
                const usrData = await API.graphql(graphqlOperation(getUser, { id: userData.attributes.sub }))
                setUserInfo(usrData.data.getUser)
                console.log(userData)
                console.log(usrData)
                if (usrData.data.getUser.location) {
                    setLocation(usrData.data.getUser.location)
                }
            }
            setName(userData.username)
            setEmail(userData.attributes.email)
        }
        catch (e) {
            console.log(e)
            history.push('/login')
            history.go(0)
        }
    }
    const changePass = async () => {
        if (newPassword == newPasswordConfirm) {
            try {
                await Auth.changePassword(user, currentPassword, newPassword)
                setError('')
                setCurrentPassword('')
                setNewPassword('')
                setNewPasswordConfirm('')
                setChangePassword(false)
            }
            catch (e) {
                setError(e.message)
                console.log(e)
            }
            
        }
        else {
            setError('Passwords do not match!')
        }
    }
    const newEmail = async () => {
        try {
            await Auth.updateUserAttributes(user, {
                'email': email
            })
            setConfirmEmail(true)
        }
        catch (e) {
            setError(e.message)
            console.log(e)
        }
    }
    const newLocation = async () => {
        try {
            const location = await API.graphql(graphqlOperation(createLocation, {input: {userID: user.attributes.sub, apt: apt, street: street, city: city, state: state, zipcode: zip}}))
            console.log(location)
            setApt('')
            setState('')
            setStreet('')
            setCity('')
            setZip('')
            setChangeLocation('')
        }
        catch (e) {
            setError(e.message)
            console.log(e)
        }
    }
    const checkEmail = async () => {
        try {
            await Auth.verifyCurrentUserAttributeSubmit('email', emailConfirm)
            setError('')
            setEmailConfirm('')
            setConfirmEmail(false)
            setChangeEmail(false)
        }
        catch (e) {
            setError(e.message)
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <section>
                {error && <p>{error}</p>}
            </section>
            <p>Username: {name}</p>
            <p>Email: {email}</p><button onClick={() => (setChangeEmail(true))}>Change Email</button>
                {changeEmail && 
                    <section>
                        {!confirmEmail && <section>
                            <input value={email} onChange={(e) => (setEmail(e.target.value))} />
                            <button onClick={newEmail}>Change Email</button>
                            </section>}
                        {confirmEmail && <section>
                            <input placeholder="Enter the confirmation code sent to the new email address" onChange={(e) => (setEmailConfirm(e.target.value))} />
                            <button onClick={checkEmail}>Confirm email</button>
                        </section>}
                    </section>
                }
                <p>Pasword: ********</p><button onClick={() => (setChangePassword(true))}>Change Password</button>
                {changePassword && 
                <section>
                    <input type='password' placeholder="Enter current password" onChange={(e) => (setCurrentPassword(e.target.value))} />
                    <input type='password' placeholder="Enter new password" onChange={(e) => (setNewPassword(e.target.value))} />
                    <input type='password' placeholder="Confirm new password" onChange={(e) => (setNewPasswordConfirm(e.target.value))} />
                    <button onClick={changePass}>Change Password</button>
                </section>}
                <p>Location: {location}</p><button onClick={() => (setChangeLocation(true))}>Change Location</button>
                {changeLocation && 
                <section>
                    <input placeholder="Apt, Room No., Building, etc" onChange={(e) => (setApt(e.target.value))} />
                    <input placeholder="Street" onChange={(e) => (setStreet(e.target.value))} />
                    <input placeholder="City" onChange={(e) => (setCity(e.target.value))} />
                    <input placeholder="State" onChange={(e) => (setState(e.target.value))} />
                    <input placeholder="Zip Code" type="number" onChange={(e) => (setZip(e.target.value))} />
                    <button onClick={newLocation}>Change Location</button>
                </section>
                }
        </div>
    )
}

export default Account
