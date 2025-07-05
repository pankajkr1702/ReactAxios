import { commonAPI } from "./commonAPI"

export const callProduct = async(data) =>
{
    return await commonAPI("GET",'https://fakestoreapi.com/products',data)
}

export const callSingleProduct = async(data) =>
{
    return await commonAPI("GET",'https://fakestoreapi.com/products/1',data)
}


