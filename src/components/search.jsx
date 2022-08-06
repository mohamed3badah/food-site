import { Outlet, useSearchParams } from "react-router-dom";
import Dish from "./dish";
import React from "react";
import MenuItem from "./menuItem";

export default function Search(props) {
  let dishes = props.dishes;
  let menu = props.menu;
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <section>
      <form id={`search-items`} className="d-flex mt-5" role="search">
        <input
          className="form-control me-2"
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <section className="dishes" id="dishes">
        <div className="section-header">
          <h3 className="sub-heading">Our Dishes</h3>
          <h1 className="heading">Popular dishes</h1>
        </div>
        <div className="box-container">
          {dishes
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .map((invoice) => (
              <Dish
                key={`dish-item-search-${invoice["idour_dishes"]}`}
                love={props.love}
                cart={props.cart}
                loveData={props.loveDishes}
                dish={invoice}
              />
            ))}
        </div>
      </section>
      <section className="menu" id="menu">
        <div className="section-header">
          <h3 className="sub-heading">Our Menu</h3>
          <h1 className="heading">Today's Special</h1>
        </div>
        <div className="box-container">
          {menu
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .map((invoice) => (
              <MenuItem
                key={`menu-item-search-${invoice["idour_dishes"]}`}
                love={props.love}
                cart={props.cart}
                loveData={props.loveMenu}
                item={invoice}
              />
            ))}
        </div>
      </section>
      <Outlet />
    </section>
  );
}
