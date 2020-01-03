import React from 'react';
import Home from '../containers/Home';
import About from '../containers/About/About';
import SignUp from '../containers/Accounts/Signup';
import Login from '../containers/Accounts/Login';
import Dashboard from '../containers/Dashboard/Dashboard';
import Board from '../containers/Dashboard/Board/Board';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/board/:id?/:slug?' component={Board} />
        {/* <Route path='/board' component={Board} /> */}
      </Switch>
);

export default Routes;