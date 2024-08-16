import { Editor } from "grapesjs";
import appendTailwindCss from "./append-tailwindCss";

export default async (editor: Editor) => {
  {
    editor.Commands.add("save-db", {
      run: async () => {
        const content = JSON.stringify({
          html: editor.getHtml(),
          css: editor.getCss(),
        });
        console.log(content);
      },
    });

    editor.on("component:add", (e) => {
      console.log("component:add");
    });
    editor.on("component:remove", (e) => {
      console.log("component:remove");
    });
    editor.on("component:update", (e) => {
      console.log("component:update");
    });
    editor.on("style:update", (e) => {
      console.log("style:update");
    });
    editor.on("component:change", (e) => {
      console.log("component:change");
    });

    // Loaded TailwindCSS
    editor.Canvas.getModel()["on"]("change:frames", (_m, frames) => {
      frames.forEach((frame) =>
        frame.once("loaded", () => appendTailwindCss(frame))
      );
    });
  }
};
