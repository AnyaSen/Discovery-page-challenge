import React, { ReactElement } from "react";

import RestaurantCategoryList from "../components/RestaurantCategoryList";

import data from "../data/discovery_page.json";

export default function DiscoveryPage(): ReactElement {
  return (
    <div>
      {data.sections.map((categoryInfo, index) => {
        const { title, restaurants } = categoryInfo;

        return (
          <RestaurantCategoryList
            key={index}
            title={title}
            restaurantArray={restaurants}
          />
        );
      })}
    </div>
  );
}
