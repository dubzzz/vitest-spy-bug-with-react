import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";

vi.mock("../src/Other", () => ({ default: () => <div>Stubbed</div> }));

test("mocks", () => {
  const { container } = render(<App />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <button>
          Me!
        </button>
        <div>
          Stubbed
        </div>
      </div>
    </div>
  `);
});
