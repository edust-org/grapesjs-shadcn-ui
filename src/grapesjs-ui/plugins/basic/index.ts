import { Editor } from "grapesjs";

export const basicPlugin = (editor: Editor) => {
  const blockManager = editor.BlockManager;

  blockManager.add("basic-image", {
    label: "Image",
    category: "Basic",
    activate: true,
    content: {
      type: "image",
      name: "Image",
      alt: "Alternative Image Text",
      src: "",
    },
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z"></path>
      </svg>`,
  });

  blockManager.add("basic-video", {
    label: "Video",
    category: "Basic",
    content: {
      type: "video",
      tagName: "video",
      attributes: {
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        autoplay: false,
        loop: false,
        controls: true,
      },
      style: { width: "615px" },
      name: "Video",
    },
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"></path>
      </svg>`,
  });

  blockManager.add("basic-map", {
    label: "Map",
    category: "Basic",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z" />
    </svg>`,
    content: {
      type: "map",
      style: { height: "350px" },
    },
  });
};
