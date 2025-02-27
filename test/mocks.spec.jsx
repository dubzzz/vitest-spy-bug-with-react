import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";

vi.mock("../src/Misc", () => ({ Button: () => <div>Stubbed</div> }));

test("mocks", () => {
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
