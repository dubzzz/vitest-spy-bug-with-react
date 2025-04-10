import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";

test("no stubs no mocks", () => {
  const { container } = render(<App />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <button>
          Me!
        </button>
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
