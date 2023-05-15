import { categories } from "test/mocks/data/categories"
import { describe, expect, it } from "vitest"
import { REST_WC_CATEGORIES_URL } from "src/utils/constants/rest"
import { startServer } from "test/mocks/server"
import { getCategories } from "src/utils/rest/categories"

describe("getCategories", () => {
  startServer({
    restOptions: { path: REST_WC_CATEGORIES_URL, mockData: categories },
  })

  it("Should return categories", async () => {
    const response = await getCategories()

    expect(response.data?.[0]?.slug).toBe("parent-category")
    expect(response.data?.[1]?.slug).toBe("child-category")
  })
})
