import { REST_WC_Product } from "../../types"
import { getRestClient } from "../client"

export const getProductBySlug = async (slug: string) => {
  const { wcFetch } = getRestClient()

  const response = await wcFetch({
    path: `/products/${slug}`,
  })

  return response as {
    data: REST_WC_Product | null
    headers: Headers
    status: number
  }
}
