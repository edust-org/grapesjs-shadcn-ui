import grapesjs, { Editor } from "grapesjs";
import GjsEditor, { Canvas } from "@grapesjs/react";
import gsPluginBlocksBasic from "grapesjs-blocks-basic";
import { RightPanel } from "./right-panel";
import { TopControllers } from "./top-controllers";
import options from "./options";

export const Grapesjs = () => {
  const onEditor = async (editor: Editor) => {
    // Must add this reference
    // Fetch the page content on load
    // const data = JSON.parse("{}");
    // editor.setComponents(data.html);
    // editor.setStyle(data.css);
    // Add a save button to the editor
    // editor.Panels.addButton("options", {
    //   id: "save-db",
    //   className: "fa fa-floppy-o",
    //   command: "save-db",
    //   attributes: { title: "Save" },
    // });
    // Define the save command
    editor.Panels.addButton("options", {
      id: "save-db",
      className: "fa fa-floppy-o",
      command: "save-db",
      attributes: { title: "Save" },
    });

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
    <div>
      <GjsEditor
        className="gjs-custom-editor text-slate-500 "
        // Pass the core GrapesJS library to the wrapper (required).
        // You can also pass the CDN url (eg. "https://unpkg.com/grapesjs")
        grapesjs={grapesjs}
        // Load the GrapesJS CSS file asynchronously from URL.
        // This is an optional prop, you can always import the CSS directly in your JS if you wish.
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css" // css cdn
        // GrapesJS init options
        options={options}
        onEditor={onEditor}
        plugins={[gsPluginBlocksBasic]}
      >
        <div className="flex h-screen overflow-hidden">
          <section className="flex-1 flex flex-col">
            <TopControllers />
            <Canvas className="bg-slate-200 p-2 2xl:p-4" />
          </section>
          <section className="w-60 bg-slate-50 border-l overflow-y-auto overflow-x-hidden">
            <RightPanel />
          </section>
        </div>
      </GjsEditor>
    </div>
  );
};
