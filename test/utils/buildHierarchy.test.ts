import { buildHierarchy, REST_WC_Category } from "src"
import { categories } from "test/mocks/data/categories"
import { describe, expect, it } from "vitest"

describe("buildHierarchy", () => {
  it("should build a hierarchy", () => {
    const hierarchy = buildHierarchy(categories) as (REST_WC_Category & {
      children: (REST_WC_Category & {
        ancestor: REST_WC_Category | undefined
      })[]
    })[]

    expect(hierarchy).to.be.an("array")
    expect(hierarchy[0]).to.have.property("children")
    expect(hierarchy[0].children).to.be.an("array")
    expect(hierarchy[0].children).toHaveLength(2)
    expect(hierarchy[0].children[0]).toHaveProperty("ancestor")
    expect(hierarchy[0].children[0].ancestor?.id).toEqual(hierarchy[0].id)
    expect(hierarchy[0].children[0].ancestor?.name).toEqual("Parent Category")
  })

  it("should return null if no categories are passed", () => {
    const hierarchy = buildHierarchy(null)

    expect(hierarchy).toBeNull()
  })
})
