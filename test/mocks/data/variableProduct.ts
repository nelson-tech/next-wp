import { REST_WC_Product } from "src/types/rest/wc/products"

export const variableProduct: REST_WC_Product = {
  id: 2,
  name: "Variable Product",
  slug: "variable-product",
  parent: 0,
  type: "variable",
  variation: "",
  permalink: "https://api.example.com/products/variable-product/",
  sku: "",
  short_description: "<p>This is a variable product.</p>",
  description:
    "<p>Variable products have options that the customer can select. Examples of such options include Size (S, M, LG) and Color (Black, White, Red).</p>",
  on_sale: false,
  prices: {
    price: "0",
    regular_price: "0",
    sale_price: "0",
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
    '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>0.00</span>',
  average_rating: "0",
  review_count: 0,
  images: [
    {
      id: 1,
      src: "https://api.example.com/images/variable-product.png",
      thumbnail: "https://api.example.com/images/variable-product-324x324.png",
      srcset:
        "https://api.example.com/images/variable-product.png 1200w, https://api.example.com/images/variable-product-450x450.png 324w, https://api.example.com/images/variable-product-100x100.png 100w, https://api.example.com/images/variable-product-600x600.png 416w",
      sizes: "(max-width: 1200px) 100vw, 1200px",
      name: "variable-product",
      alt: "",
    },
  ],
  categories: [
    {
      id: 102,
      name: "Child Category",
      slug: "child-category",
      link: "https://api.example.com/product-category/parent-category/child-category/",
    },
  ],
  tags: [],
  attributes: [
    {
      id: 0,
      name: "Size",
      taxonomy: null,
      has_variations: true,
      terms: [
        {
          id: 0,
          name: "Small",
          slug: "small",
        },
        {
          id: 0,
          name: "Medium",
          slug: "medium",
        },
        {
          id: 0,
          name: "Large",
          slug: "large",
        },
      ],
    },
  ],
  variations: [
    {
      id: 723,
      attributes: [
        {
          name: "Size",
          value: "Small",
        },
      ],
    },
    {
      id: 724,
      attributes: [
        {
          name: "Size",
          value: "Medium",
        },
      ],
    },
    {
      id: 725,
      attributes: [
        {
          name: "Size",
          value: "Large",
        },
      ],
    },
  ],
  has_options: true,
  is_purchasable: true,
  is_in_stock: true,
  is_on_backorder: false,
  low_stock_remaining: null,
  sold_individually: false,
  add_to_cart: {
    text: "Select options",
    description: "Select options for &ldquo;Variable Product&rdquo;",
    url: "https://api.example.com/products/variable-product/",
    minimum: 1,
    maximum: 9999,
    multiple_of: 1,
  },
  extensions: {},
}
