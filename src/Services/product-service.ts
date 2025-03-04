import axios, { AxiosRequestConfig } from "axios";
import {BASE_URL} from "../Utils/system"


export function getAllProducts(){

    const config : AxiosRequestConfig ={
        method:"GET",
        baseURL:BASE_URL,
        url:"/products",
    }
    return axios(config);
}
export function findProductById(id:number){
    return axios.get(`${BASE_URL}/products/${id}`)
}
