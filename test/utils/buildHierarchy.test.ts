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
    expect(hierarchy[0].children[0]).to.have.property("ancestor")
    expect(hierarchy[0].children[0].ancestor?.id).to.equal(hierarchy[0].id)
    expect(hierarchy[0].children[0].ancestor?.name).to.equal("Parent Category")
  })
})
