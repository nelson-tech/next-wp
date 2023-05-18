import {
  REST_WC_Client_SearchParams_Products,
  REST_WC_Product,
} from "../../types"
import { getRestClient } from "../client"

export const getProducts = async (
  searchParams?: REST_WC_Client_SearchParams_Products
) => {
  const { wcFetch } = getRestClient()

  const response = await wcFetch({
    path: "/products",
    searchParams,
  })

  return response as {
    data: REST_WC_Product[] | null
    headers: Headers
    status: number
  }
}
