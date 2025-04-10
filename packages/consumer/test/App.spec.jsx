import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import VirtuApp from "provider/App";
import { spyOnReactVirtualizedAutoSizer } from "test-helpers/AutoSizerStub";

test("stubs react-virtualized-auto-sizer", () => {
  spyOnReactVirtualizedAutoSizer();
  const { container } = render(<VirtuApp />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        style="height: 500px; width: 500px;"
      />
    </div>
  `);
});
