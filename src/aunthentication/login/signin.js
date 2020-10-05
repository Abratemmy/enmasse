import React, { Component } from 'react';
import './signin.css';
import {NavLink} from 'react-router-dom';

export class Signin extends Component {
    render() {
        return (
            // note that the css is from signup page
            <div className="mycontainer signup"style={{overflow:'hidden'}}>
                <div className="text-center">
                    <h2>Welcome Back</h2>
                    <div className="subtext">Login to your account</div>
                </div>

                <div className="row" >
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                    <form>
                        <div className="signupform">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="email" rules="required|max:255" name="email"placeholder=" goke@email.com"  className="inputfield"/>                    
                        </div>
                        
                        <div className="signupform">
                            <label htmlFor="password"className="label">password</label>
                            <input type="password" rules="required|max:255" name="password"placeholder=" password"  className="inputfield"/>                         
                        </div>
                        <div className="">
                            <button type="submit" className="navlink-btn signUpButton" >Login</button>
                        </div>
                        
                        <div className="text-center  forgotpassworddiv">
                            <NavLink to='/forgotpassword' className="navlink-btn forgotpassword">Forgot password</NavLink>
                        </div>
                        <div className="signup-to-signin text-center">New to enMasse? <NavLink to='/signup' className="signup-to-signin-link">Sign up</NavLink> </div>
                    </form>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                </div>    
            </div>
        )
    }
}

export default Signin
