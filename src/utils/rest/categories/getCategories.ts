import { REST_WC_Category } from "../../../types"
import { getRestClient } from ".."

export const getCategories = async () => {
  const client = getRestClient()

  const response = await client.wcFetch({ path: "/products/categories" })

  return response as {
    data: REST_WC_Category[] | null
    headers: Headers | null
    status: number | null
  }
}
