import React from "react";
import ViewToggle from "../ViewToggle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Statistics from "./Statistics";

const AsidePanel = () => {
  return (
    <div className="sticky top-4 flex w-full flex-col gap-2">
      <div className="mb-2 flex items-center justify-between gap-x-8">
        <ViewToggle />
        <ExpandMoreIcon />
      </div>
      <Statistics className="max-h-[35rem]" />
    </div>
  );
};

export default AsidePanel;
