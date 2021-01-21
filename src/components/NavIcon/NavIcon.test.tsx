import React from "react";
import { render, cleanup } from "@testing-library/react";

import NavIcon from "./NavIcon";

describe("<NavIcon />", () => {
  afterAll(cleanup);

  test("Should render correct text", () => {
    const { getByText } = render(<NavIcon />);

    expect(getByText("Discovery")).toBeTruthy();
  });
});
