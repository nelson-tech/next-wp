/*

WordPress REST Client

Requires NEXT_PUBLIC_API_HOST to be set in .env

*/

import type { REST_WC_Client_Input, REST_Client_Response } from "./../../types"
import { REST_WC_URL } from "../../utils/constants/rest"

export const getRestClient = () => {
  const apiHost = process.env.NEXT_PUBLIC_API_HOST

  if (!apiHost) {
    throw new Error("NEXT_PUBLIC_API_HOST is not set")
  }

  const plainFetch = async (
    url: string,
    fetchOptions?: RequestInit | undefined
  ) => {
    try {
      return await fetch(url, fetchOptions)
    } catch (error) {
      console.warn("Fetch error")
      console.warn(error)
    }
  }

  const wcFetch = async ({
    path = "/products",
    method = "GET",
    body,
    searchParams,
  }: REST_WC_Client_Input): Promise<REST_Client_Response> => {
    let url = `${REST_WC_URL}${path}`

    searchParams &&
      (url += `?${new URLSearchParams(
        Object.entries(searchParams)
          .map(([key, value]) => `${key}=${value}`)
          .join("&")
      )}`)

    const fetchOptions: RequestInit = {
      method,
    }

    // Add body if present and method is not GET
    method !== "GET" && body && (fetchOptions.body = body)

    const response = await plainFetch(url, fetchOptions)

    if (response) {
      const headers = response?.headers
      const json = await response?.json().catch((error) => {})

      return { data: json, headers, status: response.status }
    }

    return { data: null, headers: null, status: null }
  }

  return {
    fetch: plainFetch,
    wcFetch,
  }
}
