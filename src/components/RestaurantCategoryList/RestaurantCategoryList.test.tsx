import React from "react";
import { render, cleanup } from "@testing-library/react";

import RestaurantCategoryList from "./RestaurantCategoryList";

import mockRestaurantsArray from "./mock/mock_restaurants_array.json";
import shortMockRestaurantsArray from "./mock/short_mock_restaurants_array.json";

describe("<RestaurantCategoryList />", () => {
  afterAll(cleanup);

  const props = {
    title: "Popular Restaurants",
    restaurantArray: mockRestaurantsArray
  };

  const { title } = props;

  test("Should render correct title and carousel buttons, and display 4 restaurants when the array is long and the screen size is large.", () => {
    global.innerWidth = 1200;

    const { getByText, getAllByTestId } = render(
      <RestaurantCategoryList {...props} />
    );

    expect(getByText(title)).toBeTruthy();

    const arrowButtons = getAllByTestId("arrow");
    expect(arrowButtons).toBeTruthy();

    const allRestaurants = getAllByTestId("restaurant");
    expect(allRestaurants.length).toBe(4);
  });

  test("Should not render carousel buttons, and display all restaurants when the array is short and the screen size is large.", () => {
    global.innerWidth = 1200;

    const updatedProps = {
      title: "Popular Restaurants",
      restaurantArray: shortMockRestaurantsArray
    };

    const { getAllByTestId, queryByTestId } = render(
      <RestaurantCategoryList {...updatedProps} />
    );

    const arrowButtons = queryByTestId("arrow");
    expect(arrowButtons).toBeFalsy();

    const allRestaurants = getAllByTestId("restaurant");
    expect(allRestaurants.length).toEqual(shortMockRestaurantsArray.length);
  });

  test("Should render carousel buttons, and display 1 restaurant when the screen size is small.", () => {
    global.innerWidth = 500;

    const { getAllByTestId } = render(<RestaurantCategoryList {...props} />);

    const arrowButtons = getAllByTestId("arrow");
    expect(arrowButtons).toBeTruthy();

    const allRestaurants = getAllByTestId("restaurant");
    expect(allRestaurants.length).toBe(1);
  });
});
