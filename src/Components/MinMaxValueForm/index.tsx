import "./styles.css";
import { useContext, useState } from "react";
import { ProductDTO } from "../../Models/product";
import ProductInfoContainer from "../ProductInfoContainer"; 
import * as ProductService from "../../Services/product-service";
import { PriceRange, ProductCountProvider } from "../../Utils/context-product";
import FormErrorMessage from "../../Components/MinMaxValueForm/FormErrorMessage";
import {
  INVALID_MAX_VALUE_WARNING_MESSAGE,
  INVALID_MIN_VALUE_WARNING_MESSAGE,
} from "../../Utils/system";

export default function MinMaxValueForm() {
  const { setContextProductCount } = useContext(ProductCountProvider);

  const [formData, setFormData] = useState<PriceRange>({ possible: true });
  const [minValueDefined, setMinValueDefined] = useState(false);
  const [maxValueDefined, setMaxValueDefined] = useState(false);
  const [productList, setProductList] = useState<ProductDTO[]>([]);

  function handleSubmit(event: any) {
    event.preventDefault();
    handleInputErrors();
    OnFilter(formData.minValue!, formData.maxValue!);
  }

  function OnFilter(min: number, max: number) {
    const filteredData = ProductService.findByPrice(min || 0, max || 0);
    setFilteredData(filteredData);
  }

  function setFilteredData(data: ProductDTO[]) {
    setContextProductCount(data.length);
    setProductList(data);
  }

  function handleInputErrors() {
    DealWithMinValue();
    DealWithMaxValue();
    isMinValueGreaterThanMaxValue();
  }

  function DealWithMinValue() {
    if (isMinValueUndefined()) {
      formData.minValue = Number.MIN_VALUE;
    }
  }
  function DealWithMaxValue() {
    if (isMaxValueUndefined()) {
      formData.maxValue = Number.MAX_VALUE;
    }
  }
  function isMinValueUndefined() {
    const minDefined = formData.minValue === undefined;
    setMinValueDefined(minDefined);
    return minDefined;
  }

  function isMaxValueUndefined() {
    const maxDefined = formData.maxValue === undefined;
    setMaxValueDefined(maxDefined);
    return maxDefined;
  }

  function isMinValueGreaterThanMaxValue() {
    if (formData.minValue! < formData.maxValue!) {
      setFormData({ ...formData, possible: true });

      return;
    } else if (formData.minValue! == formData.maxValue!)
      printMessage("The min and max values are equal");
    else printMessage("The minValue is greater than the maxValue ");
    setFormData({ ...formData, possible: false });
    return;
  }

  function printMessage(message: string) {
    console.log(message);
  }

  function handleInputChange(event: any) {
    let value = event.target.value;
    if (value == "") value = undefined;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="form-filter-container ">
      <div className="form-filter-form-repo-container">
        <div className="form-filter-form-area">
          <form onSubmit={handleSubmit}>
            <div className="form-filter-input-box">
              <input
                name="minValue"
                type="number"
                value={formData.minValue || ""}
                placeholder="min value"
                onChange={handleInputChange}
                className="form-filte-box form-filter-input-style"
              />
              <FormErrorMessage
                errorOcurred={minValueDefined}
                errorMessage={INVALID_MIN_VALUE_WARNING_MESSAGE}
              />
            </div>
            <div className="form-filter-input-box">
              <input
                name="maxValue"
                type="number"
                value={formData.maxValue || ""}
                placeholder="max value"
                onChange={handleInputChange}
                className="form-filte-box form-filter-input-style"
              />
              <FormErrorMessage
                errorOcurred={maxValueDefined}
                errorMessage={INVALID_MAX_VALUE_WARNING_MESSAGE}
              />
            </div>
            <div className="form-filter-input-box">
              <button
                type="submit"
                className="form-filte-box form-filter-button-style"
              >
                Filtrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <ProductInfoContainer filteredProductList={productList} />
    </div>
  );
}
