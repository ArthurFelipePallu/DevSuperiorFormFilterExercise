import { Link } from "react-router-dom";
import "./styles.css";
import ProductCounter from "./ProductCounter";
import { ProductCountProvider } from "../../Utils/context-product";
import { useContext } from "react";

export default function Header() {

  const { setContextProductCount } = useContext(ProductCountProvider);


  function handleClick(){
    setContextProductCount(-1);
  }

  return (
    <>
      <header className="form-filter-header ">
        <nav className="form-filter-container formfilter-vertical-align-center">
          <Link to="/" onClick={handleClick}>
            <h2>DSFilter</h2>
          </Link>
          <ProductCounter />
        </nav>
      </header>
    </>
  );
}
