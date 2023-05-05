import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>This is Product Page...</h1>
      <ul>
        <li>
          <Link to="p1"> Product1</Link>
        </li>
        <li>
          <Link to="p2"> Product2</Link>
        </li>
        <li>
          <Link to="p3"> Product3</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};
export default Product;
