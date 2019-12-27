import React from 'react';
import './App.css';
import Layout from './layouts/Layout/Layout';
import Home from './containers/Home';
import About from './containers/About/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './containers/Accounts/Signup';
import Login from './containers/Accounts/Login';
import Dashboard from './containers/Dashboard/Dashboard';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
