import { test } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";

test("no stubs no mocks", () => {
  render(<App />);
});
