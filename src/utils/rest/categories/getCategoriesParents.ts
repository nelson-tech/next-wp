import { getCategories } from "./getCategories"

export const getCategoriesParents = async () => {
  const categories = await getCategories()
  const categoriesParents =
    categories.data?.filter((category) => category.parent === 0) ?? null

  return categoriesParents
}
