export type REST_WC_Client_Input = {
  path: string
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  body?: string
  searchParams?: REST_WC_Client_SearchParams
}

export type REST_WC_Client_SearchParams = REST_WC_Client_SearchParams_Products

export type REST_WC_Pagination = {
  page?: number
  per_page?: number
}

export type REST_WC_Client_SearchParams_Products = {
  search?: number
  slug?: string
  after?: string
  before?: string
  date_column?: string
  exclude?: string[]
  include?: string[]
  offset?: number
  order?: "asc" | "desc"
  orderBy?:
    | "date"
    | "modified"
    | "id"
    | "include"
    | "title"
    | "slug"
    | "price"
    | "popularity"
    | "rating"
    | "menu_order"
    | "comment_count"
  parent?: string[]
  parent_exclude?: string[]
  type?: string
  sku?: string
  featured?: boolean
  category?: string
  category_operator?: "in" | "not_in" | "and"
  tag?: string
  tag_operator?: "in" | "not_in" | "and"
  on_sale?: boolean
  min_price?: string
  max_price?: string
  stock_status?: "instock" | "outofstock" | "onbackorder"
  attributes?: { attribute: string; operator?: "in" | "not_in" | "and" } & (
    | { term_id: string }
    | { slug: string }
  )
  attribute_relation?: "or" | "and"
  catalog_visibility?: "any" | "visible" | "catalog" | "search" | "hidden"
  rating?: boolean
} & REST_WC_Pagination

export type REST_Response_Error = {
  code: string
  message: string
  data: {
    status: number
  }
}

export type REST_Client_Response = {
  data: any
  headers: Headers | null
  status: number | null
}
