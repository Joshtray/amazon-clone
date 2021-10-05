import { Auth, API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { createLocation, deleteLocation, updateUser } from '../../graphql/mutations'
import { getLocation, getUser } from '../../graphql/queries'
import './Account.css'
import styled from 'styled-components'
import { AmplifyToast } from '@aws-amplify/ui-react'

const Account = () => {
    const history = useHistory()
    const [userInfo, setUserInfo] = useState(null)
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [changeEmail, setChangeEmail] = useState(false)
    const [emailConfirm, setEmailConfirm] = useState('')
    const [location, setLocation] = useState('')
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
                const usrLocation = await API.graphql(graphqlOperation(getLocation, {id: userData.attributes.sub }))
                console.log(usrLocation)
                if (usrLocation.data.getLocation) {
                  console.log(usrLocation.data.getLocation.zipcode)
                  const loc = usrLocation.data.getLocation.apt + ", " + usrLocation.data.getLocation.street + ", " + usrLocation.data.getLocation.city + ", " + usrLocation.data.getLocation.state + ", " + usrLocation.data.getLocation.zipcode 
                  setLocation(loc)
                  console.log(loc)
                }
                else {
                  setLocation("Add a location")
                }
            }
            setName(userData.username)
            setEmail(userData.attributes.email)
        }
        catch (e) {
            console.log(e)
            // history.push('/login')
            // history.go(0)
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
      if (zip==0) {
        setError('Please enter a zipcode') 
      }
      else {
        try {
            const checkLoc = await API.graphql(graphqlOperation(getLocation, {id: user.attributes.sub}))
            console.log(checkLoc)
            if (checkLoc.data.getLocation) {
              await API.graphql(graphqlOperation(deleteLocation, {input: {id: user.attributes.sub}}))
            }
            const location = await API.graphql(graphqlOperation(createLocation, {input: {id: user.attributes.sub, userID: user.attributes.sub, apt: apt, street: street, city: city, state: state, zipcode: zip}}))
            console.log(location)
            const loc = (location.data.createLocation.apt && location.data.createLocation.apt + ", ") + (location.data.createLocation.street && location.data.createLocation.street + ", ") + (location.data.createLocation.city && location.data.createLocation.city + ", ") + (location.data.createLocation.state && location.data.createLocation.state + ", ") + (location.data.createLocation.zipcode && location.data.createLocation.zipcode)
            setLocation(loc)
            setApt('')
            setStreet('')
            setState('')
            setCity('')
            setZip(0)
            setChangeLocation(false)
        }
        catch (e) {
            setError(e.message)
            console.log(e)
        }
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
              <Top1 onClick={() => {setChangeEmail(!changeEmail);setChangePassword(false);setChangeLocation(false)}}>
                <p>Email: <span>{email}</span></p>
                <button onClick={() => {setChangeEmail(!changeEmail);setChangePassword(false);setChangeLocation(false)}}>
                  <div className = {changeEmail?"tilt":""}>+</div>
                </button>
              </Top1>
              <Hide1>
                <section className = {changeEmail? "hide": ""} >
                  {!confirmEmail && <section>
                    <input value={email} onChange={(e) => (setEmail(e.target.value))} />
                    <button onClick={newEmail}>Change Email</button>
                    </section>}
                  {confirmEmail && <section>
                    <input placeholder="Enter the confirmation code sent to the new email address" onChange={(e) => (setEmailConfirm(e.target.value))} />
                    <button onClick={checkEmail}>Confirm email</button>
                  </section>}
                </section>
              </Hide1>
              <Top2 onClick={() => {setChangePassword(!changePassword);setChangeEmail(false);setChangeLocation(false)}}>
                <p>Pasword: ********</p>
                <button onClick={() => {setChangePassword(!changePassword);setChangeEmail(false);setChangeLocation(false)}}>
                  <div className = {changePassword?"tilt":""}>+</div>
                </button>
              </Top2>
              <Hide2>
                  <section className = {changePassword ? "hide": ""} >
                    <input type='password' placeholder="Enter current password" onChange={(e) => (setCurrentPassword(e.target.value))} />
                    <input type='password' placeholder="Enter new password" onChange={(e) => (setNewPassword(e.target.value))} />
                    <input type='password' placeholder="Confirm new password" onChange={(e) => (setNewPasswordConfirm(e.target.value))} />
                    <button onClick={changePass}>Change Password</button>
                  </section>
               </Hide2>
               <Top3 onClick={() => {setChangeLocation(!changeLocation);setChangePassword(false);setChangeEmail(false)}}>
                 <p>Location: {location}</p>
                 <button onClick={() => {setChangeLocation(!changeLocation);setChangePassword(false);setChangeEmail(false)}}>
                   <div className = {changeLocation?"tilt":""}>+</div>
                 </button>
               </Top3>
               <Hide3>
                  <section className = {changeLocation? "hide": ""}>
                   <input placeholder="Apt, Room No., Building, etc" onChange={(e) => (setApt(e.target.value))} />
                   <input placeholder="Street" onChange={(e) => (setStreet(e.target.value))} />
                   <input placeholder="City" onChange={(e) => (setCity(e.target.value))} />
                   <input placeholder="State" onChange={(e) => (setState(e.target.value))} />
                   <input placeholder="Zip Code" type="number" onChange={(e) => (setZip(e.target.value))} />
                   <button onClick={newLocation}>Change Location</button>
                 </section>
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
  cursor: pointer;
  button{
    height: inherit;
    background-color: inherit;
    border: 0;
    cursor: pointer;
    width: 40px;
    padding: 0px;
    transition: all 0.5s 0s ease;
    div{
      transition: all 0.25s 0s ease;
      font-size: 16px;
      font-weight: 500;
    }
    .tilt{
      transform: rotate(45deg);
    }
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
  box-sizing: border-box;
  height: max-content;
  .hide{
    height: max-content;
    input{
      height 25px;
      padding: 10px;
      border: 1px solid transparent;
      border-color: #dbdbdb;
      border-radius: 3px;
      box-shadow: inset 0 1px 2px rgb(10 10 10 / 10%);
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: auto;
      margin-right: auto;
    }
    button{
      height: 32px;
      margin-bottom: 10px;
      font-size: 12px;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  section{
    display: flex;
    flex-direction: column;
    input{
      font-size: 14px;
      height: 0px;
      padding: 0px;
      width: 96%;
      border: 0;
      line-height: 1.5;
      color: #363636;
      margin: 0px;
    }
    button{
      font-size: 0px;
      width: max-content;
      border: 0;
      cursor: pointer;
      padding: 0px;
      background-color: #ffdfa8;
      height: 0px;
      margin-left: calc(2% - 10px);
      margin-bottom: 0px;
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
