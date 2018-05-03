import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Training from './components/Training/Training';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
              <Route component={ Home } path='/' exact />
              <Route component={ Contact } path='/Contact' />
              <Route component={ Login } path='/login' />
              <Route component={ Training } path='/training' />
              <Route component={ Cart } path='/cart' />
              <Route component={ Admin } path='/admin' />
            </div> 
        );
    }
}


export default App;
