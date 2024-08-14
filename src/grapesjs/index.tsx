import grapesjs, { Editor } from "grapesjs";
import GjsEditor, { Canvas, DevicesProvider } from "@grapesjs/react";
import gsPluginBlocksBasic from "grapesjs-blocks-basic";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { Button } from "../components/ui/button";
import { CiMobile3 } from "react-icons/ci";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";
import { BiMobileLandscape } from "react-icons/bi";
import { useState } from "react";

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

  const [selectDevice, setSelectDevice] = useState("");

  const handleDevice = (selected: string | number, select) => {
    console.log(selected);
    select(selected);
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
        // plugins={[gsPluginBlocksBasic]}
      >
        <div className="bg-slate-50">
          <div className="xxxx">
            <DevicesProvider>
              {({ devices, select, selected }) => {
                console.log({ devices, select, selected });

                return (
                  <div>
                    {devices.length > 0 && (
                      <Button
                        variant={"ghost"}
                        className="px-2"
                        title={devices[0].getName()}
                        onClick={() => handleDevice(devices[0]?.id, select)}
                      >
                        <FaDesktop className="text-xl" />
                      </Button>
                    )}
                    {devices.length > 1 && (
                      <Button
                        variant={"ghost"}
                        className="px-2"
                        title={devices[1].getName()}
                        onClick={() => handleDevice(devices[1]?.id, select)}
                      >
                        <FaTabletScreenButton className="text-xl" />
                      </Button>
                    )}
                    {devices.length > 2 && (
                      <Button
                        variant={"ghost"}
                        className="px-2"
                        title={devices[2].getName()}
                        onClick={() => handleDevice(devices[2]?.id, select)}
                      >
                        <FaMobileAlt className="text-xl" />
                      </Button>
                    )}
                    {devices.length > 3 && (
                      <Button
                        variant={"ghost"}
                        className="px-2"
                        title={devices[3].getName()}
                        onClick={() => handleDevice(devices[3]?.id, select)}
                      >
                        <BiMobileLandscape className="text-xl" />
                      </Button>
                    )}
                  </div>
                );
              }}
            </DevicesProvider>
            <Canvas className=" bg-slate-100" />
          </div>
        </div>
      </GjsEditor>
    </>
  );
};
