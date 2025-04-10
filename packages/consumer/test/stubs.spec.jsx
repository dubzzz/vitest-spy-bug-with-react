import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";
import * as MiscMock from "../src/Misc";

test("stubs", () => {
  vi.spyOn(MiscMock, "Button").mockImplementation(() => <div>Stubbed</div>);
  const { container } = render(<App />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <div>
          Stubbed
        </div>
        <button>
          Other!
        </button>
        <button>
          Bis!
        </button>
      </div>
    </div>
  `);
});
