import {
  BlocksProvider,
  LayersProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from "@grapesjs/react";
import CustomBlockManager from "./custom-block-manager";
import CustomLayerManager from "./custom-layer-manager";
import CustomSelectorManager from "./custom-selector-manager";
import CustomStyleManager from "./custom-style-manager";
import CustomTraitManager from "./custom-trait-manager";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { MdDashboardCustomize } from "react-icons/md";
import { FaLayerGroup, FaPaintBrush } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const RightPanel = () => {
  return (
    <>
      <Tabs>
        <TabsList className="flex gap-2 items-center justify-between">
          <TabsTrigger value="selectors">
            <FaPaintBrush className="text-lg" />
          </TabsTrigger>
          <TabsTrigger value="traits">
            <IoMdSettings className="text-lg" />
          </TabsTrigger>
          <TabsTrigger value="layers">
            <FaLayerGroup className="text-lg" />
          </TabsTrigger>
          <TabsTrigger value="blocks">
            <MdDashboardCustomize className="text-lg" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="selectors">
          <>
            <SelectorsProvider>
              {(props) => <CustomSelectorManager {...props} />}
            </SelectorsProvider>
            <StylesProvider>
              {(props) => <CustomStyleManager {...props} />}
            </StylesProvider>
          </>
        </TabsContent>
        <TabsContent value="traits">
          <TraitsProvider>
            {(props) => <CustomTraitManager {...props} />}
          </TraitsProvider>
        </TabsContent>
        <TabsContent value="layers">
          <LayersProvider>
            {(props) => <CustomLayerManager {...props} />}
          </LayersProvider>
        </TabsContent>
        <TabsContent value="blocks">
          <BlocksProvider>
            {(props) => <CustomBlockManager {...props} />}
          </BlocksProvider>
        </TabsContent>
      </Tabs>
    </>
  );
};
