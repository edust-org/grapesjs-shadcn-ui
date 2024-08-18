import { EditorConfig } from "grapesjs";
import gsPluginBlocksBasic from "grapesjs-blocks-basic";
import gsPluginTuiImageEditor from "grapesjs-tui-image-editor";
import gsPluginExport from "grapesjs-plugin-export";
import gsPluginCustomCode from "grapesjs-custom-code";
import plugins from "./plugins";

import uploadFile from "./upload-file";

const options = (editorRef: any): EditorConfig => ({
  height: "100vh",
  storageManager: false,
  undoManager: { trackSelection: false },
  selectorManager: { componentFirst: true },
  assetManager: {
    uploadName: "file",
    uploadFile: (e) => uploadFile(e, editorRef),
  },
  panels: { defaults: [] }, // Avoid default panels

  // If you enable multiple pages options then you need this

  projectData: {
    assets: [
      "https://via.placeholder.com/350x250/78c5d6/fff",
      "https://via.placeholder.com/350x250/459ba8/fff",
      "https://via.placeholder.com/350x250/79c267/fff",
      "https://via.placeholder.com/350x250/c5d647/fff",
      "https://via.placeholder.com/350x250/f28c33/fff",
    ],
    pages: [
      {
        name: "Home",
        component: `<h1>GrapesJS React Custom UI with ShadcnUI</h1>`,
      },
    ],
  },

  plugins: [
    gsPluginBlocksBasic,
    gsPluginTuiImageEditor,
    gsPluginExport,
    gsPluginCustomCode,
    ...plugins,
  ],
  pluginsOpts: {},
});
export default options;
