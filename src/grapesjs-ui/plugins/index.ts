import { componentsPlugin } from "./components";
import { customPlugin } from "./custom-plugin";
import { typographyPlugin } from "./typography";
import { layoutPlugin } from "./layouts";
import { blocksPlugins } from "./blocks";

export default [
  typographyPlugin,
  componentsPlugin,
  layoutPlugin,
  customPlugin,
  ...blocksPlugins,
];
