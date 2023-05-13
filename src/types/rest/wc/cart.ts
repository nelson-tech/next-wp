export type WC_Cart_Coupon = {
  code: string | null
  totals: {
    currency_code: string | null
    currency_symbol: string | null
    currency_minor_unit: number | null
    currency_decimal_separator: string | null
    currency_thousand_separator: string | null
    currency_prefix: string | null
    currency_suffix: string | null
    total_discount: string | null
    total_discount_tax: string | null
  }
}

export type WC_Cart = {
  coupons: WC_Cart_Coupon[]
  shipping_rates: [
    {
      package_id: number | null
      name: string | null
      destination: {
        address_1: string | null
        address_2: string | null
        city: string | null
        state: string | null
        postcode: string | null
        country: string | null
      }
      items: [
        {
          key: string | null
          name: string | null
          quantity: number | null
        },
        {
          key: string | null
          name: string | null
          quantity: number | null
        }
      ]
      shipping_rates: [
        {
          rate_id: string | null
          name: string | null
          description: string | null
          delivery_time: string | null
          price: string | null
          instance_id: number | null
          method_id: string | null
          meta_data: [
            {
              key: string | null
              value: string | null
            }
          ]
          selected: boolean | null
          currency_code: string | null
          currency_symbol: string | null
          currency_minor_unit: number | null
          currency_decimal_separator: string | null
          currency_thousand_separator: string | null
          currency_prefix: string | null
          currency_suffix: string | null
        }
      ]
    }
  ]
  shipping_address: {
    first_name: string | null
    last_name: string | null
    company: string | null
    address_1: string | null
    address_2: string | null
    city: string | null
    state: string | null
    postcode: string | null
    country: string | null
  }
  items: {
    key: string | null
    id: number | null
    quantity: number | null
    quantity_limits: {
      minimum: number | null
      maximum: number | null
      multiple_of: number | null
      editable: boolean | null
    }
    name: string | null
    summary: string | null
    short_description: string | null
    description: string | null
    sku: string | null
    low_stock_remaining: null
    backorders_allowed: boolean | null
    show_backorder_badge: boolean | null
    sold_individually: boolean | null
    permalink: string | null
    images: [
      {
        id: number | null
        src: string | null
        thumbnail: string | null
        srcset: string | null
        sizes: string | null
        name: string | null
        alt: string | null
      }
    ]
    variation: []
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
      raw_prices: {
        precision: number | null
        price: string | null
        regular_price: string | null
        sale_price: string | null
      }
    }
    totals: {
      currency_code: string | null
      currency_symbol: string | null
      currency_minor_unit: number | null
      currency_decimal_separator: string | null
      currency_thousand_separator: string | null
      currency_prefix: string | null
      currency_suffix: string | null
      line_subtotal: string | null
      line_subtotal_tax: string | null
      line_total: string | null
      line_total_tax: string | null
    }
  }[]

  items_count: number | null
  items_weight: number | null
  needs_payment: boolean | null
  needs_shipping: boolean | null
  has_calculated_shipping: boolean | null
  totals: {
    currency_code: string | null
    currency_symbol: string | null
    currency_minor_unit: number | null
    currency_decimal_separator: string | null
    currency_thousand_separator: string | null
    currency_prefix: string | null
    currency_suffix: string | null
    total_items: string | null
    total_items_tax: string | null
    total_fees: string | null
    total_fees_tax: string | null
    total_discount: string | null
    total_discount_tax: string | null
    total_shipping: string | null
    total_shipping_tax: string | null
    total_price: string | null
    total_tax: string | null
    tax_lines: []
  }
  errors: []
  payment_methods: [string | null]
  payment_requirements: [string | null]
  extensions: {}
}

export type WC_Cart_AddInput = {
  id: number
  quantity: number
  variation?: { attribute: string; value: string }[]
}
