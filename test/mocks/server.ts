import { SetupServer, setupServer } from "msw/node"
import { getHandlers, GetHandlersInput } from "./handlers"
import { afterAll, afterEach, beforeAll } from "vitest"

export const startServer = (handlersInput: GetHandlersInput): SetupServer => {
  const restHandlers = getHandlers(handlersInput)

  const server = setupServer(...restHandlers)

  // Start server before all tests
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }))

  //  Close server after all tests
  afterAll(() => server.close())

  // Reset handlers after each test `important for test isolation`
  afterEach(() => server.resetHandlers())

  return server
}
