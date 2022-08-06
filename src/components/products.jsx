import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Products(props) {
  let invoices = props.items;
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <form className="d-flex m-3" role="search">
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
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 justify-content-center">
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <div className="card-group m-3" key={invoice.id}>
              <div
                className="col-sm-6 border-1"
                style={{ display: "inline-block", width: "350px" }}
              >
                <div className="card-body text-center rounded-4 border border-success p-2">
                  <h5 className="card-title">{invoice.name}</h5>
                  <p className="card-text">
                    There are {invoice.count} from this product
                  </p>
                  <Link
                    className="btn btn-primary"
                    to={`/products/${invoice.id}`}
                    key={invoice.id}
                  >
                    Go There
                  </Link>
                </div>
              </div>
            </div>
          ))}
        <Outlet />
      </div>
    </div>
  );
}
