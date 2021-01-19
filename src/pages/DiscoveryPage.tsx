import React, { ReactElement } from "react";
import data from "../data/discovery_page.json";

import RestaurantCategoryList from "../components/RestaurantCategoryList";
import NavIcon from "../components/NavIcon";

export default function DiscoveryPage(): ReactElement {
  return (
    <div>
      <NavIcon />
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
