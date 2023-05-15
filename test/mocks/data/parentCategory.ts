import { REST_WC_Category } from "src/types"

export const parentCategory: REST_WC_Category = {
  id: 101,
  name: "Parent Category",
  slug: "parent-category",
  description: "This is a parent category.",
  parent: 0,
  count: 1,
  image: null,
  review_count: 0,
  permalink: "https://api.example.com/product-category/parent-category/",
}
