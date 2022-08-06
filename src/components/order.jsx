import React, { Component } from "react";
// import PropTypes from 'prop-types';

class Order extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="order" id="order">
          <div className="section-header">
            <h3 className="sub-heading">Order Now</h3>
            <h1 className="heading">free and fast</h1>
          </div>
          <form action="" className="order">
            <div className="input-box">
              <div className="input">
                <label htmlFor="name">Enter Your Name</label>
                <input type="text" id="name" placeholder="Enter Your Name" />
              </div>
              <div className="input">
                <label htmlFor="phone">Enter Your Phone</label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter Your Phone"
                />
              </div>
            </div>
            <div className="input-box">
              <div className="input">
                <label htmlFor="food">Enter Food Name</label>
                <input type="text" id="food" placeholder="Enter Food Name" />
              </div>
              <div className="input">
                <label htmlFor="additional">Enter Your Additional Food</label>
                <input
                  type="number"
                  id="additional"
                  placeholder="Enter Your Additional Food"
                />
              </div>
            </div>
            <div className="input-box">
              <div className="input">
                <label htmlFor="much">How Many Orders?</label>
                <input type="number" id="much" placeholder="How Many Orders?" />
              </div>
              <div className="input">
                <label htmlFor="date">Date</label>
                <input type="datetime-local" id="date" />
              </div>
            </div>
            <div className="input-box">
              <div className="input">
                <label htmlFor="address">Enter Your Address</label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Address"
                ></textarea>
              </div>
              <div className="input">
                <label htmlFor="message">Enter Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
            </div>
            <input type="submit" value="Order Now" className="btn" />
          </form>
        </section>
        <section className="footer">
          <div className="icons-container">
            <div className="icons">
              <i className="fas fa-clock"></i>
              <h3>Opening Hours</h3>
              <p>01:00pm to 1:00am</p>
            </div>
            <div className="icons">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>+201091402807</p>
              <p>+201270674470</p>
            </div>
            <div className="icons">
              <i className="fas fa-envelope"></i>
              <h3>Emails</h3>
              <p>alprofmohamed123@gmail.com</p>
              <p>mohamed3badah@gmail.com</p>
            </div>
            <div className="icons">
              <i className="fas fa-map"></i>
              <h3>Address</h3>
              <p>10th Of Ramadan, Sharkia, Egypt</p>
            </div>
          </div>
          <div className="share">
            <a href="https://www.facebook.com/ALPROFmr/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/ALPROFmr">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/mohamed3badah/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/promohamedreda98/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://mohamed3badah.github.io/Website/">
              <i className="fas fa-link"></i>
            </a>
          </div>
          <div className="credit">
            <p className="copy-right">
              &copy; 2022 <span>Mohamed Reda</span> All Right Reserved
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

Order.propTypes = {};

export default Order;
