import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem(props) {
  function f(stars) {
    let starsDom = [];
    let free = 0;
    while (stars > 0) {
      if (stars >= 1) {
        starsDom.push(<i className="fas fa-star" key={`star${free + 1}`}></i>);
        stars--;
        free++;
      } else {
        starsDom.push(
          <i className="fas fa-star-half-alt" key={`star${free + 1}`}></i>
        );
        stars--;
        free++;
      }
    }
    for (free; free < 5; free++) {
      starsDom.push(
        <i className="fa-regular fa-star" key={`star${free + 1}`}></i>
      );
    }
    return starsDom;
  }
  let item = props.item;
  let loveDom = [];
  function ifLove(loveData) {
    if (loveData.includes(parseInt(item["idour_dishes"]))) {
      loveDom.push(
        <i
          style={{
            cursor: "pointer",
            background: "#27ae60",
            color: "white",
          }}
          className="fas fa-heart"
          onClick={() => props.love(item["idour_dishes"], "menu")}
          key={`menu-love-${item["idour_dishes"]}`}
        ></i>
      );
    } else {
      loveDom.push(
        <i
          style={{
            cursor: "pointer",
            background: "white",
            color: "#192a56",
          }}
          className="fas fa-heart"
          onClick={() => props.love(item["idour_dishes"], "menu")}
          key={`menu-love-${item["idour_dishes"]}`}
        ></i>
      );
    }
    return loveDom;
  }
  return (
    <div className="box" key={`menu-${item["idour_dishes"]}`}>
      {ifLove(props.loveData)}
      <img
        src={`/images/${item["img"]}`}
        alt=""
        key={`img-${item["idour_dishes"]}`}
      />
      <h3>{item["name"]}</h3>
      <div className="stars">{f(item["stars"])}</div>
      <h3>{item["description"]}</h3>
      <p>{item["p"]}</p>
      <span>{`$${item["price"]}`}</span>
      <button
        className="btn"
        onClick={() => props.cart(item["idour_dishes"], "menu")}
      >
        add to cart
      </button>
    </div>
  );
}

export default MenuItem;
