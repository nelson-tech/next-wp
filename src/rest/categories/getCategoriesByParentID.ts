import { getCategories } from "./getCategories"

export const getCategoriesByParentID = async (parentID: number) => {
  const categories = await getCategories()
  const categoriesByParentID =
    categories.data?.filter((category) => category.parent === parentID) ?? null
  return categoriesByParentID
}
