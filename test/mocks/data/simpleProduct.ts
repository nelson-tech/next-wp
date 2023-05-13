import { WC_Product } from "~/types/rest/wc/products"

export const simpleProduct: WC_Product = {
  id: 1,
  name: "Simple Product",
  slug: "simple-product",
  parent: 0,
  type: "simple",
  variation: "",
  permalink: "https://api.example.com/products/simple-product/",
  sku: "sku-simple-product",
  short_description: "",
  description: "<p>Simple Product</p>",
  on_sale: false,
  prices: {
    price: "35000",
    regular_price: "35000",
    sale_price: "35000",
    price_range: null,
    currency_code: "USD",
    currency_symbol: "$",
    currency_minor_unit: 2,
    currency_decimal_separator: ".",
    currency_thousand_separator: ",",
    currency_prefix: "$",
    currency_suffix: "",
  },
  price_html:
    '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>350.00</span>',
  average_rating: "0",
  review_count: 0,
  images: [],
  categories: [
    {
      id: 117,
      name: "Parent Category",
      slug: "parent-category",
      link: "https://api.example.com/product-category/parent-category/",
    },
  ],
  tags: [],
  attributes: [],
  variations: [],
  has_options: false,
  is_purchasable: true,
  is_in_stock: true,
  is_on_backorder: false,
  low_stock_remaining: null,
  sold_individually: false,
  add_to_cart: {
    text: "Add to cart",
    description: "Add &ldquo;Simple Product&rdquo; to your cart",
    url: "?add-to-cart=1",
    minimum: 1,
    maximum: 9999,
    multiple_of: 1,
  },
  extensions: {},
}