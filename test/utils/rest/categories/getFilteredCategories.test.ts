import { REST_WC_CATEGORIES_URL, getFilteredCategories } from "src"
import { categories } from "test/mocks/data/categories"
import { startServer } from "test/mocks/server"
import { describe, expect, it } from "vitest"

describe("getFilteredCategories", () => {
  describe("filtered categories - Successful call", () => {
    startServer({
      restOptions: { path: REST_WC_CATEGORIES_URL, mockData: categories },
    })
    it("should return a filtered categories", async () => {
      const filteredCategories = await getFilteredCategories()

      console.log(filteredCategories && filteredCategories[0].children?.[0])

      expect(filteredCategories).to.be.an("array")
      expect(filteredCategories?.[0]?.slug).toBe("parent-category")
      expect(filteredCategories?.[0]?.children).to.be.an("array")
      expect(filteredCategories?.[0]?.children?.length).toBe(2)
      expect(filteredCategories?.[0]?.children?.[0]?.slug).toBe(
        "child-category"
      )
      expect(filteredCategories?.[0]?.children?.[0]?.ancestor?.slug).toBe(
        "parent-category"
      )
    })
  })
})
