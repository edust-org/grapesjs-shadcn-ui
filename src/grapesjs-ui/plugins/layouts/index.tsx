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
    activate: true,
    content: {
      tagName: "section",
      name: "Section",
      content: "Put your block",
      attributes: { class: "w-full px-4" },
    },
    media: `<svg  viewBox="0 0 182 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="182" height="130" fill="white"/>
              <rect x="16.5" y="16.5" width="149" height="59" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
              <rect x="16.5" y="84.5" width="149" height="29" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
            </svg>`,
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
    media: `<svg  viewBox="0 0 182 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="182" height="130" fill="white"/>
              <rect x="16.5" y="16.5" width="149" height="59" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
              <rect x="16.5" y="84.5" width="149" height="29" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
            </svg>`,
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
    media: `<svg  viewBox="0 0 182 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="182" height="130" fill="white"/>
              <rect x="16.5" y="16.5" width="149" height="59" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
              <rect x="16.5" y="84.5" width="149" height="29" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
            </svg>`,
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
    media: `<svg  viewBox="0 0 182 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="182" height="130" fill="white"/>
              <rect x="16.5" y="16.5" width="149" height="59" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
              <rect x="16.5" y="84.5" width="149" height="29" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
            </svg>`,
  });
};
