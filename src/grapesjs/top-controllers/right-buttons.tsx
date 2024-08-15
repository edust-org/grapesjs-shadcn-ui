import { useEffect, useMemo, useState } from "react";
import { useEditor } from "@grapesjs/react";
import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from "../../components/ui/button";
import { FaCode, FaRedo, FaUndo } from "react-icons/fa";
import { MdBorderClear } from "react-icons/md";

export const RightButtons = () => {
  const editor = useEditor();
  const [, setUpdateCounter] = useState(0);
  const { UndoManager, Commands } = editor;

  const cmdButtons = useMemo(
    () => [
      {
        id: "core:component-outline",
        icon: <MdBorderClear />,
      },
      {
        id: "core:fullscreen",
        icon: <SlSizeFullscreen />,
        options: { target: "#root" },
      },
      {
        id: "core:open-code",
        icon: <FaCode />,
      },
      {
        id: "core:undo",
        icon: <FaUndo />,
        disabled: () => !UndoManager.hasUndo(),
      },
      {
        id: "core:redo",
        icon: <FaRedo />,
        disabled: () => !UndoManager.hasRedo(),
      },
    ],
    [UndoManager]
  );

  useEffect(() => {
    const cmdEvent = "run stop";
    const updateEvent = "update";
    const updateCounter = () => setUpdateCounter((value) => value + 1);
    const onCommand = (id: string) => {
      cmdButtons.find((btn) => btn.id === id) && updateCounter();
    };
    editor.on(cmdEvent, onCommand);
    editor.on(updateEvent, updateCounter);

    return () => {
      editor.off(cmdEvent, onCommand);
      editor.off(updateEvent, updateCounter);
    };
  }, [cmdButtons, editor]);

  return (
    <>
      <div className="flex gap-3 ml-auto px-2">
        {cmdButtons.map(({ id, icon, disabled, options = {} }) => (
          <Button
            key={id}
            type="button"
            variant={"ghost"}
            className="px-2 text-lg"
            onClick={() =>
              Commands.isActive(id)
                ? Commands.stop(id)
                : Commands.run(id, options)
            }
            disabled={disabled?.()}
          >
            {icon}
          </Button>
        ))}
      </div>
    </>
  );
};
