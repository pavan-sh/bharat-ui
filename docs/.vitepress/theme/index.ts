import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

import "../../../src/styles/globals.css";
import "./styles.css";

export default {
  extends: DefaultTheme,
} satisfies Theme;
