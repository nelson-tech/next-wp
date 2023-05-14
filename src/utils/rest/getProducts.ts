import { REST_WC_Client_SearchParams_Products, WC_Product } from "src/types"
import { getRestClient } from "./client"

export const getProducts = async (
  searchParams?: REST_WC_Client_SearchParams_Products
) => {
  const { wcFetch } = getRestClient()

  const response = await wcFetch({
    path: "/products",
    searchParams,
    method: "GET",
  })

  return response as {
    data: WC_Product[] | null
    headers: Headers
    status: number
  }
}
