import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar className="nav">
      <Nav.Item>
        <Navbar.Brand className="mx-3 nav-element" as={NavLink} to={"/"}>
          Home
        </Navbar.Brand>
      </Nav.Item>
      <Nav.Item>
        <Nav className="mx-3 nav-element" as={NavLink} to={"/Customer-form"}>
          Create Customer
        </Nav>
      </Nav.Item>
      <Nav.Item className="mx-3 nav-element" as={NavLink} to={"/search"}>
        Search Customers
      </Nav.Item>
      <Nav.Item className="mx-3 nav-element" as={NavLink} to={"/products"}>
        Products
      </Nav.Item>
      <Nav.Item className="mx-3 nav-element" as={NavLink} to={"/place-order"}>
        Place Order
      </Nav.Item>
    </Navbar>
  );
}

export default NavBar;
