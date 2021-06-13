import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login'
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
