import { REST_WC_Image } from "."

export type REST_WC_Category = {
  id: number | null
  name: string | null
  slug: string | null
  description: string | null
  parent: number | null
  count: number | null
  image: REST_WC_Image | null
  review_count: number | null
  permalink: string | null
}

export type REST_WC_Category_Parent = REST_WC_Category & {
  children?: REST_WC_Category_Child[]
}

export type REST_WC_Category_Child = REST_WC_Category & {
  children?: REST_WC_Category_Child[]
  ancestor?: REST_WC_Category | null | undefined
}
