import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './signup.css';
export class Signup extends Component {
    render() {
        return (
            <div className="mycontainer signup"style={{overflow:'hidden'}}>
                <div className="text-center">
                    <h2>Sign Up For An Account</h2>
                    <div className="subtext">We’ll like to meet you please fill in your name, email, phone number  and password</div>
                </div>

                <div className="row" >
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                    <form>
                        <div className="signupform">
                            <label htmlFor="name" className="label">Fullname</label>
                            <input type="text" rules="required|max:255" name="name"placeholder=" name"  className="inputfield"/>                    
                        </div>
                        <div className="signupform">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="email" rules="required|max:255" name="email"placeholder=" goke@email.com"  className="inputfield"/>                    
                        </div>
                        <div className="signupform">
                            <label htmlFor="phone"className="label">Phone number</label>
                            <input type="tel" rules="required|max:255" name="phone"placeholder=" 0123456"  className="inputfield"/>                    
                        </div>
                        <div className="signupform">
                            <label htmlFor="password"className="label">password</label>
                            <input type="password" rules="required|max:255" name="password"placeholder=" password"  className="inputfield"/>                         
                        </div>
                        <div className="">
                            <button type="submit" className="navlink-btn signUpButton" >Register</button>
                        </div>
                       
                        <div className="signup-to-signin text-center">Already have an account? Log In? <NavLink to='/signin' className="signup-to-signin-link">Log in</NavLink> </div>
                    </form>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                </div>
                
                
        
            </div>
        )
    }
}

export default Signup
