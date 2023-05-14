import { describe, expect, it } from "vitest"
import { getRestClient } from "src"
import { REST_WC_PRODUCTS_URL } from "src/utils/constants/rest"
import { startServer } from "test/mocks/server"
import { products } from "test/mocks/data/products"
import {
  expectRestReturn,
  expectRestReturnNull,
} from "test/lib/expectRestReturn"

describe("REST Client", () => {
  it("Should throw an error if NEXT_PUBLIC_API_HOST is not set as env variable", () => {
    const env = process.env

    process.env = {}

    expect(() => getRestClient()).toThrow("NEXT_PUBLIC_API_HOST is not set")

    process.env = env
  })

  describe("fetch", () => {
    it("Should return fetch", () => {
      const restClient = getRestClient()

      expect(restClient).toHaveProperty("fetch")
    })

    describe("fetch - Unreachable address", () => {
      it("Should return undefined", async () => {
        const restClient = getRestClient()

        const response = await restClient.fetch(REST_WC_PRODUCTS_URL)

        expect(response).toBeUndefined()
      })
    })
  })

  describe("wcFetch", () => {
    const restClient = getRestClient()

    it("Should return wcFetch", () => {
      expect(restClient).toHaveProperty("wcFetch")
    })

    describe("wcFetch - Successful API GET calls", () => {
      startServer({
        restOptions: {
          path: REST_WC_PRODUCTS_URL,
          mockData: { products },
        },
      })

      it("Should fetch data from API", async () => {
        const response = await restClient.wcFetch({ path: "/products" })

        expectRestReturn(response)
      })

      it("Should fetch data from API with search params", async () => {
        const response = await restClient.wcFetch({
          path: "/products",
          searchParams: { slug: "simple-product" },
        })

        expectRestReturn(response)
      })
    })

    describe("wcFetch - Successful API POST calls", () => {
      startServer({
        restOptions: {
          path: REST_WC_PRODUCTS_URL,
          mockData: { products },
          method: "POST",
        },
      })

      it("Should fetch data from API with body", async () => {
        const response = await restClient.wcFetch({
          path: "/products",
          method: "POST",
          body: "test",
        })

        expectRestReturn(response)
      })
    })

    describe("wcFetch - Unreachable address", async () => {
      it("Should return null", async () => {
        const restClient = getRestClient()

        const response = await restClient.wcFetch({ path: "/products" })

        expectRestReturnNull(response)
      })
    })
  })
})
