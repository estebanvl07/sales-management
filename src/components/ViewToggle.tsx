import { Tab, Tabs } from "@heroui/tabs";
import React from "react";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import StarIcon from "@mui/icons-material/Star";
import { type GraphicMode, useFilterContext } from "~/context/filterContext";

const ViewToggle = () => {
  const { setMode } = useFilterContext();

  return (
    <Tabs
      radius="full"
      variant="bordered"
      color="primary"
      onSelectionChange={(key) => setMode(key as GraphicMode)}
    >
      <Tab
        key="graphic"
        title={
          <div className="flex items-center gap-1">
            <EqualizerOutlinedIcon />
            <span>Gráfico</span>
          </div>
        }
      ></Tab>
      <Tab
        key="pulse"
        title={
          <div className="flex items-center gap-1">
            <StarIcon />
            <span>Pulso</span>
          </div>
        }
      ></Tab>
    </Tabs>
  );
};

export default ViewToggle;
