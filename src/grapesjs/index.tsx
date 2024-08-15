import grapesjs, { Editor } from "grapesjs";
import GjsEditor, { Canvas } from "@grapesjs/react";
import { RightPanel } from "./right-panel";
import { TopControllers } from "./top-controllers";
import options from "./options";

import gsPluginBlocksBasic from "grapesjs-blocks-basic";
import gsPluginTuiImageEditor from "grapesjs-tui-image-editor";

export const Grapesjs = () => {
  const onEditor = async (editor: Editor) => {
    // Must add this reference

    // Fetch the page content on load
    /*
    const data = JSON.parse("{}");
    editor.setComponents(data.html);
    editor.setStyle(data.css);
    */

    // Add a save button to the editor
    editor.Commands.add("save-db", {
      run: async () => {
        const content = JSON.stringify({
          html: editor.getHtml(),
          css: editor.getCss(),
        });
        console.log(content);
      },
    });

    // Canvas Detect
    /*
    const onChange = () => {
      console.log("Canvas changed");
      const content = JSON.stringify({
        html: editor.getHtml(),
        css: editor.getCss(),
      });
      console.log(content);
    };

    editor.on("component:add", onChange);
    editor.on("component:remove", onChange);
    editor.on("component:update", onChange);
    editor.on("style:update", onChange);
    editor.on("component:change", onChange);*/
    
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
        plugins={[gsPluginBlocksBasic, gsPluginTuiImageEditor]}
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
