import { categories } from "test/mocks/data/categories"
import { startServer } from "test/mocks/server"
import { describe, expect, it } from "vitest"
import { REST_WC_CATEGORIES_URL } from "src/utils/constants/rest"
import { getCategoryBySlug } from "src"

describe("getCategoryBySlug", () => {
  startServer({
    restOptions: { path: REST_WC_CATEGORIES_URL, mockData: categories },
  })

  it("Should return parent category by slug", async () => {
    const parentCategory = await getCategoryBySlug("parent-category")

    expect(parentCategory?.id).toBe(101)
  })

  it("Should return child category by slug", async () => {
    const childCategory = await getCategoryBySlug("child-category")

    expect(childCategory?.id).toBe(102)
  })

  it("Should return null if category not found", async () => {
    const response = await getCategoryBySlug("not-exists")

    expect(response).toBe(null)
  })
})
