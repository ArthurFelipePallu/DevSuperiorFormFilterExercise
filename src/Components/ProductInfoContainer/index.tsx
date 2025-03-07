import "./styles.css";
import ProductInfoDisplay from "../../Components/ProductInfoContainer/ProductInfoDisplay";
import { ProductDTO } from "../../Models/product";

type Prop ={
  filteredProductList: ProductDTO[];
}

export default function ProductInfoContainer({filteredProductList}:Prop) {


  if (filteredProductList.length == 0) return null;
  return (
    <div className="form-filter-container form-filter-container-area">
      {filteredProductList.map((item) => (
        <ProductInfoDisplay product={item} key={item.id} />
      ))}
    </div>
  );
}
