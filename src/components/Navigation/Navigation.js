import React, { Component } from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import logo from '../../Images/logo.png';

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className=" header mycontainer">
                    <div className="header-logo">
                        <img src={logo} alt="not yet seen"/>
                    </div>
                    <div className="header-route">
                        <div className="header-list">
                            <ul>
                                <li><NavLink to='/Home' className="">Home</NavLink> </li>
                                <li><NavLink to='/categories' className="">Categories</NavLink></li>
                                <li><NavLink to='/faq' className="">FAQ</NavLink></li>
                                <li><NavLink to='/become_agent' className="">Become an Agent</NavLink></li>
                            </ul>
                        </div>
                        <div className="header-signin-signup">
                            <div className="signin"><NavLink to='/signin'>Signin </NavLink> </div>
                            <div className=""><NavLink to='/signup' className="navlink-btn">Signup</NavLink> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation
