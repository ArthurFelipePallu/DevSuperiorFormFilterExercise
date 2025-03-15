import { useContext, useState } from "react";
import { ProductDTO } from "../../Models/product";
import MinMaxValueForm from "../../Components/MinMaxValueForm";
import * as ProductService from "../../Services/product-service";
import { ProductCountProvider } from "../../Utils/context-product";
import ProductInfoContainer from "../../Components/ProductInfoContainer";

export default function FormFilter() {
  const { setContextProductCount } = useContext(ProductCountProvider);

  const [productList, setProductList] = useState<ProductDTO[]>([]);


  function OnFilter(min: number, max: number) {
    const filteredData = ProductService.findByPrice(min || 0, max || 0);
    setFilteredData(filteredData);
  }

  function setFilteredData(data: ProductDTO[]) {
    setContextProductCount(data.length);
    setProductList(data);
  }


  return (
    <>
      <MinMaxValueForm onFilter={OnFilter} />
      <ProductInfoContainer filteredProductList={productList} />
    </>
  );
}
