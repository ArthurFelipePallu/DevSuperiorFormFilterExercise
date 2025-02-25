import { useState } from "react";
import "./styles.css";

import {INVALID_MAX_VALUE_WARNING_MESSAGE , 
        INVALID_MIN_VALUE_WARNING_MESSAGE } from "../../Utils/system";
import FormErrorMessage from "../../Components/MinMaxValueForm/FormErrorMessage";

type FormData = {
  minValue?: number;
  maxValue?: number;
};

export default function FormFilter() {
  const [formData, setFormData] = useState<FormData>({});
  const [minValueDefined,setMinValueDefined] =useState(false);
  const [maxValueDefined,setMaxValueDefined] =useState(false);
  let minIsGreater :boolean = false;


  function handleSubmit(event: any) {
    event.preventDefault();
    handleInputErrors();
    console.log(formData);
  }

  function handleInputErrors() {
    DealWithMinValue();
    DealWithMaxValue();
    isMinValueLesserThanMaxValue();
  }

  function DealWithMinValue() {
    if (!isMinValueSet()) {
      formData.minValue = Number.MIN_VALUE;
      printMessage(
        "The minValue was undefined , now it is Set to the Minimum Value"
      );
    }
  }
  function DealWithMaxValue() {
    if (!isMaxValueSet()) {
      formData.maxValue = Number.MAX_VALUE;
      printMessage(
        "The maxValue was undefined , now it is Set to the Maximum Value"
      );
    }
  }

  function isMinValueSet() {
    setMinValueDefined(formData.minValue !== undefined);
    return minValueDefined;
  }

  function isMaxValueSet() {
    setMaxValueDefined(formData.maxValue !== undefined);
    return maxValueDefined;
  }

  function isMinValueLesserThanMaxValue(): boolean {
    minIsGreater = false;
    if (formData.minValue! < formData.maxValue!) return true;
    else if (formData.minValue! == formData.maxValue!)
      printMessage("The min and max values are equal");
    else printMessage("The minValue is greater than the maxValue ");
    minIsGreater = true;
    return false;
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
    <>
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
              <FormErrorMessage errorOcurred={minValueDefined} errorMessage={INVALID_MIN_VALUE_WARNING_MESSAGE} />
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
{/* 
              <h5 className="form-filter-input-error">{INVALID_MAX_VALUE_WARNING_MESSAGE}</h5> */}
            </div>
            <div className="form-filter-input-box">
              <button
                type="submit"
                className="form-filte-box form-filter-button-style"
              >
                Filtrar
              </button>
{/* 
              <h5 className="form-filter-input-error">Error: minValue is greater than maxValue</h5> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
