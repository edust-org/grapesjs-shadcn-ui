import { useRef } from "react";
import grapesjs, { Editor } from "grapesjs";
import GjsEditor, { Canvas } from "@grapesjs/react";
import gsPluginBlocksBasic from "grapesjs-blocks-basic";
import gsPluginTuiImageEditor from "grapesjs-tui-image-editor";

import { RightPanel } from "./right-panel";
import { TopControllers } from "./top-controllers";
import options from "./options";
import { default as customOnEditor } from "./on-editor";
import plugins from "./plugins";
import { ScrollArea } from "@/components/ui";

export const GrapesjsUI = () => {
  const editorRef = useRef<Editor | null>(null);

  const onEditor = async (editor: Editor) => {
    if (!editor) {
      console.error("Editor is not initialized");
      return;
    }
    editorRef.current = editor;

    return customOnEditor(editor);
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
        options={options(editorRef)}
        onEditor={onEditor}
        // Add new plugins
        plugins={[gsPluginBlocksBasic, gsPluginTuiImageEditor, ...plugins]}
      >
        <div className="flex h-screen overflow-hidden">
          <section className="flex-1 flex flex-col">
            <TopControllers />
            <Canvas className="bg-slate-200 p-2 2xl:p-4" />
          </section>
          <ScrollArea className="w-60 bg-slate-50 border-l">
            <RightPanel />
          </ScrollArea>
        </div>
      </GjsEditor>
    </div>
  );
};