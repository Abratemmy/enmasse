import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './footer.css';

export class Footertop extends Component {
    render() {
        return (
            // css is found in footer.css
            <div className="footertop text-center">
                <div className="footertopsection">
                    <div className="footertop-title">Your Goods Deserves a Wider Reach</div>
                    <div className="footertop-subtitle">Join a List of our Agents</div>
                    <div className="footertop-navlink"><NavLink to='/agent' className="navlink-btn navlink-btn-wider">Become an Agent</NavLink> </div>
                </div>
            
            </div>
        )
    }
}

export default Footertop
