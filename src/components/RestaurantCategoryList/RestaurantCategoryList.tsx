import React, { ReactElement } from "react";
import Restaurant from "../Restaurant";

interface RestaurantType {
  blurhash: string;
  launch_date: string;
  location: number[];
  name: string;
  online: boolean;
  popularity: number;
}

interface Props {
  title: string;
  restaurantArray: RestaurantType[];
}

export default function RestaurantCategoryList({
  title,
  restaurantArray
}: Props): ReactElement {
  return (
    <div>
      <h1>{title} </h1>

      {restaurantArray.map((restaurant, index) => {
        return <Restaurant key={index} name={restaurant.name} />;
      })}
    </div>
  );
}
