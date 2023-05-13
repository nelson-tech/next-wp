export type WC_ProductImage = {
  id: number | null
  src: string | null
  thumbnail: string | null
  srcset: string | null
  sizes: string | null
  name: string | null
  alt: string | null
}

export type WC_ProductAttribute = {
  id: number | null
  name: string | null
  taxonomy: string | null
  has_variations: boolean | null
  terms: {
    id: number | null
    name: string | null
    slug: string | null
  }[]
}

export type WC_ProductVariationAttribute = {
  name: string | null
  value: string | null
}

export type WC_ProductVariation = {
  id: number | null
  attributes: WC_ProductVariationAttribute[]
}

export type WC_Product = {
  id: number | null
  name: string | null
  slug: string | null
  variation: string | null
  parent: number | null
  type: string | null
  permalink: string | null
  sku: string | null
  summary?: string | null
  short_description: string | null
  description: string | null
  on_sale: boolean | null
  categories: { id: number; name: string; slug: string; link: string }[]
  prices: {
    currency_code: string | null
    currency_symbol: string | null
    currency_minor_unit: number | null
    currency_decimal_separator: string | null
    currency_thousand_separator: string | null
    currency_prefix: string | null
    currency_suffix: string | null
    price: string | null
    regular_price: string | null
    sale_price: string | null
    price_range: null
  } | null
  price_html: string | null
  tags:
    | {
        id: number | null
        name: string | null
        slug: string | null
        link: string | null
      }[]
    | null
  average_rating: string | null
  review_count: number | null
  images: WC_ProductImage[] | null
  attributes: WC_ProductAttribute[] | null
  variations: WC_ProductVariation[] | null
  has_options: boolean | null
  is_purchasable: boolean | null
  is_on_backorder: boolean | null
  sold_individually: boolean | null
  is_in_stock: boolean | null
  low_stock_remaining: boolean | null
  add_to_cart: {
    text: string | null
    description: string | null
    url: string | null
    minimum: number | null
    maximum: number | null
    multiple_of: number | null
  } | null
  extensions: {} | null
} | null

export type WC_SortOptions = {
  field:
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
  order: "asc" | "desc"
}

export type WC_StoreSortOption = {
  name: string
  id: WC_SortOptions
}
