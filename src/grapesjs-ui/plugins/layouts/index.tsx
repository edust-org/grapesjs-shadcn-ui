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
 *   - Col-3
 *   - Col-4
 *   - Div
 */

export const layoutPlugin = (editor: Editor) => {
  const blockManager = editor.BlockManager;

  // Section
  blockManager.add("layout-section", {
    label: "Section",
    category: "Layout",
    activate: true,
    content: {
      tagName: "section",
      name: "Section",
      attributes: { class: "w-full px-4 min-h-12" },
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
      attributes: { class: "container mx-auto px-4 min-h-12" },
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
          attributes: { class: "min-h-12" },
        },
      ],
      attributes: { class: "grid gap-4 grid-cols-1" },
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
          attributes: { class: "min-h-12" },
        },
        {
          tagName: "div",
          attributes: { class: "min-h-12" },
        },
      ],
      attributes: { class: "grid gap-4 grid-cols-1 md:grid-cols-2" },
    },
    media: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z"></path></svg>`,
  });

  // Col-3
  blockManager.add("layout-col-3", {
    label: "Col 3",
    category: "Layout",
    activate: true,
    content: {
      tagName: "div",
      name: "Col 3",
      components: [
        {
          tagName: "div",
          attributes: { class: "min-h-12" },
        },
        {
          tagName: "div",
          attributes: { class: "min-h-12" },
        },
        {
          tagName: "div",
          attributes: { class: "min-h-12" },
        },
      ],
      attributes: {
        class: "grid gap-4 grid-cols-1 md:grid-cols-3",
      },
    },
    media: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z"></path></svg>`,
  });

  // Col-4
  blockManager.add("layout-col-4", {
    label: "Col 4",
    category: "Layout",
    activate: true,
    content: {
      tagName: "div",
      name: "Col 4",
      components: [
        {
          tagName: "div",
          attributes: { class: "min-h-12" },
        },
        {
          tagName: "div",
          attributes: { class: "min-h-12" },
        },
        {
          tagName: "div",
          attributes: { class: "min-h-12" },
        },
        {
          tagName: "div",
          attributes: { class: "min-h-12" },
        },
      ],
      attributes: {
        class: "grid gap-4 grid-cols-1 md:grid-cols-4",
      },
    },
    media: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z"></path></svg>`,
  });

  // Div
  blockManager.add("layout-div", {
    label: "Div",
    category: "Layout",
    activate: true,
    content: {
      tagName: "div",
      name: "Div",
      attributes: { class: "min-h-12" },
    },
    media: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z"></path></svg>`,
  });
};
