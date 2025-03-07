import "./App.css";
import Home from "./Routes";
import { useState } from "react";
import FormFilter from "./Routes/FormFilter";
import { ProductCountProvider } from "./Utils/context-product";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(-1);
  return (
    <ProductCountProvider.Provider
      value={{ contextProductCount, setContextProductCount }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<FormFilter />} />
            <Route path="formfilter" element={<FormFilter />} />
          </Route>
          <Route path="*" element={<Navigate to="/formfilter" />} />
        </Routes>
      </BrowserRouter>
    </ProductCountProvider.Provider>
  );
}
