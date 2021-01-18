import React, { ReactElement } from "react";

interface Props {
  name: string;
}

export default function Restaurant({ name }: Props): ReactElement {
  return (
    <div>
      <p>{name} </p>
    </div>
  );
}
