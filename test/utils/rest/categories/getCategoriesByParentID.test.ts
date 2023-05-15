import { categories } from "test/mocks/data/categories"
import { startServer } from "test/mocks/server"
import { describe, expect, it } from "vitest"
import { REST_WC_CATEGORIES_URL } from "src/utils/constants/rest"
import { getCategoriesByParentID } from "src"

describe("getCategoriesByParentID", () => {
  describe("getCategoriesByParentID - Successful call", () => {
    startServer({
      restOptions: { path: REST_WC_CATEGORIES_URL, mockData: categories },
    })

    it("should return categories by parent ID", async () => {
      const categoriesByParentID = await getCategoriesByParentID(101)

      expect(categoriesByParentID?.length).toEqual(1)
      expect(categoriesByParentID?.[0].id).toEqual(102)
    })

    it("should return empty array if no categories found", async () => {
      const categoriesByParentID = await getCategoriesByParentID(999)

      expect(categoriesByParentID?.length).toEqual(0)
    })
  })

  describe("getCategoriesByParentID - Failed call", () => {
    startServer({
      restOptions: {
        path: "tsrt" + REST_WC_CATEGORIES_URL,
        mockData: categories,
      },
    })

    it("should return null", async () => {
      const categoriesByParentID = await getCategoriesByParentID(101)

      expect(categoriesByParentID).toEqual(null)
    })
  })
})
