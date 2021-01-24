import React, { ReactElement } from "react";
import Styles from "./Arrow.module.scss";

interface Props {
  imgSrc: string;
  altText: string;
  onClick: () => void;
}

export default function Arrow({
  onClick,
  imgSrc,
  altText
}: Props): ReactElement {
  return (
    <button onClick={onClick} className={Styles.Arrow} data-testid="arrow">
      <img src={imgSrc} alt={altText} />
    </button>
  );
}
