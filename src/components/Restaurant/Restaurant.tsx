import React, { ReactElement } from "react";

import { BlurhashCanvas } from "react-blurhash";

import Styles from "./Restaurant.module.scss";

interface Props {
  name: string;
  blurhash: string;
  online: boolean;
}

export default function Restaurant({
  name,
  blurhash,
  online
}: Props): ReactElement {
  return (
    <div className={Styles.Restaurant}>
      <BlurhashCanvas hash={blurhash} width={260} height={180} punch={1} />
      <h3>{name} </h3>
      <p style={{ color: online ? "green" : "red" }}>
        {online ? "Online" : "Offline"}
      </p>
    </div>
  );
}
