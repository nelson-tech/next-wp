import { getCategories } from "./getCategories"

export const getCategoryBySlug = async (slug: string) => {
  const categories = await getCategories()

  const targetCategory =
    categories.data?.find((category) => category.slug === slug) ?? null

  return targetCategory
}
