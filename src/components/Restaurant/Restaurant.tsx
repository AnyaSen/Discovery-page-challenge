import React, { ReactElement } from "react";

import BlurCanvas from "../BlurCanvas";

import Styles from "./Restaurant.module.scss";

interface Props {
  name: string;
  blurhash?: string;
  online: boolean;
}

export default function Restaurant({
  name,
  blurhash,
  online
}: Props): ReactElement {
  if (blurhash) {
    return (
      <div className={Styles.Restaurant}>
        <BlurCanvas blurhash={blurhash} />
        <h3>{name} </h3>
        <p style={{ color: online ? "green" : "red" }}>
          {online ? "Online" : "Offline"}
        </p>
      </div>
    );
  }

  return (
    <div className={Styles.Restaurant} data-testid="restaurant">
      <h3>{name} </h3>
      <p style={{ color: online ? "green" : "red" }}>
        {online ? "Online" : "Offline"}
      </p>
    </div>
  );
}
