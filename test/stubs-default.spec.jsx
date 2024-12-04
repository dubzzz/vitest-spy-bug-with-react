import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";
import * as OtherMock from "../src/Other";

test("stubs default", () => {
  vi.spyOn(OtherMock, "default").mockImplementation(() => <div>Stubbed</div>);
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
        <button>
          Bis!
        </button>
      </div>
    </div>
  `);
});
