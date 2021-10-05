import { Auth, API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { createLocation, updateUser } from '../../graphql/mutations'
import { getUser } from '../../graphql/queries'
import './Account.css'
import styled from 'styled-components'

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
        <div className = "accountp">
            <section>
                {error && <p>{error}</p>}
            </section>
            <section>
              <p>Hey, {name} ;)</p>
              <Top1>
                <p>Email: {email}</p>
                <button onClick={() => {setChangeEmail(!changeEmail);setChangePassword(false);setChangeLocation(false)}}>{changeEmail?"v":">"}</button>
              </Top1>
              <Hide1>
                {changeEmail && <section>
                  {!confirmEmail && <section>
                    <input value={email} onChange={(e) => (setEmail(e.target.value))} />
                    <button onClick={newEmail}>Change Email</button>
                    </section>}
                  {confirmEmail && <section>
                    <input placeholder="Enter the confirmation code sent to the new email address" onChange={(e) => (setEmailConfirm(e.target.value))} />
                    <button onClick={checkEmail}>Confirm email</button>
                  </section>}
                </section>}
              </Hide1>
              <Top2>
                <p>Pasword: ********</p>
                <button onClick={() => {setChangePassword(!changePassword);setChangeEmail(false);setChangeLocation(false)}}>{changePassword?"v":">"}</button>
              </Top2>
              <Hide2>
                {changePassword &&
                  <section>
                    <input type='password' placeholder="Enter current password" onChange={(e) => (setCurrentPassword(e.target.value))} />
                    <input type='password' placeholder="Enter new password" onChange={(e) => (setNewPassword(e.target.value))} />
                    <input type='password' placeholder="Confirm new password" onChange={(e) => (setNewPasswordConfirm(e.target.value))} />
                    <button onClick={changePass}>Change Password</button>
                  </section>}
               </Hide2>
               <Top3>
                 <p>Location: {location}</p>
                 <button onClick={() => {setChangeLocation(!changeLocation);setChangePassword(false);setChangeEmail(false)}}>{changeLocation?"v":">"}</button>
               </Top3>
               <Hide3>
                 {changeLocation && <section>
                   <input placeholder="Apt, Room No., Building, etc" onChange={(e) => (setApt(e.target.value))} />
                   <input placeholder="Street" onChange={(e) => (setStreet(e.target.value))} />
                   <input placeholder="City" onChange={(e) => (setCity(e.target.value))} />
                   <input placeholder="State" onChange={(e) => (setState(e.target.value))} />
                   <input placeholder="Zip Code" type="number" onChange={(e) => (setZip(e.target.value))} />
                   <button onClick={newLocation}>Change Location</button>
                 </section>}
               </Hide3>
          </section>
        </div>
    )
}

export default Account

const Top1 = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: baseline;
  width: calc(100% - 2px);
  border: 1px solid;
  border-color: beige;
  outline: 0;
  margin-top: 5px;
  background-color: #fffbf4;
  button{
    height: inherit;
    background-color: inherit;
    border: 0;
    cursor: pointer;
    width: 40px;
    padding: 0px;
  }
  p{
    text-transform: none;
    margin: 0 0 0 5px;
    flex: 1;
  }
`

const Hide1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  section{
    display: flex;
    flex-direction: column;
    input{
      font-size: 14px;
      min-height: 25px;
      padding: 10px;
      width: 96%;
      border: 1px solid transparent;
      border-color: #dbdbdb;
      border-radius: 3px;
      line-height: 1.5;
      color: #363636;
      box-shadow: inset 0 1px 2px rgb(10 10 10 / 10%);
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: auto;
      margin-right: auto;
    }
    button{
      width: max-content;
      border: 0;
      cursor: pointer;
      padding: 0px;
      background-color: #ffdfa8;
      height: 32px;
      padding-left: 5px;
      padding-right: 5px;
      margin-left: calc(2% - 10px);
      margin-bottom: 10px;
      :hover{
        box-shadow: inset 0px 8px 20px 3px rgb(10 10 10 / 10%);
      }
    }
  }
`

const Top2 = styled(Top1)`
  margin: 0;
`

const Hide2 = styled(Hide1)`
  margin: 0;
`

const Top3 = styled(Top1)`
  margin: 0;
`

const Hide3 = styled(Hide1)`
  margin: 0;
`
