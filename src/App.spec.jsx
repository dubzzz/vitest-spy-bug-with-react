import { test } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("without stubs or mocks", () => {
  render(<App />);
});
