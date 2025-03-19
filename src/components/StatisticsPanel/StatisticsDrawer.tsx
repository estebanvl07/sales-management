import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import StyleIcon from "@mui/icons-material/Style";
import Statistics from "./Statistics";
import { DrawerContent, DrawerHeader } from "@heroui/react";

const StatisticsDrawer = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <>
      <Button
        color="secondary"
        className="!w-4 !rounded-full !border-default-200 !text-default-500"
        variant="outlined"
        onClick={() => setShowDrawer(true)}
      >
        <StyleIcon style={{ width: 20 }} />
      </Button>
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <div className="w-[24rem] p-4">
          <header className="mb-4 border-b px-2 pb-4">
            <h3 className="text-xl font-semibold">Estadisticas</h3>
            <p className="text-sm text-foreground-500">Ventas por mes</p>
          </header>
          <Statistics />
        </div>
      </Drawer>
    </>
  );
};

export default StatisticsDrawer;
