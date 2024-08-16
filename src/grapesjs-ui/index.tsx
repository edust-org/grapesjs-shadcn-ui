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
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui";
import { LeftPanel } from "./left-panel";

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
        className="gjs-custom-editor"
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
        {/* <div className="flex h-screen overflow-hidden">
          <LeftPanel />
          <section className="flex-1 flex flex-col">
            <TopControllers />
            <Canvas className="bg-slate-200 p-2 2xl:p-4" />
          </section>
          <ScrollArea className="w-60 bg-slate-50 border-l">
            <RightPanel />
          </ScrollArea>
        </div> */}

        <ResizablePanelGroup
          direction="horizontal"
          className="flex bg-green-50 h-screen overflow-hidden"
        >
          <ResizablePanel
            defaultSize={11}
            minSize={11}
            className="w-[200px] bg-gray-200 h-full"
          >
            <LeftPanel />
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel className="flex-1 h-full">
            <header>
              <TopControllers />
            </header>
            <main className="h-full">
              <Canvas className="bg-slate-200 border-b-[42px] border-transparent" />
            </main>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
            defaultSize={11}
            minSize={11}
            className="w-[200px] bg-gray-200 h-full"
          >
            <RightPanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </GjsEditor>
    </div>
  );
};
