import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './home.css';
import {FaSearch} from 'react-icons/fa';
import Footertop from '../../components/footer/footertop';
import products from '../../data/products.json';
import Slider from 'react-slick';

const Home=(props)=> {
    
   
 
        const displayproducts={
            dots:true,
            infinite:true,
            slidesToShow:3,
            slidesToScroll:1
        }
        return (
            <div className="">   
                <div className="section-one">           
                    <div className="mycontainer home-bulkproducts">
                        <h1 style={{padding:'25px 0px 10px 0px'}}>Your Bulk Product orders at ease</h1>
                    </div>

                    <div className="make-request">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 make-request-text">
                                <div className="mycontainer">
                                    <h4 style={{fontWeight:'bold'}}>Are you in need of items to buy</h4>
                                    <h6>Publish request for free</h6>
                                    <NavLink to='/make_request' className="navlink-btn">Make request</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 homemakingrequestimg"></div>
                        </div>
                    </div>
                </div> 

                <div className="text-center homepage">
                    <div className="">Explore our wide range of products request by publishers</div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3"></div>
                        <div className="col-lg-6 col-md-6 col-sm-6">        
                            <form>                    
                                <div className="input-group mb-3" style={{padding:'0px 20px 0px 20px'}}>
                                    <input type="text" className="form-control homepage-input" placeholder="Search"/>
                                    <div className="input-group-append">
                                        <div className="homepage-search-btn" ><FaSearch className=""style={{borderRadius:'none'}} arial-aria-hidden="true"/></div>
                                    </div>
                                </div>
                            </form>
                        </div>  
                        <div className="col-lg-3 col-md-3 col-sm-3"></div> 
                    </div>
                </div>

                {/* another section */}
                <div className="mycontainer">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 homepage-sidebar">
                            <div className="sidebar">
                                
                                {/* number of products available */}
                                <div className="">10 products</div>
                            </div>

                            <div className="sidebar">
                                
                                {/* number of sort available */}
                                <div className="">10 products</div>
                            </div>

                            <div className="sidebar">                               
                                {/* list of categories */}
                                <div className="">CATEGORIES</div>
                            </div>
                        </div>

                        {/* code to display all products below */}
                        <div className="col-lg-9 col-md-9 homepage-items">
                        {/* <div className="stock-container">
                            {products.map((data, key) => {
                            return (
                                <div key={key}>
                                    {data.location +
                                        " , " +
                                        data.email +
                                        " ," +
                                        data.description +
                                        ", " +
                                        data.quantity
                                    }
                                </div>
                                );
                                })}
                        </div> */}
                            <Slider {...displayproducts}>
                                   
                                    <h4>hiyukl</h4>
                                    <h4>hiyukl</h4>
                                    <h4>hiyukl</h4>
                                    <h4>hiyukl</h4>
                                    <h4>hiyukl</h4>
                                  
               

            
                            
                              
                            </Slider>
                        </div>
                    </div>
                </div>

                <Footertop />
            
            </div>
            
        )
    
}

export default Home
