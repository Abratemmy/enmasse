import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../src/pages/home/home';
import Categories from '../src/pages/categories/category';
import Agent from '../src/pages/becomeAgent/agent';
import Signup from './aunthentication/signup/signup';
import Signin from './aunthentication/login/signin'
import Forgotpassword from './aunthentication/login/forgotpassword';
import Makerequest from './pages/makerequest/makerequest';



const Router = ()=>(
    <Switch>
        {/* pages */}
        <Route exact path ='/home' component = {Home} />
        <Route exact path ='/categories' component = {Categories}/>
        <Route exact path ='/become_agent' component={Agent}/>
        <Route exact path='/make_request' component={Makerequest} />

        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/forgotpassword' component={Forgotpassword} />

  
        

        
    </Switch>
)
export default Router