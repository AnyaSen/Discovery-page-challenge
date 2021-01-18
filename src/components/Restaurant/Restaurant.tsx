import React, { ReactElement } from "react";

import { BlurhashCanvas } from "react-blurhash";

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
    <div>
      <p>{name} </p>
      <p>{online ? "ONLINE" : "OFFLINE"}</p>
      <BlurhashCanvas hash={blurhash} width={300} height={200} punch={1} />
    </div>
  );
}
