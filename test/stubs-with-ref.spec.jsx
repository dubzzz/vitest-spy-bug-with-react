import { test, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";
import * as MiscMock from "../src/Misc";

test("stubs with ref", () => {
  vi.spyOn(MiscMock, "Button").mockImplementation(
    React.forwardRef(() => <div>Stubbed</div>)
  );
  render(<App />);
});
