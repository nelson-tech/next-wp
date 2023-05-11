import { assert, expect, test } from "vitest"
import { hello } from "../src/main"

test("say hello", () => {
  const result = hello("Michael")
  expect(result).toBe("Hello, Michael!")
})
