import React from "react";
import { render, cleanup } from "@testing-library/react";

import Restaurant from "./Restaurant";

describe("<Restaurant />", () => {
  afterAll(cleanup);

  const props = {
    name: "Sea Chain",
    online: true
  };

  const { name } = props;

  test("Should render correct name and status when online is set to true", () => {
    const { getByText } = render(<Restaurant {...props} />);

    expect(getByText(name)).toBeTruthy();
    expect(getByText("Online")).toBeTruthy();
  });

  test("Should render correct status  when online is set to false", () => {
    const updatedProps = {
      ...props,
      online: false
    };

    const { getByText } = render(<Restaurant {...updatedProps} />);

    expect(getByText("Offline")).toBeTruthy();
  });
});
