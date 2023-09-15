import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Design from "./Design";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Design />
  </StrictMode>
);