import grapesjs, { Editor } from "grapesjs";
import GjsEditor, { Canvas, DevicesProvider } from "@grapesjs/react";
import { Button } from "../components/ui/button";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";
import { BiMobileLandscape } from "react-icons/bi";
import gsPluginBlocksBasic from "grapesjs-blocks-basic";
import { RightPanel } from "./right-panel";

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
    // editor.Commands.add("save-db", {
    //   run: async () => {
    //     const content = JSON.stringify({
    //       html: editor.getHtml(),
    //       css: editor.getCss(),
    //     });
    //     console.log(content);
    //   },
    // });
  };

  const handleDevice = (selected: string | number, select) => {
    select(selected);
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
        options={{
          height: "100vh",
          storageManager: false,
        }}
        onEditor={onEditor}
        plugins={[gsPluginBlocksBasic]}
      >
        <div className="flex h-full">
          <section className="flex-1 flex flex-col">
            <div className="border-b bg-slate-50">
              <DevicesProvider>
                {({ devices, select, selected }) => {
                  const iconInactive = `text-xl text-slate-500`;
                  const iconActive = `text-xl text-slate-900`;
                  // TODO: will implement icon active or not

                  return (
                    <div>
                      {devices.length > 0 && (
                        <Button
                          variant={"ghost"}
                          className="px-2"
                          title={devices[0].getName()}
                          onClick={() => handleDevice(devices[0]?.id, select)}
                        >
                          <FaDesktop className={iconInactive} />
                        </Button>
                      )}
                      {devices.length > 1 && (
                        <Button
                          variant={"ghost"}
                          className="px-2"
                          title={devices[1].getName()}
                          onClick={() => handleDevice(devices[1]?.id, select)}
                        >
                          <FaTabletScreenButton className={iconInactive} />
                        </Button>
                      )}
                      {devices.length > 2 && (
                        <Button
                          variant={"ghost"}
                          className="px-2"
                          title={devices[2].getName()}
                          onClick={() => handleDevice(devices[2]?.id, select)}
                        >
                          <FaMobileAlt className={iconInactive} />
                        </Button>
                      )}
                      {devices.length > 3 && (
                        <Button
                          variant={"ghost"}
                          className="px-2"
                          title={devices[3].getName()}
                          onClick={() => handleDevice(devices[3]?.id, select)}
                        >
                          <BiMobileLandscape className={iconInactive} />
                        </Button>
                      )}
                    </div>
                  );
                }}
              </DevicesProvider>
            </div>
            <Canvas className="bg-slate-100 p-2 2xl:p-4" />
          </section>
          <section className="w-60 bg-slate-50 border-l">
            <RightPanel />
          </section>
        </div>
      </GjsEditor>
    </div>
  );
};
