import React, {Component} from 'react';
import Swiper from './swiper'
import {NavLink} from "react-router-dom";
// import PropTypes from 'prop-types';

class About extends Component {
    render() {
        return (
            <section className = "about"
                     id = "about">
                <div className = "section-header">
                    <h3 className = "sub-heading">Dishes Us</h3>
                    <h1 className = "heading">Why to use us</h1>
                </div>
                <div className = "row">
                    <div className = "image">
                        <img src = "images/about-img.png"
                             alt = "" key={`img-about`}/>
                    </div>
                    <div className = "content">
                        <h3>Best food in the country</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus deleniti est
                            explicabo impedit nemo perspiciatis quas quis similique. Aut, blanditiis, officia.
                            Consequuntur corporis error hic molestiae nesciunt perspiciatis reiciendis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non.</p>
                        <div className = "icon-container">
                            <div className = "icons">
                                <i className = "fas fa-shipping-fast"></i>
                                <span>Free Delivery</span>
                            </div>
                            <div className = "icons">
                                <i className = "fas fa-dollar-sign"></i>
                                <span>Easy Payment</span>
                            </div>
                            <div className = "icons">
                                <i className = "fas fa-headset"></i>
                                <span>24/7 Service</span>
                            </div>
                        </div>
                        <NavLink to = "/order"
                           className = "btn">Learn More</NavLink>
                    </div>
                </div>
            </section>


    );
    }
}

About.propTypes = {};

export default About;
