import { Editor } from "grapesjs";

export default async (editor: Editor) => {
  {
    if (!editor) {
      console.error("Editor is not initialized");
      return;
    }
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
  }
};
