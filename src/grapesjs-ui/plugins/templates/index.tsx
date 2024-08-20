import { Editor } from "grapesjs";
import { eduCrafets001 } from "./001-edu-crafters";

const items = [eduCrafets001];

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
