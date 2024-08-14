import {
  BlocksProvider,
  LayersProvider,
  SelectorsProvider,
  StylesProvider,
} from "@grapesjs/react";
import CustomBlockManager from "./custom-block-manager";
import CustomLayerManager from "./custom-layer-manager";
import CustomSelectorManager from "./custom-selector-manager";
import CustomStyleManager from "./custom-style-manager";

export const RightPanel = () => {
  return (
    <>
      <>
        <SelectorsProvider>
          {(props) => <CustomSelectorManager {...props} />}
        </SelectorsProvider>
        <StylesProvider>
          {(props) => <CustomStyleManager {...props} />}
        </StylesProvider>
      </>

      <LayersProvider>
        {(props) => <CustomLayerManager {...props} />}
      </LayersProvider>
      <BlocksProvider>
        {(props) => <CustomBlockManager {...props} />}
      </BlocksProvider>
    </>
  );
};
