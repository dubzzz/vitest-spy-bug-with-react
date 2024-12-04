import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";
import * as OtherBisMock from "../src/OtherBis";

test("stubs default class (not working)", () => {
  vi.spyOn(OtherBisMock, "default").mockImplementation(() => (
    <div>Stubbed</div>
  ));
  const { container } = render(<App />);
  expect(container).toMatchInlineSnapshot();
});

test("stubs default class (working)", () => {
  const OtherBis = vi
    .spyOn(OtherBisMock, "default")
    .mockImplementation(function (props) {
      this.props = props;
    });
  OtherBis.prototype.render = vi.fn(() => <div>Stubbed</div>);
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
        <div>
          Stubbed
        </div>
      </div>
    </div>
  `);
});
