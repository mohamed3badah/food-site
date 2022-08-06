import React, { Component } from "react";
import Dish from "./dish";
// import PropTypes from 'prop-types';

class Dishes extends Component {
  render() {
    let allDishes = this.props.data;
    let loveData = this.props.loveData;
    return (
      <section className="dishes" id="dishes">
        <div className="section-header">
          <h3 className="sub-heading">Our Dishes</h3>
          <h1 className="heading">Popular dishes</h1>
        </div>
        <div className="box-container">
          {allDishes.map((dish) => (
            <Dish
              key={`dish-item-${dish["idour_dishes"]}`}
              love={this.props.love}
              cart={this.props.cart}
              loveData={loveData}
              dish={dish}
            />
          ))}
        </div>
      </section>
    );
  }
}

Dishes.propTypes = {};

export default Dishes;
