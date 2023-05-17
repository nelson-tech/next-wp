import { startServer } from "test/mocks/server"
import { describe, expect, it } from "vitest"
import { REST_WC_PRODUCTS_URL } from "src/utils/constants/rest"
import { simpleProduct } from "test/mocks/data/simpleProduct"
import { expectRestReturn } from "test/lib/expectRestReturn"
import { getProductBySlug } from "src"

describe("getProductBySlug", () => {
  startServer({
    restOptions: {
      path: REST_WC_PRODUCTS_URL + "/simple-product",
      mockData: simpleProduct,
    },
  })

  it("Should return products", async () => {
    const response = await getProductBySlug("simple-product")

    expectRestReturn(response)
    expect(response.data?.slug).toBe("simple-product")
  })
})
