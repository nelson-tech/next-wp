import { startServer } from "test/mocks/server"
import { describe, expect, it } from "vitest"
import { REST_WC_CATEGORIES_URL } from "src/utils/constants/rest"
import { categories } from "test/mocks/data/categories"
import { getCategoriesSlugs } from "src"

describe("getCategoriesSlugs", () => {
  describe("getCategoriesSlugs - Successful call", () => {
    startServer({
      restOptions: { path: REST_WC_CATEGORIES_URL, mockData: categories },
    })

    it("Should return slugs of categories", async () => {
      const response = await getCategoriesSlugs()

      expect(response?.[0]).toBe("parent-category")
      expect(response?.[1]).toBe("child-category")
    })
  })

  describe("getCategoriesSlugs - Empty call", () => {
    startServer({ restOptions: { path: REST_WC_CATEGORIES_URL, mockData: [] } })

    it("Should return empty array if categories not found", async () => {
      const response = await getCategoriesSlugs()

      expect(response?.length).toBe(0)
    })
  })

  describe("getCategoriesSlugs - Error call", () => {
    startServer({
      restOptions: {
        path: "ter" + REST_WC_CATEGORIES_URL,
        mockData: categories,
      },
    })

    it("Should return null if fetch failed", async () => {
      const response = await getCategoriesSlugs()

      expect(response).toBe(null)
    })
  })
})
