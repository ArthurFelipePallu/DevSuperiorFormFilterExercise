import { createContext } from "react";


export type ProductCountTtype = {
    contextProductCount : number;
    setContextProductCount: (contextProductCount:number)=>void;
}

export const ProductCountProvider = createContext<ProductCountTtype>({
    contextProductCount:0,
    setContextProductCount: () => {}
});