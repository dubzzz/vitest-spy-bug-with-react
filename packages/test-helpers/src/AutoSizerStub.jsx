import { vi } from "vitest";
import React from "react";
import * as ReactVirtualizedAutoSizerMock from "react-virtualized-auto-sizer";

export function spyOnReactVirtualizedAutoSizer() {
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
