import React, { Component } from "react";
import {NavLink} from "react-router-dom";
// import PropTypes from "prop-types";
// import { logDOM } from "@testing-library/react";

class Product extends Component {
  state = {};
  getClasses() {
    return this.props.product.count === 0
      ? "badge bg-warning m-2"
      : "badge bg-primary m-2";
  }
  render() {
      const {item,onDelete,onIncrement} = this.props;
      const {id,type,name,img,totPrice,num} = item
      return (
          <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
              <div className="d-flex flex-row">
                  <NavLink
                      key={`nav-item-${id}`}
                      to={`/search?filter=${name}`}>
                      <img
                          key={`cart-img-${id}`}
                          className="rounded"
                          src= {`images/${img}`}
                          width="40"
                      />
                      <div className="ml-2" key={`cart-details-${id}`}>
                      <span className="font-weight-bold d-block">
                        {name}
                      </span>
                          <span className="spec">{type}</span>
                      </div>
                  </NavLink>
              </div>
              <div className="d-flex flex-row align-items-center">
                    <span className="d-block">
                      <input
                          key={`cart-increment-${id}`}
                          id="quantity"
                          type="number"
                          defaultValue={num}
                          onChange={(e)=>{
                              onIncrement(id,type,e.target.value)
                          }}
                          style={{ width: "7rem" }}
                          min={0}
                          className="form-control quantity-input"
                      />
                    </span>
                  <span className="d-block ml-5 font-weight-bold">${totPrice}</span>
                  <span
                      key={`cart-delete-${id}`}
                      style={{ cursor: "pointer", paddingLeft:"7rem" }}
                      className="col"
                      onClick={() => onDelete(id,type)}
                      onMouseEnter={(event) =>
                          (event.target.style.color = "red")
                      }
                      onMouseLeave={(event) =>
                          (event.target.style.color = "black")
                      }
                  >
                      <i className="fa-solid fa-trash m-2"></i>
                    </span>
              </div>
          </div>
      // <div className="d-flex justify-content-between mx-5 container mt-2 row border border-primary rounded-4 p-2">
      //   <h3 className="col-6">
      //       <NavLink
      //           style={({ isActive }) => ({
      //               color: isActive ? "red" : "green",
      //           })}
      //           key={id}
      //           to={`/products/${id}`}>
      //           {name}
      //       </NavLink>
      //   </h3>
      //   <span className={`${this.getClasses()} col`}>
      //     {count}
      //   </span>
      //   <span className="col">
      //     <button
      //       onClick={() => onIncrement(product)}
      //       className="btn btn-primary btn-sm"
      //     >
      //       +
      //     </button>
      //   </span>
      //   <span
      //       key={`delete${id}`}
      //       style={{cursor: "pointer"}}
      //     className="col"
      //     onClick={() => onDelete(product)}
      //       onMouseEnter={event => event.target.style.color= "red"}
      //       onMouseLeave={event => event.target.style.color="black"}
      //   >
      //     <i className="fa-solid fa-trash m-2"></i>
      //   </span>
      // </div>
    );
  }
}

Product.propTypes = {};

export default Product;
