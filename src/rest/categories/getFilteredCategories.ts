import { buildHierarchy } from "../../utils"
import { REST_WC_Category_Parent } from "../../types"
import { getCategories } from "."

export const getFilteredCategories = async () => {
  const { data: categories } = await getCategories()

  const filteredCategories = buildHierarchy(categories) as
    | REST_WC_Category_Parent[]
    | null

  return filteredCategories
}
