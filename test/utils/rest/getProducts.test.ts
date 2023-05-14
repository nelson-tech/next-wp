import { describe, expect, it } from "vitest"
import { getProducts } from "src"
import { REST_WC_PRODUCTS_URL } from "src/utils/constants/rest"
import { startServer } from "test/mocks/server"
import { products as productsData } from "test/mocks/data/products"
import { expectRestReturn } from "test/lib/expectRestReturn"

describe("getProducts", () => {
  startServer({
    restOptions: {
      path: REST_WC_PRODUCTS_URL,
      mockData: { products: productsData },
    },
  })

  it("Should return products", async () => {
    const response = await getProducts()

    expectRestReturn(response)
  })
})
