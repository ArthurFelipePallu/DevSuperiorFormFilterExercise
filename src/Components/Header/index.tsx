import { Link } from "react-router-dom";
import "./styles.css";
import ProductCounter from "./ProductCounter";

export default function Header() {
  return (
    <>
      <header className="form-filter-header ">
        <nav className="form-filter-container">
          <Link to="/">
            <h2>DSFilter</h2>
          </Link>
          <ProductCounter />
        </nav>
      </header>
    </>
  );
}
