import { DevicesProvider, WithEditor } from "@grapesjs/react";
import { RightButtons } from "./right-buttons";
import { Button } from "../../components/ui/button";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";
import { BiMobileLandscape } from "react-icons/bi";

export const TopControllers = () => {
  const handleDevice = (selected: string | number, select) => {
    select(selected);
  };

  return (
    <>
      <div className="border-b bg-slate-50 flex items-center justify-between">
        <DevicesProvider>
          {({ devices, select, selected }) => {
            const iconInactive = `text-lg text-slate-500`;
            const iconActive = `text-lg text-slate-900`;
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

        <WithEditor>
          <RightButtons />
        </WithEditor>
      </div>
    </>
  );
};
