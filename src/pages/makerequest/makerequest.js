import React, { Component } from 'react';
import './makerequest.css';
import {BiDownArrow, BiPlus} from 'react-icons/bi';
import nairalogo from '../../Images/naira.png';

export class Makerequest extends Component {
    render() {
        return (
            <div className="makerequest-section text-center">
                <div className="mycontainer home-bulkproducts">
                    {/* this css is gotten from home. you can check home.css for home-bulproducts */}
                    <h1 style={{padding:'25px 0px 10px 0px'}}>Your Bulk Product orders at ease</h1>
                </div>
               
                <div className="request-section text-center">
                    <div className="row">
                        <div className="col-lg-3 col-md-1 col-sm-1 make-requestimg request-img1"></div>
                        <div className="col-lg-6 col-md-10 col-sm-10 make-request-text">
                            <div className="" >
                                <div className="page-background-title">Make Request</div>
                                <div className="page-background-text">Publish requests for free</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-1 make-requestimg request-img2">
                            <div className=" "></div>
                        </div>
                    </div>
                </div>

                {/* the input code is here */}
                <div className="mycontainer text-left " style={{padding:'50px 0px 80px 0px'}}>
                    <form>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2"></div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="signupform">
                                            <label htmlFor="name" className="label">Title<span className="makerequest-span">*</span> </label>
                                            <input type="text" rules="required|max:255" name="name"placeholder=" name"  className="inputfield"/>                    
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="signupform">
                                            <label htmlFor="name" className="label">Category<span className="makerequest-span">*</span> </label>
                                            <select name="category" id="category" className="form-control"style={{height:'50px'}}>
                                                <option value="select">Select Category</option>
                                                <option value="select">fashion</option>
                                                <option value="select">household</option>
                                                <option value="select">food</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="signupform">
                                            <label htmlFor="name" className="label">Quantity<span className="makerequest-span">*</span> </label>
                                            <div className="input-group mb-3" >
                                                <input type="text" className="form-control homepage-input" placeholder="Quantity"/>
                                                <div className="input-group-append">
                                                    {/* the css for the yellow background is found in the home.css */}
                                                    <div className="homepage-search-btn" >Unit<BiDownArrow className=""style={{borderRadius:'none'}} arial-aria-hidden="true"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">  
                                        <div className="signupform">
                                            <label htmlFor="name" className="label">Price<span className="makerequest-span">*</span> </label>   
                                            <div className="input-group mb-3" >
                                                <div className="input-group-append">
                                                    <div className="homepage-search-btn" ><img src={nairalogo}  alt="naira" width="100%"/> </div>
                                                </div>
                                                <input type="text" className="form-control homepage-input" placeholder="Price"/>
                                            </div>       
                                        </div>     
                                    </div>
                                   
                                    <div className="col-lg-12 col-md-12-col-sm-12">
                                        <div className="signupform">
                                            <label htmlFor="name" className="label">Location<span className="makerequest-span">*</span> </label>
                                            <input type="text" rules="required|max:255" name="name"placeholder="City, State and Country"  className="inputfield"/>                    
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 c0l-sm-12">
                                        <div className="">Add a photo</div>
                                        <div className="photo-album">
                                            <a href="/"><BiPlus className="photo-album-logo"/></a>
                                        </div>
                                        <div className="photo-album-text">Picture must not exceed 5 Mb <br/>Supported formats are *.jpg, *.gif and *.png </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12-col-sm-12">
                                        <div className="signupform">
                                            <label htmlFor="name" className="label">Description<span className="makerequest-span">*</span> </label>
                                            <textarea className="form-control" rows="3" placeholder="Describe request shortly"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3 col-sm-3"></div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="text-center" >
                                            <button type="submit" className="navlink-btn signUpButton" >Publish</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3 col-sm-3"></div>
                                   
                                </div>
                               
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2"></div>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Makerequest
