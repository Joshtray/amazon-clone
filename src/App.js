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
import { getUser, listCategories } from './graphql/queries';
import { createCart, createUser } from './graphql/mutations';
import AddProduct from './components/pages/AddProduct';
import Category from './components/pages/Category';


Amplify.configure(awsconfig)

function App() {
  const history = useHistory();
  const [categories, setCategories] = useState([])
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
  const getCategories = async () => {
    const list = await API.graphql(graphqlOperation(listCategories))
    setCategories(list.data.listCategories.items)
    console.log(list.data.listCategories.items)
  }

  useEffect(() => {
    loggedIn()
    getCategories()
  }, [])

  const signOut = async () => {
    await Auth.signOut()
    setCurrentUser(null)
  }
  return (
    <div className="App">
      <Router>
        {/* currentUser && <Header /> */}
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/account" exact component={Account} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/add-product" exact component={AddProduct} />
          {categories.map((category) => (<Route path={"/categories/" + category.name}><Category category={category} /></Route> ))}
        </Switch>
        {currentUser ? <button onClick={signOut} >SIGN OUT</button> : <Link to="/login"><button>SIGN IN</button></Link> }
      </Router>
    </div>
  );
}

export default App;
