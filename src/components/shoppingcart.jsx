import React, { Component } from "react";
import Product from "./product";
import { NavLink } from "react-router-dom";
// import data from "src/data";
class ShoppingCart extends Component {
  render() {
    // this.props.update()
    let items = this.props.items;
    let shipping = 20.0;
    let totPrice = 0;
    items.map((p) => {
      totPrice += parseFloat(p.totPrice);
    });
    return (
      <section id={`check-out`}>
        <div className="container mt-5 p-3 rounded cart">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="product-details mr-2">
                <NavLink to={`/menu`}>
                  <div className="d-flex flex-row align-items-center">
                    <i className="fa fa-long-arrow-left"></i>
                    <span className="ml-2">Continue Shopping</span>
                  </div>
                </NavLink>
                <hr />
                <h6 className="mb-0">Shopping cart</h6>
                <div className="d-flex justify-content-between">
                  <span>You have {items.length} items in your cart</span>
                  <div className="d-flex flex-row align-items-center">
                    <span className="text-black-50">Sort by:</span>
                    <div className="price ml-2">
                      <span className="mr-1">price</span>
                      <i className="fa fa-angle-down"></i>
                    </div>
                  </div>
                </div>
                {this.props.items.map((product) => (
                  <Product
                    key={product.id}
                    item={product}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                  ></Product>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="payment-info">
                <div className="d-flex justify-content-between align-items-center">
                  <span>Card details</span>
                </div>
                <span className="type d-block mt-3 mb-1">Card type</span>
                <label className="radio">
                  <input
                    type="radio"
                    name="card"
                    value="payment"
                    defaultChecked={true}
                  />{" "}
                  <span>
                    <img
                      width="30"
                      src="https://img.icons8.com/color/48/000000/mastercard.png"
                    />
                  </span>
                </label>

                <label className="radio">
                  {" "}
                  <input type="radio" name="card" value="payment" />{" "}
                  <span>
                    <img
                      width="30"
                      src="https://img.icons8.com/officel/48/000000/visa.png"
                    />
                  </span>
                </label>

                <label className="radio">
                  {" "}
                  <input type="radio" name="card" value="payment" />{" "}
                  <span>
                    <img
                      width="30"
                      src="https://img.icons8.com/ultraviolet/48/000000/amex.png"
                    />
                  </span>
                </label>

                <label className="radio">
                  {" "}
                  <input type="radio" name="card" value="payment" />{" "}
                  <span>
                    <img
                      width="30"
                      src="https://img.icons8.com/officel/48/000000/paypal.png"
                    />
                  </span>
                </label>
                <div>
                  <label className="credit-card-label">Name on card</label>
                  <input
                    type="text"
                    className="form-control credit-inputs"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="credit-card-label">Card number</label>
                  <input
                    type="text"
                    className="form-control credit-inputs"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="credit-card-label">Date</label>
                    <input
                      type="text"
                      className="form-control credit-inputs"
                      placeholder="12/24"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="credit-card-label">CVV</label>
                    <input
                      type="text"
                      className="form-control credit-inputs"
                      placeholder="342"
                    />
                  </div>
                </div>
                <hr className="line" />
                <div className="d-flex justify-content-between information">
                  <span>Subtotal</span>
                  <span>${totPrice}</span>
                </div>
                <div className="d-flex justify-content-between information">
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>
                <div className="d-flex justify-content-between information">
                  <span>Total(Incl. taxes)</span>
                  <span>${totPrice + shipping}</span>
                </div>
                <button
                  className="btn btn-primary btn-block d-flex justify-content-between mt-3"
                  type="button"
                >
                  <span>${totPrice + shipping}</span>
                  <span>
                    Checkout<i className="fa fa-long-arrow-right ml-1"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      //    {this.props.items.map((product) => (
      //                               <Product
      //                                   key={product.id}
      //                                   product={product}
      //                                   onDelete={this.props.onDelete}
      //                                   onIncrement={this.props.onIncrement}
      //                               ></Product>
      //                           ))}
      //           <button onClick={this.props.onReset}
      //                   className="btn btn-secondary btn-sm position-relative top-0 start-50 translate-middle-x m-3">
      //             Reset
      //           </button>
    );
  }
}

ShoppingCart.propTypes = {};

export default ShoppingCart;
