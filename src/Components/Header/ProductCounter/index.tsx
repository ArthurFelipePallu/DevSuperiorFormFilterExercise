import { useContext } from "react";
import "./styler.css";
import { ProductCountProvider } from "../../../Utils/context-product";

export default function ProductCounter() {
  const { contextProductCount } = useContext(ProductCountProvider);


  return (
    <>
        <p className="formfilter-header-counter">{contextProductCount} procutos</p>
    </>
  );
}
