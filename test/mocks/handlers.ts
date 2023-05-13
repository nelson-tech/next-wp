import { GraphQLHandler, RestHandler, graphql, rest } from "msw"

type RESTHandlerOptions = {
  path: string
  status?: number
  mockData: any
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
}

type GQLHandlerOptions = {
  path: string
  query: string
  mockData: any
}

export type GetHandlersInput =
  | {
      restOptions: RESTHandlerOptions
      gqlOptions?: GQLHandlerOptions
    }
  | {
      restOptions?: RESTHandlerOptions
      gqlOptions: GQLHandlerOptions
    }

export const getHandlers = ({
  restOptions,
  gqlOptions,
}: GetHandlersInput): (RestHandler | GraphQLHandler)[] => {
  const handlers: (RestHandler | GraphQLHandler)[] = []

  if (restOptions) {
    switch (restOptions.method) {
      case "POST":
        handlers.push(
          rest.post(restOptions.path, (req, res, ctx) => {
            return res(
              ctx.status(restOptions.status ?? 200),
              ctx.json(
                restOptions.status
                  ? restOptions.status !== 200
                    ? null
                    : restOptions.mockData
                  : restOptions.mockData
              )
            )
          })
        )
        break

      default:
        handlers.push(
          rest.get(restOptions.path, (req, res, ctx) => {
            return res(
              ctx.status(restOptions.status ?? 200),
              ctx.json(
                restOptions.status
                  ? restOptions.status !== 200
                    ? null
                    : restOptions.mockData
                  : restOptions.mockData
              )
            )
          })
        )
        break
    }
  }

  if (gqlOptions) {
    handlers.push(
      graphql.link(gqlOptions.path).query(gqlOptions.query, (req, res, ctx) => {
        return res(ctx.data(gqlOptions.mockData))
      })
    )
  }
  return handlers
}
