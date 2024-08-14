import * as React from "react";
import { useEditor } from "@grapesjs/react";
import type {
  Property,
  PropertyComposite,
  PropertyRadio,
  PropertySelect,
  PropertySlider,
  PropertyStack,
} from "grapesjs";

import { MdDelete, MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoIosClose, IoMdArrowDropupCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

import { Button } from "../../components/ui/button";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
  prop: Property;
}

export default function StylePropertyField({
  prop,
  ...rest
}: StylePropertyFieldProps) {
  const editor = useEditor();
  const handleChange = (value: string) => {
    prop.upValue(value);
  };

  const onChange = (ev: any) => {
    handleChange(ev.target.value);
  };

  const openAssets = () => {
    const { Assets } = editor;
    Assets.open({
      select: (asset, complete) => {
        console.log({ complete });
        prop.upValue(asset.getSrc(), { partial: !complete });
        complete && Assets.close();
      },
      types: ["image"],
      accept: "image/*",
    });
  };

  const type = prop.getType();
  const defValue = prop.getDefaultValue();
  const canClear = prop.canClear();
  const hasValue = prop.hasValue();
  const value = prop.getValue();
  const valueString = hasValue ? value : "";
  const valueWithDef = hasValue ? value : defValue;

  let inputToRender = (
    <TextField
      placeholder={defValue}
      value={valueString}
      onChange={onChange}
      size="small"
      fullWidth
    />
  );

  switch (type) {
    case "radio":
      {
        const radioProp = prop as PropertyRadio;
        inputToRender = (
          <RadioGroup value={value} onChange={onChange} row>
            {radioProp.getOptions().map((option) => (
              <FormControlLabel
                key={radioProp.getOptionId(option)}
                value={radioProp.getOptionId(option)}
                label={radioProp.getOptionLabel(option)}
                control={<Radio size="small" />}
              />
            ))}
          </RadioGroup>
        );
      }
      break;
    case "select":
      {
        const selectProp = prop as PropertySelect;
        inputToRender = (
          <FormControl fullWidth size="small">
            <Select value={value} onChange={onChange}>
              {selectProp.getOptions().map((option) => (
                <MenuItem
                  key={selectProp.getOptionId(option)}
                  value={selectProp.getOptionId(option)}
                >
                  {selectProp.getOptionLabel(option)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }
      break;
    case "color":
      {
        inputToRender = (
          <TextField
            fullWidth
            placeholder={defValue}
            value={valueString}
            onChange={onChange}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <div
                    className={`w-[15px] h-[15px] rounded border border-slate-500`}
                    style={{ backgroundColor: valueWithDef }}
                  >
                    <input
                      type="color"
                      className="w-[15px] h-[15px] cursor-pointer opacity-0"
                      value={valueWithDef}
                      onChange={(ev) => handleChange(ev.target.value)}
                    />
                  </div>
                </InputAdornment>
              ),
            }}
          />
        );
      }
      break;
    case "slider":
      {
        const sliderProp = prop as PropertySlider;
        inputToRender = (
          <Slider
            size="small"
            value={parseFloat(value)}
            min={sliderProp.getMin()}
            max={sliderProp.getMax()}
            step={sliderProp.getStep()}
            onChange={onChange}
            valueLabelDisplay="auto"
          />
        );
      }
      break;
    case "file":
      {
        inputToRender = (
          <div className="flex flex-col items-center gap-3">
            {value && value !== defValue && (
              <div
                className="w-[50px] h-[50px] rounded inline-block bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url("${value}")` }}
                onClick={() => handleChange("")}
              />
            )}
            <button
              type="button"
              onClick={openAssets}
              className={"border rounded px-2 py-1 w-full"}
            >
              Select Image
            </button>
          </div>
        );
      }
      break;
    case "composite":
      {
        const compositeProp = prop as PropertyComposite;
        inputToRender = (
          <div
            className={
              "flex flex-wrap p-2 bg-black/20 rounded border border-slate-500"
            }
          >
            {compositeProp.getProperties().map((prop) => (
              <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
          </div>
        );
      }
      break;
    case "stack":
      {
        const stackProp = prop as PropertyStack;
        const layers = stackProp.getLayers();
        const isTextShadow = stackProp.getName() === "text-shadow";
        inputToRender = (
          <div
            className={
              "flex flex-col p-2 gap-2 bg-black/20 min-h-[54px] rounded border border-slate-500"
            }
          >
            {layers.map((layer) => (
              <div
                key={layer.getId()}
                className={"rounded border border-slate-500"}
              >
                <div className="flex gap-1 bg-slate-800 px-2 py-1 items-center">
                  <Button
                    size="icon"
                    onClick={() => layer.move(layer.getIndex() - 1)}
                  >
                    <IoMdArrowDropupCircle />
                  </Button>
                  <Button
                    size="icon"
                    onClick={() => layer.move(layer.getIndex() + 1)}
                  >
                    <MdOutlineArrowDropDownCircle />
                  </Button>
                  <button className="flex-grow" onClick={() => layer.select()}>
                    {layer.getLabel()}
                  </button>
                  <div
                    className={
                      "bg-white min-w-[17px] min-h-[17px] text-black text-sm flex justify-center"
                    }
                    style={layer.getStylePreview({
                      number: { min: -3, max: 3 },
                      camelCase: true,
                    })}
                  >
                    {isTextShadow && "T"}
                  </div>
                  <Button size="icon" onClick={() => layer.remove()}>
                    <MdDelete />
                  </Button>
                </div>
                {layer.isSelected() && (
                  <div className="p-2 flex flex-wrap">
                    {stackProp.getProperties().map((prop) => (
                      <StylePropertyField key={prop.getId()} prop={prop} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      }
      break;
  }

  return (
    <div
      {...rest}
      className={`mb-3 px-1 ${prop.isFull() ? "w-full" : "w-1/2"}`}
    >
      <div className={`flex mb-2 items-center ${canClear && "text-sky-300"}`}>
        <div className="flex-grow capitalize">{prop.getLabel()}</div>
        {canClear && (
          <button onClick={() => prop.clear()}>
            <IoIosClose />
          </button>
        )}
        {type === "stack" && (
          <Button
            size="icon"
            className="!ml-2"
            onClick={() => (prop as PropertyStack).addLayer({}, { at: 0 })}
          >
            <FaPlus />
          </Button>
        )}
      </div>
      {inputToRender}
    </div>
  );
}
