import { Editor } from "grapesjs";

/**
 * @param editor
 *
 * Category: Layout
 *
 * Items:
 *   - Section
 *   - Container
 *   - Col-1
 *   - Col-2
 *   - Div
 */

export const layoutPlugin = (editor: Editor) => {
  const blockManager = editor.BlockManager;

  // Section
  blockManager.add("layout-section", {
    label: "Section",
    category: "Layout",
    select: true,
    activate: true,
    content: {
      tagName: "section",
      name: "Section",
      attributes: { class: "w-full px-4 min-h-10" },
      components: [
        {
          tagName: "p",
          type: "text",
          content: "Put your block",
        },
      ],
    },
    media: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z"></path></svg>`,
  });

  // Container
  blockManager.add("layout-container", {
    label: "Container",
    category: "Layout",
    activate: true,
    content: {
      tagName: "div",
      name: "Container",
      content: "Put your block",
      attributes: { class: "container mx-auto px-4" },
    },
    media: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z"></path></svg>`,
  });

  // Col-1
  blockManager.add("layout-col-1", {
    label: "Col 1",
    category: "Layout",
    activate: true,
    content: {
      tagName: "div",
      name: "Col 1",
      components: [
        {
          tagName: "div",
          content: "Put your block",
          attributes: { class: "" },
        },
      ],
      attributes: { class: "grid gap-6 grid-cols-1" },
    },
    media: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z"></path></svg>`,
  });

  // Col-2
  blockManager.add("layout-col-2", {
    label: "Col 2",
    category: "Layout",
    activate: true,
    content: {
      tagName: "div",
      name: "Col 2",
      components: [
        {
          tagName: "div",
          content: "Put your block",
          attributes: { class: "" },
        },
        {
          tagName: "div",
          content: "Put your block",
          attributes: { class: "" },
        },
      ],
      attributes: { class: "grid gap-6 grid-cols-1 md:grid-cols-2" },
    },
    media: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z"></path></svg>`,
  });
};
