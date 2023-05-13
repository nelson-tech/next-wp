import { describe, expect, it } from "vitest"
import getClient from "@rest/client"
import { startServer } from "test/mocks/server"
import { REST_WC_PRODUCTS_URL } from "~/utils/constants/rest"
import { products } from "test/mocks/data/products"

describe("REST Client", () => {
  it("Should throw an error if NEXT_PUBLIC_API_HOST is not set as env variable", () => {
    const env = process.env

    process.env = {}

    expect(() => getClient()).toThrow("NEXT_PUBLIC_API_HOST is not set")

    process.env = env
  })

  describe("fetch", () => {
    it("Should return fetch", () => {
      const restClient = getClient()

      expect(restClient).toHaveProperty("fetch")
    })

    describe("fetch - Unreachable address", () => {
      it("Should return undefined", async () => {
        const restClient = getClient()

        const response = await restClient.fetch(REST_WC_PRODUCTS_URL)

        expect(response).toBeUndefined()
      })
    })
  })

  describe("wcFetch", () => {
    const restClient = getClient()

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

        expect(response).toHaveProperty("data")
        expect(response).toHaveProperty("headers")
      })

      it("Should fetch data from API with search params", async () => {
        const response = await restClient.wcFetch({
          path: "/products",
          searchParams: { slug: "test" },
        })

        expect(response).toHaveProperty("data")
        expect(response).toHaveProperty("headers")
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

        expect(response).toHaveProperty("data")
        expect(response).toHaveProperty("headers")
      })
    })

    describe("wcFetch - Unreachable address", async () => {
      it("Should return null", async () => {
        const restClient = getClient()

        const response = await restClient.wcFetch({ path: "/products" })

        expect(response).toBeNull()
      })
    })
  })
})
