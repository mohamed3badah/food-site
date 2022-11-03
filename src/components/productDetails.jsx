import React from "react";
import { useParams, useLocation, NavLink } from "react-router-dom";
import qs from "query-string";

function ProductDetails(props) {
  let parms = useParams();
  let id = parseInt(parms.id, 10);
  let product = props.getInvoice(id);
  let queryString = qs.parse(useLocation().search);
  return (
    <div className="container" style={{marginTop: "80px"}}>
      <h1 style={{ color: "red" }}>Product Id : {product.id}</h1>
      <h1 style={{ color: "green" }}>Product Name : {product.name}</h1>
      <h1 style={{ color: "blue" }}>Product Count : {product.count}</h1>
      <h1 style={{ color: "blue" }}>Query String is : {queryString.search}</h1>
      <NavLink to={`/products/edit/${product.id}`}>
        <button className="btn btn-primary">Edit Product</button>
      </NavLink>
    </div>
  );
}

export default ProductDetails;
