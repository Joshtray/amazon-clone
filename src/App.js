import Header from './components/header';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Account from './components/pages/Account';
import Orders from './components/pages/Orders';
import Amplify, { Hub, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import { useEffect, useState } from 'react';

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
    }
    else {
      setCurrentUser(null)
    }
  }
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
        </Switch>
        {currentUser ? <button onClick={signOut} >SIGN OUT</button> : <Link to="/login"><button>SIGN IN</button></Link> }
      </Router>
    </div>
  );
}

export default App;
