import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./Components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/welcome"> </Navigate>}></Route>
          <Route path="/welcome/*" element={<Welcome />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
        </Routes>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
