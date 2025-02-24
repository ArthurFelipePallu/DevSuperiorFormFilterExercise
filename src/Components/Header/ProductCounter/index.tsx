import { useContext } from "react";
import "./styler.css";
import { ProductCountProvider } from "../../../Utils/context-product";

export default function ProductCounter() {
  const { contextProductCount, setContextProductCount } = useContext(ProductCountProvider);

    function handleClick() {
        setContextProductCount(contextProductCount + 1);
    }

  return (
    <>
      <div onClick={handleClick}>
        <p>{contextProductCount} procutos</p>
      </div>
    </>
  );
}
