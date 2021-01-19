import React, { ReactElement } from "react";

import Styles from "./NavIcon.module.scss";

export default function NavIcon(): ReactElement {
  return (
    <div className={Styles.NavIcon}>
      <h3>Discovery</h3>
    </div>
  );
}
