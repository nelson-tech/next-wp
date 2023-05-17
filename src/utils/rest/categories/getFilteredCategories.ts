import { REST_WC_Category_Tree, buildHierarchy } from "src"
import { getCategories } from "."

export const getFilteredCategories = async () => {
  const { data: categories } = await getCategories()

  const filteredCategories = buildHierarchy(categories) as
    | REST_WC_Category_Tree[]
    | null

  return filteredCategories
}
