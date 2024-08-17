import { Editor } from "grapesjs";

/**
 * @param editor
 *
 * Category: Typography
 *
 * Items:
 *   - H1
 *   - H2
 *   - H3
 *   - H4
 *   - H5
 *   - H6
 *   - p
 */

export const typographyPlugin = (editor: Editor) => {
  const blockManager = editor.BlockManager;

  // H1
  blockManager.add("typography-h1", {
    label: "H1",
    content: "<h1 class='bg-red-500 text-3xl'>Put your title here</h1>",
    category: "Typography",
    attributes: {
      title: "Insert h1 block",
    },
    media:
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"></path></svg>',
  });
};
