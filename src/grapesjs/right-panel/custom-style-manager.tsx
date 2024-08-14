import { StylesResultProps } from "@grapesjs/react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import StylePropertyField from "./style-property-field";
import { IoMdArrowDropright } from "react-icons/io";

const accordionIcon = <IoMdArrowDropright />;

export default function CustomStyleManager({
  sectors,
}: Omit<StylesResultProps, "Container">) {
  return (
    <div className="gjs-custom-style-manager text-left">
      {sectors.map((sector) => (
        <Accordion key={sector.getId()} disableGutters>
          <AccordionSummary
            className="!bg-slate-800"
            expandIcon={accordionIcon}
          >
            {sector.getName()}
          </AccordionSummary>
          <AccordionDetails className={`bg-slate-900 flex flex-wrap`}>
            {sector.getProperties().map((prop) => (
              <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
