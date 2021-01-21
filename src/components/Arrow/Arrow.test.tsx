import React from "react";
import { render, cleanup } from "@testing-library/react";

import Arrow from "./Arrow";

describe("<Arrow />", () => {
  afterAll(cleanup);

  const props = {
    onClick: () => {},
    imgSrc: "",
    altText: "Some alt text"
  };

  const { altText, imgSrc } = props;

  test("Should render img with correct alt text", () => {
    const { getByAltText } = render(<Arrow {...props} />);

    expect(getByAltText(altText)).toHaveAttribute("src", imgSrc);
  });
});
