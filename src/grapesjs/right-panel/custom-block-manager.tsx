import { BlocksResultProps } from "@grapesjs/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export type CustomBlockManagerProps = Pick<
  BlocksResultProps,
  "mapCategoryBlocks" | "dragStart" | "dragStop"
>;

export default function CustomBlockManager({
  mapCategoryBlocks,
  dragStart,
  dragStop,
}: CustomBlockManagerProps) {
  return (
    <div className="gjs-custom-block-manager text-left">
      <Accordion type="multiple" className="w-full" defaultValue={["Basic"]}>
        {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
          <AccordionItem key={category} value={category}>
            <AccordionTrigger className="px-2 bg-slate-100 hover:no-underline	">
              {category}
            </AccordionTrigger>
            <AccordionContent className="bg-white">
              <div className="grid grid-cols-2 gap-2 p-2">
                {blocks.map((block) => (
                  <div
                    key={block.getId()}
                    draggable
                    className={
                      "flex flex-col items-center border rounded cursor-pointer py-2 px-1 transition-colors border-slate-100 shadow bg-slate-50 hover:bg-white"
                    }
                    onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                    onDragEnd={() => dragStop(false)}
                  >
                    <div
                      className="h-6 w-6"
                      dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                    />
                    <div
                      className="text-sm text-center w-full"
                      title={block.getLabel()}
                    >
                      {block.getLabel()}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
