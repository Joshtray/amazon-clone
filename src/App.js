import Header from './components/header';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Account from './components/pages/Account';
import Orders from './components/pages/Orders';
import Amplify, { Hub, Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import { useEffect, useState } from 'react';
import { getUser } from './graphql/queries';
import { createCart, createUser } from './graphql/mutations';
import AddProduct from './components/pages/AddProduct';


Amplify.configure(awsconfig)

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null)
  const loggedIn = async () => {
    Hub.listen("auth", (event) => {
      if (event.payload.event === "signIn" || event.payload.event === "tokenRefresh") {
        setCurrentUser(event.payload.data)
      }
    })
    const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })
    if (userInfo) {
      setCurrentUser(userInfo)
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        //if there is no user in the db with the id, then create one
      if (userData.data.getUser) {
      }
      else {
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          accountType: 'Basic'
        }
        await API.graphql(graphqlOperation(createUser, {input: newUser} ))
        await API.graphql(graphqlOperation(createCart, {input: {userID: userInfo.attributes.sub}}))
      }
    }
    else {
      setCurrentUser(null)
    }
  }

  /* useEffect({
    const fetchUser = async () => {
      // Get authenticated user from auth
      const userInfo = await Auth.currentAuthenticatedUser( { bypassCache: true })
      if (userInfo) {
        //Get the user from backend with the user id from auth
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        //if there is no user in the db with the id, then create one
        if (userData.data.getUser) {
          console.log('User is already registered in the database')
        }
        else {
          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            status: 'Hey there! I\'m using WhatsApp!'
          }
          await API.graphql(graphqlOperation(createUser, {input: newUser} ))
        }
      }
    }
    fetchUser()
  }, [])
*/
  useEffect(() => {
    loggedIn()
  }, [])

  const signOut = async () => {
    await Auth.signOut()
    setCurrentUser(null)
  }
  return (
    <div className="App">
      <Router>
        {currentUser && <Header />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/account" exact component={Account} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/add-product" exact component={AddProduct} />
        </Switch>
        {currentUser ? <button onClick={signOut} >SIGN OUT</button> : <Link to="/login"><button>SIGN IN</button></Link> }
      </Router>
    </div>
  );
}

export default App;
