import Header from './components/header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Account from './components/pages/Account';
import Orders from './components/pages/Orders';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/account" exact component={Account} />
          <Route path="/orders" exact component={Orders} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
