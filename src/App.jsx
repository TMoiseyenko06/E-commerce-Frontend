import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import CustomerForm from "./CustomerForm";
import NavBar from "./NavBar";
import Customers from  "./Customers"
import Search from "./Search"
import Products from "./products";
import ProductForm from "./ProductForm";
import PlaceOrderForm from "./PlaceOrder";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Customer-form" element={<CustomerForm/>}></Route>
        <Route path="/Customer-form/:id" element={<CustomerForm/>}></Route>
        <Route path="/customers/:id" element={<Customers />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product-form/:id" element={<ProductForm />}></Route>
        <Route path="/product-form" element={<ProductForm />}></Route>
        <Route path="/place-order" element={<PlaceOrderForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
