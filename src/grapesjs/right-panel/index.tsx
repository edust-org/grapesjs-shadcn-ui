import { BlocksProvider, LayersProvider } from "@grapesjs/react";
import CustomBlockManager from "./custom-block-manager";
import CustomLayerManager from "./custom-layer-manager";

export const RightPanel = () => {
  return (
    <>
      <LayersProvider>
        {(props) => <CustomLayerManager {...props} />}
      </LayersProvider>
      <BlocksProvider>
        {(props) => <CustomBlockManager {...props} />}
      </BlocksProvider>
    </>
  );
};
