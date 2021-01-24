import React, { ReactElement } from "react";

import { BlurhashCanvas } from "react-blurhash";

interface Props {
  blurhash: string;
}

export default function BlurCanvas({ blurhash }: Props): ReactElement {
  return <BlurhashCanvas hash={blurhash} width={260} height={180} punch={1} />;
}
