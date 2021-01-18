import React, { ReactElement, useState } from "react";

import Styles from "./RestaurantCategoryList.module.scss";
import arrowRight from "../../assets/img/arrow-right.svg";
import arrowLeft from "../../assets/img/arrow-left.svg";

import Restaurant from "../Restaurant";
import Arrow from "../Arrow";

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
  const initialStartingPoint = 0;
  const initialLastPoint = 4;

  const arrayLength = restaurantArray.length;
  const doubledArray = restaurantArray.concat(restaurantArray);

  const [startingPoint, setStartingPoint] = useState(initialStartingPoint);
  const [lastPoint, setLastPoint] = useState(initialLastPoint);

  const moveCarouselForward = () => {
    setStartingPoint(startingPoint + 1);
    setLastPoint(lastPoint + 1);

    if (lastPoint === arrayLength * 2) {
      setStartingPoint(arrayLength - 3);
      setLastPoint(arrayLength + 1);
    }
  };

  const moveCarouselBackword = () => {
    if (startingPoint === initialStartingPoint) {
      setStartingPoint(arrayLength - 1);
      setLastPoint(arrayLength + 3);
    } else {
      setStartingPoint(startingPoint - 1);
      setLastPoint(lastPoint - 1);
    }
  };

  const needsCarousel = restaurantArray.length > 4;

  const cropRestArray = () => {
    if (needsCarousel) {
      return doubledArray.slice(startingPoint, lastPoint);
    }
    return restaurantArray;
  };

  return (
    <div className={Styles.RestaurantCategoryListContainer}>
      <div className={Styles.Header}>
        <h1>{title} </h1>

        {needsCarousel && (
          <div className={Styles.ArrowsContainer}>
            <Arrow
              onClick={moveCarouselBackword}
              imgSrc={arrowLeft}
              altText="Go Backwards"
            />

            <Arrow
              onClick={moveCarouselForward}
              imgSrc={arrowRight}
              altText="Go Forward"
            />
          </div>
        )}
      </div>

      <div className={Styles.RestaurantCategoryList}>
        {cropRestArray().map((restaurant, index) => {
          const { name, blurhash, online } = restaurant;
          return (
            <Restaurant
              key={index}
              name={name}
              blurhash={blurhash}
              online={online}
            />
          );
        })}
      </div>
    </div>
  );
}
