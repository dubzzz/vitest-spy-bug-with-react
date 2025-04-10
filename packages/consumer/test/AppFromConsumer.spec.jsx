import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import * as ReactVirtualizedAutoSizerMock from "react-virtualized-auto-sizer";

import VirtuApp from "provider/App";

vi.mock("react-virtualized-auto-sizer", { spy: true });

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

function spyOnReactVirtualizedAutoSizer() {
  const height = 500;
  const width = 500;
  const AutoSizer = vi
    .spyOn(ReactVirtualizedAutoSizerMock, "default")
    .mockImplementation(function ctor(props) {
      this.props = props;
    });
  AutoSizer.prototype.render = vi.fn(function () {
    return (
      <>
        {this.props.children({
          height,
          width,
          scaledHeight: height,
          scaledWidth: width,
        })}
      </>
    );
  });
}
