import "./styler.css";
import { useContext } from "react";
import { ProductCountProvider } from "../../../Utils/context-product";

export default function ProductCounter() {
  const { contextProductCount } = useContext(ProductCountProvider);


  if(contextProductCount < 0) return null;
  return (
    <>
        <p className="formfilter-header-counter">{contextProductCount} procutos</p>
    </>
  );
}
