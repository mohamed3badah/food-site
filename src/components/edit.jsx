import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit(props) {
  let params = useParams();
  let id = parseInt(params.id, 10);
  let product = props.getInvoice(id);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section className="get-in-touch">
        <h1 className="title">Edit Item No.{product.id}</h1>
        <form className="contact-form row">
          <div className="form-field col-lg-6">
            <input
              id="name"
              className="input-text js-input"
              type="text"
              placeholder={product.name}
              required
            />
            <label className="label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <input
              id="count"
              className="input-text js-input"
              type="number"
              placeholder={product.count}
              required
            />
            <label className="label" htmlFor="count">
              Count Number
            </label>
          </div>
          <div className="form-field col-lg-12">
            <input
              className="submit-btn"
              onClick={(e) => {
                e.preventDefault();
                let name = document.getElementById("name").value;
                let count = document.getElementById("count").value;
                props.editHandler(product, name, count);
                navigate(`/products/${id}`, {
                  replace: true,
                  state: { edit: "succeeded" },
                });
              }}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default Edit;
