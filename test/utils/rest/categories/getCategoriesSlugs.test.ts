import { startServer } from "test/mocks/server"
import { describe, expect, it } from "vitest"
import { REST_WC_CATEGORIES_URL } from "src/utils/constants/rest"
import { categories } from "test/mocks/data/categories"
import { getCategoriesSlugs } from "src"

describe("getCategoriesSlugs", () => {
  startServer({
    restOptions: { path: REST_WC_CATEGORIES_URL, mockData: categories },
  })

  it("Should return slugs of categories", async () => {
    const response = await getCategoriesSlugs()

    expect(response?.[0]).toBe("parent-category")
    expect(response?.[1]).toBe("child-category")
  })
})
