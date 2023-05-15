import { getCategories } from "."

export const getCategoriesSlugs = async () => {
  const response = await getCategories()

  const categoriesSlugs =
    response.data?.map((category) => category.slug) ?? null

  return categoriesSlugs
}
