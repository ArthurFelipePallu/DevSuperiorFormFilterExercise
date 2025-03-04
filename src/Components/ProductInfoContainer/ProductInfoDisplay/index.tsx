import { CompleteProductDTO } from "../../../Models/product";
import "./style.css";

type Props ={
    product : CompleteProductDTO;
}

export default function ProductInfoDisplay( { product } : Props ) { 
  return(
    <>
        <div className="info-display-container">
            <p className="product-name">{product.name}</p>
            <p className="product-price">R$ {product.price.toFixed(2)}</p>
        </div>
    </>
  );
}
