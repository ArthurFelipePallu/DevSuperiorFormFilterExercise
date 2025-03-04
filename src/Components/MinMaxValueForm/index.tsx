import "./styles.css";
import { useContext, useState } from "react";
import FormErrorMessage from "../../Components/MinMaxValueForm/FormErrorMessage";
import github_icon from "../../assets/github-icon.png";
import sprint_tool_icon from "../../assets/spring-tool-icon.png";
import * as UserService from "../../Services/user-localStorage-service"

import {
  GIT_NAME,
  INVALID_MAX_VALUE_WARNING_MESSAGE,
  INVALID_MIN_VALUE_WARNING_MESSAGE,
  MIN_VALUE_IS_GREATER_THAN_MAX_VALUE_ERROR_MESSAGE,
} from "../../Utils/system";
import {
  PriceRange,
  ProductPriceRangeProvider,
} from "../../Utils/context-product";

export default function MinMaxValueForm() {
  const { contextPriceRange, setContextPriceRange } = useContext(
    ProductPriceRangeProvider
  );

  const [formData, setFormData] = useState<PriceRange>({ possible: true });
  const [minValueDefined, setMinValueDefined] = useState(false);
  const [maxValueDefined, setMaxValueDefined] = useState(false);
  const userInfo = UserService.GetUserInfo();

  function handleSubmit(event: any) {
    event.preventDefault();
    handleInputErrors();
    setContextPriceRange(formData);
    UpdateFormFilter();
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

  function UpdateFormFilter() {
    setContextPriceRange(formData);
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

  function getRepositoryImage():string{
    if(userInfo.repository == GIT_NAME)
      return github_icon;
    return sprint_tool_icon;
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
              <FormErrorMessage
                errorOcurred={!contextPriceRange.possible}
                errorMessage={MIN_VALUE_IS_GREATER_THAN_MAX_VALUE_ERROR_MESSAGE}
              />
            </div>
          </form>
        </div>
        <div className="form-filter-repo-img-container">
          <img src={getRepositoryImage()} />
        </div>
      </div>
    </div>
  );
}
