import "./App.css";
import Home from "./Routes";
import { useState } from "react";
import HomeBody from "./Routes/HomeBody";
import FormFilter from "./Routes/FormFilter";
import {
  PriceRange,
  ProductCountProvider,
  ProductPriceRangeProvider,
} from "./Utils/context-product";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(-1);
  const [contextPriceRange, setContextPriceRange] = useState<PriceRange>({
    minValue: 0,
    maxValue: 0,
    possible: true,
  });
  return (
    <ProductCountProvider.Provider
      value={{ contextProductCount, setContextProductCount }}
    >
      <ProductPriceRangeProvider.Provider
        value={{ contextPriceRange, setContextPriceRange }}
      >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<HomeBody />} />
                <Route path="formfilter" element={<FormFilter />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>     
      </ProductPriceRangeProvider.Provider>
    </ProductCountProvider.Provider>
  );
}
