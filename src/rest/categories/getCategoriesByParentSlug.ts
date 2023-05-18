import { getCategoriesByParentID } from "./getCategoriesByParentID"
import { getCategoryBySlug } from "./getCategoryBySlug"

export const getCategoriesByParentSlug = async (parentSlug: string) => {
  const parentCategory = await getCategoryBySlug(parentSlug)
  if (parentCategory?.id) {
    const childCategories = await getCategoriesByParentID(parentCategory.id)
    return childCategories
  }
  return null
}
