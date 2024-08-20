import { componentsPlugin } from "./components";
import { customPlugin } from "./custom-plugin";
import { typographyPlugin } from "./typography";
import { layoutPlugin } from "./layouts";
import { blocksPlugins } from "./blocks";
import { templatesPlugins } from "./templates";
export default [
  typographyPlugin,
  componentsPlugin,
  layoutPlugin,
  templatesPlugins,
  customPlugin,
  ...blocksPlugins,
];
