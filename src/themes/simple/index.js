import React from "react";

import Content from "../../content";
import { ChangeThemeButton } from "../theme-context";

export default function SimpleApp() {
  return (
    <div className="CleanBack">
      <div style={{ textAlign: "right" }}>
        <ChangeThemeButton />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
}
