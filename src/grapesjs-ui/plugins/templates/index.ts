import { Editor } from "grapesjs";
import { eduCrafets001 } from "./001-edu-crafters";
import { eduEducation002 } from "./002-edu-education";
import { polyNova002 } from "./002-poly-nova";

// Import your template and add here [t1, t2, t3, ...]
const items = [eduCrafets001, eduEducation002, polyNova002];

export const templatesPlugins = (editor: Editor) => {
  const bm = editor.BlockManager;

  return items.map((item, index) => {
    bm.add(`templates-${item.id}-${index + 1}`, {
      category: "Templates",
      label: ``,
      content: item.content,
      media: `<img src="${item.thumbnail}" draggable="false"/>`,
    });
  });
};
