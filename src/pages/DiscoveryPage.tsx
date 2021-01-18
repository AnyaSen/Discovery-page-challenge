import React, { ReactElement } from "react";

import RestaurantCategoryList from "../components/RestaurantCategoryList";

import data from "../data/discovery_page.json";

export default function DiscoveryPage(): ReactElement {
  return (
    <div>
      {data.sections.map((categoryInfo, index) => {
        return (
          <RestaurantCategoryList
            key={index}
            title={categoryInfo.title}
            restaurantArray={categoryInfo.restaurants}
          />
        );
      })}
    </div>
  );
}
