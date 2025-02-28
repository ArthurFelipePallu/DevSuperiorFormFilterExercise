import "./styles.css";
import { useState } from "react";

import {INVALID_MAX_VALUE_WARNING_MESSAGE , 
    INVALID_MIN_VALUE_WARNING_MESSAGE ,
    MIN_VALUE_IS_GREATER_THAN_MAX_VALUE_ERROR_MESSAGE } from "../../Utils/system";
    
import FormErrorMessage from "../../Components/MinMaxValueForm/FormErrorMessage";

type FormData = {
minValue?: number;
maxValue?: number;
}; 



export default function MinMaxValueForm() {

    const [formData, setFormData] = useState<FormData>({});
    const [minValueDefined,setMinValueDefined] =useState(false);
    const [maxValueDefined,setMaxValueDefined] =useState(false);
    const [ minIsGreater ,setMinIsGreater] = useState(false);
  
    function handleSubmit(event: any) {
      event.preventDefault();
      handleInputErrors();
      console.log(formData);
    }
  
    function handleInputErrors() {
      DealWithMinValue();
      DealWithMaxValue();
      isMinValueGreaterThanMaxValue();
    }
  
    function DealWithMinValue() {
      if (isMinValueUndefined()) {
        formData.minValue = Number.MIN_VALUE;
        printMessage(
          "The minValue was undefined , now it is Set to the Minimum Value"
        );
      }
    }
    function DealWithMaxValue() {
      if (isMaxValueUndefined()) {
        formData.maxValue = Number.MAX_VALUE;
        printMessage(
          "The maxValue was undefined , now it is Set to the Maximum Value"
        );
      }
    }
  
    function isMinValueUndefined() {
      const minDefined = formData.minValue == undefined;
      setMinValueDefined(minDefined);
      return minDefined;
    }
  
    function isMaxValueUndefined() {
      const maxDefined = formData.maxValue == undefined;
      setMaxValueDefined(maxDefined);
      return maxDefined;
    }
  
    function isMinValueGreaterThanMaxValue() {
      let isGreater = false;
      setMinIsGreater(isGreater);
      if (formData.minValue! < formData.maxValue!) return;
      else if (formData.minValue! == formData.maxValue!)
        printMessage("The min and max values are equal");
      else printMessage("The minValue is greater than the maxValue ");
      isGreater = true;
      setMinIsGreater(isGreater);
      return ;
    }
  
    function printMessage(message: string) {
      console.log(message);
    }
  
    function handleInputChange(event: any) {
      const value = event.target.value;
      const name = event.target.name;
      setFormData({ ...formData, [name]: value });
    }
  


  return (
    <div className="form-filter-container">
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
            <FormErrorMessage
              errorOcurred={minIsGreater}
              errorMessage={MIN_VALUE_IS_GREATER_THAN_MAX_VALUE_ERROR_MESSAGE}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
