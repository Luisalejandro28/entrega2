import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navbar-container">
          <Link to="/">LOGO</Link>
          <ul className="nav-links">
            <Link to="/">Productos</Link>
            <Link to="/category/Camisas">Camisas</Link>
            <Link to="/category/Abrigos">Abrigos</Link>
            <Link to="/category/Pantalones">Panatalones</Link>
            <Link to="/category/Zapatos">Zapatos</Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
