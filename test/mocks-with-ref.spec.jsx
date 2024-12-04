import { test, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";

vi.mock("../src/Misc", () => ({
  Button: React.forwardRef(() => <div>Stubbed</div>),
}));

test("mocks", () => {
  render(<App />);
});
