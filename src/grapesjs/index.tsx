import grapesjs, { Editor } from "grapesjs";
import GjsEditor from "@grapesjs/react";
import gsPluginBlocksBasic from "grapesjs-blocks-basic";

export const Grapesjs = () => {
  const onEditor = async (editor: Editor) => {
    // Must add this reference

    // Fetch the page content on load

    const data = JSON.parse("{}");
    editor.setComponents(data.html);
    editor.setStyle(data.css);

    // Add a save button to the editor
    editor.Panels.addButton("options", {
      id: "save-db",
      className: "fa fa-floppy-o",
      command: "save-db",
      attributes: { title: "Save" },
    });

    // Define the save command
    editor.Commands.add("save-db", {
      run: async () => {
        const content = JSON.stringify({
          html: editor.getHtml(),
          css: editor.getCss(),
        });
        console.log(content);
      },
    });
  };

  return (
    <>
      <GjsEditor
        // Pass the core GrapesJS library to the wrapper (required).
        // You can also pass the CDN url (eg. "https://unpkg.com/grapesjs")
        grapesjs={grapesjs}
        // Load the GrapesJS CSS file asynchronously from URL.
        // This is an optional prop, you can always import the CSS directly in your JS if you wish.
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css" // css cdn
        // GrapesJS init options
        options={{
          height: "100vh",
          storageManager: false,
        }}
        onEditor={onEditor}
        plugins={[gsPluginBlocksBasic]}
      />
    </>
  );
};
