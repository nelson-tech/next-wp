import { REST_WC_Category } from "src/types"

export const childCategory: REST_WC_Category = {
  id: 102,
  name: "Child Category",
  slug: "child-category",
  description: "This is a child category.",
  parent: 101,
  count: 1,
  image: null,
  review_count: 0,
  permalink:
    "https://api.example.com/product-category/parent-category/child-category/",
}

export const childCategory2: REST_WC_Category = {
  id: 103,
  name: "Child Category 2",
  slug: "child-category-2",
  description: "This is another child category.",
  parent: 101,
  count: 1,
  image: null,
  review_count: 0,
  permalink:
    "https://api.example.com/product-category/parent-category/child-category-2/",
}
