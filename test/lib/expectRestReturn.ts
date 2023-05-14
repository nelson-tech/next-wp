import { REST_Client_Response } from "src/types"
import { expect } from "vitest"

export const expectRestReturn = (response: REST_Client_Response) => {
  expect(response.data).not.toBeNull()
  expect(response.headers).not.toBeNull()
  expect(response.status).not.toBeNull()
}

export const expectRestReturnNull = (response: REST_Client_Response) => {
  expect(response.data).toBeNull()
  expect(response.headers).toBeNull()
  expect(response.status).toBeNull()
}
