export type REST_WC_Client_Input = {
  path: string
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  body?: string
  searchParams?: REST_WC_Client_SearchParams
}

export type REST_WC_Client_SearchParams = {
  slug: string
}

export type REST_Response_Error = {
  code: string
  message: string
  data: {
    status: number
  }
}
