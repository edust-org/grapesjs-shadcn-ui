import { DevicesProvider, WithEditor } from "@grapesjs/react";
import { RightButtons } from "./right-buttons";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";
import { BiMobileLandscape } from "react-icons/bi";

export const TopControllers = () => {
  const handleDevice = (selected: string | number, select) => {
    select(selected);
  };

  return (
    <>
      <div className="border-b bg-muted flex items-center justify-between">
        <DevicesProvider>
          {({ devices, select, selected }) => {
            const iconInactive = `text-lg text-slate-500`;
            const iconActive = `text-lg text-slate-900`;
            // TODO: will implement icon active or not
            return (
              <div>
                {devices.length > 0 && (
                  <Tooltip>
                    <TooltipContent>
                      <p>Desktop</p>
                    </TooltipContent>
                    <TooltipTrigger asChild>
                      <Button
                        variant={"ghost"}
                        className={`my-1 px-2 h-8 ${
                          selected == "desktop" && "bg-white"
                        }`}
                        onClick={() => handleDevice(devices[0]?.id, select)}
                      >
                        <FaDesktop
                          className={
                            selected == "desktop" ? iconActive : iconInactive
                          }
                        />
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                )}
                {devices.length > 1 && (
                  <Button
                    variant={"ghost"}
                    className={`my-1 px-2 h-8 ${
                      selected == "tablet" && "bg-white"
                    }`}
                    title={devices[1].getName()}
                    onClick={() => handleDevice(devices[1]?.id, select)}
                  >
                    <FaTabletScreenButton
                      className={
                        selected == "tablet" ? iconActive : iconInactive
                      }
                    />
                  </Button>
                )}
                {devices.length > 2 && (
                  <Button
                    variant={"ghost"}
                    className={`my-1 px-2 h-8 ${
                      selected == "mobileLandscape" && "bg-white"
                    }`}
                    title={devices[2].getName()}
                    onClick={() => handleDevice(devices[2]?.id, select)}
                  >
                    <FaMobileAlt
                      className={
                        selected == "mobileLandscape"
                          ? iconActive
                          : iconInactive
                      }
                    />
                  </Button>
                )}
                {devices.length > 3 && (
                  <Button
                    variant={"ghost"}
                    className={`my-1 px-2 h-8 ${
                      selected == "mobilePortrait" && "bg-white"
                    }`}
                    title={devices[3].getName()}
                    onClick={() => handleDevice(devices[3]?.id, select)}
                  >
                    <BiMobileLandscape
                      className={
                        selected == "mobilePortrait" ? iconActive : iconInactive
                      }
                    />
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
