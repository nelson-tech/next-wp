import { categories } from "test/mocks/data/categories"
import { startServer } from "test/mocks/server"
import { describe, expect, it } from "vitest"
import { getCategoriesByParentSlug } from "src"
import { REST_WC_CATEGORIES_URL } from "src/utils/constants/rest"

describe("getCategoriesByParentSlug", () => {
  describe("getCategoriesByParentSlug - Successful call", () => {
    startServer({
      restOptions: {
        path: REST_WC_CATEGORIES_URL,
        mockData: categories,
      },
    })
    it("should return categories by parent slug", async () => {
      const categoriesByParentSlug = await getCategoriesByParentSlug(
        "parent-category"
      )

      expect(categoriesByParentSlug?.length).toEqual(1)
      expect(categoriesByParentSlug?.[0].id).toEqual(102)
    })
  })

  describe("getCategoriesByParentSlug - Failed call", () => {
    startServer({
      restOptions: {
        path: "tsrt" + REST_WC_CATEGORIES_URL,
        mockData: categories,
      },
    })

    it("should return null", async () => {
      const categoriesByParentSlug = await getCategoriesByParentSlug(
        "parent-category"
      )

      expect(categoriesByParentSlug).toEqual(null)
    })
  })
})
