import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";

import items from "../data.json";

import Navbar from "./navbar";
import About from "./about";
import Order from "./order";
import Dishes from "./dishes";
import ShoppingCart from "./shoppingcart";
import ProductDetails from "./productDetails";
import Products from "./products";
import NotFound from "./notFound";
import Edit from "./edit";
import Swipper from "./swiper";
import Menu from "./menu";
import Review from "./review";
import Search from "./search";

import dishes from "../json/dishes.json";
import menu from "../json/menu.json";

class App extends Component {
  state = {
    items,
    love: {
      dishes: [1, 2],
      menu: [3, 4],
    },
    cart: [
      {
        type: "dishes",
        id: 1,
        img: "dish-1.png",
        name: "tasty food",
        price: 120,
        num: 3,
        totPrice: 360,
      },
      {
        type: "dishes",
        id: 2,
        img: "dish-2.png",
        name: "tasty food",
        price: 100,
        num: 2,
        totPrice: 200,
      },
      {
        type: "menu",
        id: 3,
        img: "menu-3.jpg",
        name: "tasty food",
        price: 150,
        num: 4,
        totPrice: 600,
      },
      {
        type: "menu",
        id: 4,
        img: "menu-4.jpg",
        name: "tasty food",
        price: 200,
        num: 5,
        totPrice: 1000,
      },
    ],
  };

  updateState = () => {
    let cart = [...this.state.cart];
    cart.forEach((item) => {
      switch (item.type) {
        case "dishes":
          [...dishes].forEach((dish) => {
            if (parseInt(dish["idour_dishes"]) === parseInt(item.id)) {
              item.name = dish.name;
              item.img = dish.img;
              item.price = dish.price;
              item.totPrice = +item.price * +item.num;
            }
          });
          break;
        case "menu":
          [...menu].forEach((menu) => {
            if (parseInt(menu["idour_dishes"]) === parseInt(item.id)) {
              item.name = menu.name;
              item.img = menu.img;
              item.price = menu.price;
              item.totPrice = +item.price * +item.num;
            }
          });
          break;
      }
    });
    this.setState({ cart: cart });
  };
  addToCart = (id, type) => {
    let isFinished = false;
    let cart = [...this.state.cart];
    cart.forEach((item) => {
      if (parseInt(id) === parseInt(item.id) && type === item.type) {
        item.num++;
        item.totPrice = +item.price * +item.num;
        isFinished = true;
        return this.setState({ cart: cart });
      }
    });
    if (!isFinished) {
      switch (type) {
        case "dishes":
          let newCartDish = this.setCartDishes(id)[0];
          cart.push(newCartDish);
          return this.setState({ cart: cart });
        case "menu":
          let newCartMenu = this.setCartMenu(id)[0];
          cart.push(newCartMenu);
          return this.setState({ cart: cart });
      }
    }
  };

  deleteHandler = (id, type) => {
    // clone and edit
    const cart = this.state.cart.filter((p) => id !== p.id || type !== p.type);
    // set state
    this.setState({ cart });
  };

  // resetHandler = () => {
  //   // clone
  //   let items = [...this.state.items];
  //   // edit
  //   items = items.map((p) => {
  //     p.count = 0;
  //     return p;
  //   });
  //   // set state
  //   this.setState({ items });
  // };
  editHandler = (product, name, count) => {
    // clone
    let items = [...this.state.items];
    const index = items.indexOf(product);
    items[index] = { ...items[index] };
    // edit
    items[index].name = name;
    items[index].count = count;
    // set state
    this.setState({ items: items });
  };

  getInvoice = (number) => {
    return this.state.items.find((invoice) => invoice.id === number);
  };

  incrementHandler = (id, type, num) => {
    // clone
    let cart = [...this.state.cart];
    cart.forEach((item) => {
      switch (type) {
        case "dishes":
          if (parseInt(id) === parseInt(item.id)) {
            item.num = num;
            item.totPrice = +item.price * +item.num;
          }
          break;
        case "menu":
          if (parseInt(id) === parseInt(item.id)) {
            item.num = num;
            item.totPrice = +item.price * +item.num;
          }
          break;
      }
    });
    // set state
    this.setState({ cart: cart });
  };
  addToLove = (id, type) => {
    // clone
    let { dishes, menu } = this.state.love;
    switch (type) {
      case "dishes":
        let dishIndex = dishes.indexOf(id);
        if (dishIndex > -1) {
          // only splice array when item is found
          dishes.splice(dishIndex, 1); // 2nd parameter means remove one item only
        } else {
          dishes.unshift(id);
        }
        break;
      case "menu":
        let menuIndex = menu.indexOf(id);
        if (menuIndex > -1) {
          // only splice array when item is found
          menu.splice(menuIndex, 1); // 2nd parameter means remove one item only
        } else {
          menu.unshift(id);
        }
        break;
    } // set state
    this.setState({ love: { dishes: dishes, menu: menu } });
  };
  getFavDishes = () => {
    let allDishes = [...dishes];
    let stateLoveDishes = this.state.love.dishes;
    const favDishes = [];
    allDishes.filter((dish) => {
      stateLoveDishes.forEach((d) => {
        if (parseInt(dish["idour_dishes"]) === parseInt(d)) {
          favDishes.push(dish);
        }
      });
    });
    return favDishes;
  };
  getFavMenus = () => {
    let allMenu = [...menu];
    let stateLoveMenu = this.state.love.menu;
    const favMenu = [];
    allMenu.filter((item) => {
      stateLoveMenu.forEach((d) => {
        if (parseInt(item["idour_dishes"]) === parseInt(d)) {
          favMenu.push(item);
        }
      });
    });
    return favMenu;
  };

  setCartDishes = (id) => {
    let allDishes = [...dishes];
    const cartDishes = [];
    allDishes.forEach((d) => {
      if (parseInt(id) === parseInt(d["idour_dishes"])) {
        cartDishes.push({
          id: d["idour_dishes"],
          type: "dishes",
          name: d["name"],
          price: d["price"],
          num: 1,
          img: d["img"],
          totPrice: d["price"],
        });
      }
    });
    return cartDishes;
  };
  setCartMenu = (id) => {
    let allMenu = [...menu];
    const cartMenu = [];
    allMenu.forEach((m) => {
      if (parseInt(id) === parseInt(m["idour_dishes"])) {
        cartMenu.push({
          id: m["idour_dishes"],
          type: "menu",
          name: m["name"],
          price: m["price"],
          num: 1,
          img: m["img"],
          totPrice: m["price"],
        });
      }
    });
    return cartMenu;
  };
  render() {
    let allDishes = [...dishes];
    let allMenu = [...menu];
    let loveDishes = [...this.state.love["dishes"]];
    let loveMenu = [...this.state.love["menu"]];
    return (
      <React.Fragment>
        <Navbar itemsCount={this.state.cart.filter((p) => p.num > 0).length} />
        <main className="container">
          <Routes>
            <Route
              path="/dishes"
              element={
                <Dishes
                  love={this.addToLove}
                  cart={this.addToCart}
                  loveData={loveDishes}
                  data={allDishes}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/menu"
              element={
                <Menu
                  love={this.addToLove}
                  cart={this.addToCart}
                  loveData={loveMenu}
                  data={allMenu}
                />
              }
            />
            } />
            <Route path="/review" element={<Review />} />
            <Route path="/order" element={<Order />} />
            <Route
              path="/search"
              element={
                <Search
                  love={this.addToLove}
                  cart={this.addToCart}
                  loveDishes={loveDishes}
                  loveMenu={loveMenu}
                  dishes={allDishes}
                  menu={allMenu}
                />
              }
            />
            } />
            <Route
              path="/love"
              element={
                <Search
                  love={this.addToLove}
                  cart={this.addToCart}
                  loveDishes={loveDishes}
                  loveMenu={loveMenu}
                  dishes={this.getFavDishes()}
                  menu={this.getFavMenus()}
                />
              }
            />
            } />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  items={this.state.cart}
                  update={this.updateState}
                  onDelete={this.deleteHandler}
                  onIncrement={this.incrementHandler}
                />
              }
            />
            <Route path="/contact" element={<Order />} />
            <Route path="/" element={<Swipper />} />
            <Route path="/products">
              <Route index element={<Products items={this.state.items} />} />
              <Route path=":id">
                <Route
                  index
                  element={<ProductDetails getInvoice={this.getInvoice} />}
                />
              </Route>
              <Route
                path="edit/:id"
                element={
                  <Edit
                    getInvoice={this.getInvoice}
                    editHandler={this.editHandler}
                  />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

App.propTypes = {};

export default App;
