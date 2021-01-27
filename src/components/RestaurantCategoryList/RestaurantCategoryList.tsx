import React, { ReactElement, useState, useEffect } from "react";
import { defineInitialLastPointBasedOnScreenWidth } from "../../services/defineInitialLastPointBasedOnScreenWidth";

import Styles from "./RestaurantCategoryList.module.scss";
import arrowRight from "../../assets/img/arrow-right.svg";
import arrowLeft from "../../assets/img/arrow-left.svg";

import Restaurant from "../Restaurant";
import ArrowButton from "../ArrowButton";

interface RestaurantType {
  blurhash?: string;
  name: string;
  online: boolean;
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

  const doubledArray = restaurantArray.concat(restaurantArray);

  const [initialLastPoint, setInitialLastPoint] = useState(
    defineInitialLastPointBasedOnScreenWidth()
  );
  const [startingPoint, setStartingPoint] = useState(initialStartingPoint);
  const [lastPoint, setLastPoint] = useState(initialLastPoint);
  const [animate, setAnimate] = useState(false);

  const addAnimation = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 350);
  };

  const arrayLength = restaurantArray.length;

  const moveCarouselForward = () => {
    addAnimation();
    setStartingPoint(startingPoint + 1);
    setLastPoint(lastPoint + 1);

    if (lastPoint === arrayLength * 2) {
      setStartingPoint(arrayLength - (initialLastPoint - 1));
      setLastPoint(arrayLength + 1);
    }
  };

  const moveCarouselBackword = () => {
    addAnimation();
    if (startingPoint === initialStartingPoint) {
      setStartingPoint(arrayLength - 1);
      setLastPoint(arrayLength + (initialLastPoint - 1));
    } else {
      setStartingPoint(startingPoint - 1);
      setLastPoint(lastPoint - 1);
    }
  };

  const needsCarousel = restaurantArray.length > initialLastPoint;

  const cropRestaurantsArray = () => {
    if (needsCarousel) {
      return doubledArray.slice(startingPoint, lastPoint);
    }
    return restaurantArray;
  };

  const handleResize = () => {
    if (window.innerWidth > 1100) {
      setInitialLastPoint(4);

      setStartingPoint(initialStartingPoint);
      setLastPoint(initialLastPoint);
    } else if (window.innerWidth <= 1100 && window.innerWidth > 720) {
      setInitialLastPoint(3);

      setStartingPoint(initialStartingPoint);
      setLastPoint(initialLastPoint);
    } else if (window.innerWidth <= 720 && window.innerWidth > 599) {
      setInitialLastPoint(2);

      setStartingPoint(initialStartingPoint);
      setLastPoint(initialLastPoint);
    } else if (window.innerWidth <= 599) {
      setInitialLastPoint(1);

      setStartingPoint(initialStartingPoint);
      setLastPoint(initialLastPoint);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <div className={Styles.RestaurantCategoryListContainer}>
      <div className={Styles.Header}>
        <h1>{title} </h1>

        {needsCarousel && (
          <div className={Styles.ArrowsContainer}>
            <ArrowButton
              onClick={moveCarouselBackword}
              imgSrc={arrowLeft}
              altText="Go Backwards"
            />

            <ArrowButton
              onClick={moveCarouselForward}
              imgSrc={arrowRight}
              altText="Go Forward"
            />
          </div>
        )}
      </div>

      <div
        className={
          animate
            ? Styles.AnimatedRestaurantCategoryList
            : Styles.RestaurantCategoryList
        }
      >
        {cropRestaurantsArray().map((restaurant, index) => {
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
