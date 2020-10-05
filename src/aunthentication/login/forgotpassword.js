import React, { Component } from 'react'

export class Forgotpassword extends Component {
    render() {
        return (
            <div className="mycontainer signup"style={{overflow:'hidden', padding: '40px 0px 40px 0px'}}>
                <div className="text-center">
                    <h2 >Password Reset</h2>
                    <div className="subtext">Enter your Email address, A link to reset your password will be sent to you</div>
                </div>

                <div className="row" >
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                    <form>
                        <div className="signupform">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="email" rules="required|max:255" name="email"placeholder=" goke@email.com"  className="inputfield"/>                    
                        </div>
                        
                        <div className="">
                            <button type="submit" className="navlink-btn signUpButton" >Send Email</button>
                        </div>
                        
                       
                    </form>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                </div>    
                
            </div>
        )
    }
}

export default Forgotpassword
