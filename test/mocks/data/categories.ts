import { REST_WC_Category } from "src/types"
import { parentCategory } from "./parentCategory"
import { childCategory, childCategory2 } from "./childCategory"

export const categories: REST_WC_Category[] = [
  parentCategory,
  childCategory,
  childCategory2,
]
