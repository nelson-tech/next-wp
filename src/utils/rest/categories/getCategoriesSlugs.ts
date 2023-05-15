import { getCategories } from "."

export const getCategoriesSlugs = async () => {
  const response = await getCategories()

  if (response.data) {
    return response.data.map((category) => category.slug)
  }
  return null
}
