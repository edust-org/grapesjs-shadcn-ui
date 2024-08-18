import { Editor } from "grapesjs";

export const customPlugin = (editor: Editor) => {
  const blockManager = editor.BlockManager;

  blockManager.add("custom-h1", {
    label: "Heading",
    category: "Custom",
    content: {
      tagName: "h1",
      type: "text",
      content: "Put your title here",
      attributes: { class: "bg-red-500 text-3xl" },
      name: "Heading 1",
    },
    media:
      '<svg viewBox="0 0 24 24">\n<path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />\n</svg>',
  });

  blockManager.add("custom-h2", {
    label: "H2 Heading",
    content: {
      tagName: "h1",
      type: "text",
      content: "Insert your heading here",
      attributes: { class: "custom-h1" },
      name: "Heading 1",
    },
    category: "Custom",
    activate: true,
  });

  blockManager.add("custom-section", {
    label: "Section",
    category: "Custom",
    activate: true,
    content: {
      tagName: "section",
      // type: "text",
      content: "Put your title here",
      attributes: { class: "w-full px-4 min-h-10" },
      name: "Section",
    },
    media: `<svg  viewBox="0 0 182 130" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="182" height="130" fill="white"/>
<rect x="16.5" y="16.5" width="149" height="59" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
<rect x="16.5" y="84.5" width="149" height="29" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
</svg>
`,
  });

  blockManager.add("section-row-col", {
    label: "Container",

    category: "Custom",
    content: `
      <section class="container mx-auto px-4"></section>
    `,
    media: `<svg viewBox="0 0 182 130" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="182" height="130" fill="white"/>
<rect x="16.5" y="16.5" width="149" height="97" fill="#D9D9D9" stroke="#94A3B8" stroke-dasharray="2 2"/>
</svg>
`,
  });

  // Video block with custom attributes
  blockManager.add("custom-video", {
    label: "Video",
    category: "Custom",
    content: {
      type: "video",
      tagName: "video",
      attributes: {
        src: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video source
        autoplay: false,
        loop: false,
        controls: true,
      },
      style: { width: "100%", height: "auto" },
      name: "Video",
    },
  });

  // Extend the default video component to add traits for autoplay, loop, and controls
  editor.DomComponents.addType("video", {
    isComponent: (el) => {
      return el.tagName === "VIDEO";
    },
    model: {
      defaults: {
        traits: [
          {
            type: "checkbox",
            name: "autoplay",
            label: "Autoplay",
          },
          {
            type: "checkbox",
            name: "loop",
            label: "Loop",
          },
          {
            type: "checkbox",
            name: "controls",
            label: "Controls",
          },
          {
            type: "text",
            name: "src",
            label: "Source URL",
          },
        ],
        script: function () {
          const videoEl = this;

          // Listen for changes to autoplay, loop, and controls attributes
          videoEl.addEventListener("load", () => {
            if (videoEl.getAttribute("autoplay")) {
              videoEl.autoplay = videoEl.getAttribute("autoplay") === "true";
            }
            if (videoEl.getAttribute("loop")) {
              videoEl.loop = videoEl.getAttribute("loop") === "true";
            }
            if (videoEl.getAttribute("controls")) {
              videoEl.controls = videoEl.getAttribute("controls") === "true";
            }
          });
        },
      },
    },
  });
};
