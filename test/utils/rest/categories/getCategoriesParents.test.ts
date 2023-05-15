import { categories } from "test/mocks/data/categories"
import { startServer } from "test/mocks/server"
import { describe, expect, it } from "vitest"
import { REST_WC_CATEGORIES_URL } from "src/utils/constants/rest"
import { getCategoriesParents } from "src"

describe("getCategoriesParents", () => {
  describe("getCategoriesParents - Successful call", () => {
    startServer({
      restOptions: { path: REST_WC_CATEGORIES_URL, mockData: categories },
    })

    it("should return categories parents", async () => {
      const categoriesParents = await getCategoriesParents()

      expect(categoriesParents?.length).toEqual(1)
      expect(categoriesParents?.[0].id).toEqual(101)
    })
  })

  describe("getCategoriesParents - Failed call", () => {
    startServer({
      restOptions: {
        path: "tsrt" + REST_WC_CATEGORIES_URL,
        mockData: categories,
      },
    })

    it("should return null", async () => {
      const categoriesParents = await getCategoriesParents()

      expect(categoriesParents).toEqual(null)
    })
  })
})
