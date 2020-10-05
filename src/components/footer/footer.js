import React, { Component } from 'react';
import './footer.css';
import {NavLink} from 'react-router-dom';
import logo from '../../Images/footerlogo.png';
import {FaInstagram, FaFacebookF, FaTwitter} from 'react-icons/fa';
export class Footer extends Component {
    render() {
        return (
            <div className="general-footer">
                <div className="" style={{backgroundColor:'var(--mainBlue)', height:'20px'}}></div>
                 <hr className="footer-hr"/>
                <div className="mycontainer general-footer1">
                    <div className="row">
                        {/* <div className="col-lg-0 col-md-3 col-sm-0"></div> */}
                        <div className="col-lg-3 col-md-4 col-sm-12 offset-lg-1">
                            <div className="general-footer-col">
                                <div className="general-footer-title">Enter your email address to get updates</div>
                                <form>
                                    <div className="general-footer-input"><input type="text" placeholder="Enter your email address" /></div>
                                    <button type="submit" className="general-footer-input general-footer-subsrcibe">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        {/* <div className="col-lg-0 col-md-3 col-sm-0"></div> */}
                        <div className="col-lg-2 col-md-3 col-sm-6 offset-lg-2 offset-md-1">
                            <div className="general-footer-title"><img src={logo}alt="lol"/></div>
                            <div className="">
                                <ul>
                                    <li><NavLink to='/home' className="general-footer-links">Home</NavLink> </li>
                                    <li><NavLink to='/products' className="general-footer-links">Products</NavLink> </li>
                                    <li><NavLink to='/categories' className="general-footer-links">Categories</NavLink> </li>
                                    <li><NavLink to='/aboutus' className="general-footer-links">About Us</NavLink> </li>
                                    <li><NavLink to='/make_request' className="general-footer-links">Make request</NavLink> </li>
                                    <li><NavLink to='/become_agent' className="general-footer-links">Become an Agent</NavLink> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 offset-lg-1">
                            <div className="general-footer-title" style={{fontWeight:'bold'}}>Terms</div>
                            <div className="">
                                <div className="general-footer-text"><NavLink to='/termofuse'className="general-footer-links">Terms of Use</NavLink> </div>
                                <div className="general-footer-text"><NavLink to='/privacypolicy'className="general-footer-links">Privacy Policy</NavLink></div>
                                <div className="general-footer-title">
                                    <ul>
                                        <li><a href="https://www.facebook.com"target="_blank" rel="noopener noreferrer" className="general-footer-icon"><FaFacebookF className=""/></a></li>

                                        <li><a href="https://www.twitter.com"target="_blank" rel="noopener noreferrer" className="general-footer-icon"><FaTwitter className=""/> </a></li>
                                        <li><a href="https://www.instagram.com"target="_blank" rel="noopener noreferrer" className="general-footer-icon"><FaInstagram className="" /> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* code for the bottom line */}
                <hr className="footer-hr"/>
                <div className="text-center general-footer-text">Copyright &copy; 2020 enMasse. All Rights Reserved</div> 
            </div>
        )
    }
}

export default Footer
