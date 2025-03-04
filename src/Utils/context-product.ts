import { createContext } from "react";


export type ProductCountTtype = {
    contextProductCount : number;
    setContextProductCount: (contextProductCount:number)=>void;
}

export const ProductCountProvider = createContext<ProductCountTtype>({
    contextProductCount:0,
    setContextProductCount: () => {}
});

export type PriceRange ={
    minValue?:number;
    maxValue?:number;
    possible:boolean;
}
export type ProductPriceRangeType ={
    contextPriceRange : PriceRange;
    setContextPriceRange: (contextPriceRangeMin:PriceRange) =>void;
}

export const ProductPriceRangeProvider = createContext<ProductPriceRangeType>({
    contextPriceRange:{minValue:0,maxValue:0,possible:false},
    setContextPriceRange: () => {}
});