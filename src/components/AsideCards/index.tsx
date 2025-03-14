import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tab, Tabs } from "@heroui/tabs";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import StarIcon from "@mui/icons-material/Star";

// TODO: rename
const AsideCards = () => {
  return (
    <div className="sticky top-0 flex w-full max-w-[20rem] flex-col gap-2">
      <div className="mb-2 flex items-center justify-between gap-x-8">
        <Tabs radius="full" variant="bordered" color="primary">
          <Tab
            key="graphyc"
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
        <ExpandMoreIcon />
      </div>
      <div className="flex max-h-[35rem] flex-col gap-y-4 overflow-auto px-2">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h4 className="text-center font-medium">Noviembre</h4>
          <ul className="[&>li]:flex [&>li]:justify-between">
            <li>
              <span>Clientes</span>
              <p>61.434</p>
            </li>
            <li>
              <span>Ventas Totales</span>
              <p>1.434</p>
            </li>
            <li>
              <span>Monto Total</span>
              <p>$ 70M</p>
            </li>
          </ul>
          <h3 className="my-2 font-semibold">Cashback</h3>
          <ul className="[&>li]:flex [&>li]:justify-between">
            <li>
              <span>Acomulado</span>
              <p>61.434</p>
            </li>
            <li>
              <span>Facturado 01/11</span>
              <p>$1.434</p>
            </li>
            <li>
              <span>Facturado 10/11</span>
              <p>$1.434</p>
            </li>
            <li>
              <span>Facturado 20/11</span>
              <p>$1.434</p>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h4 className="text-center font-medium">Noviembre</h4>
          <ul className="[&>li]:flex [&>li]:justify-between">
            <li>
              <span>Clientes</span>
              <p>61.434</p>
            </li>
            <li>
              <span>Ventas Totales</span>
              <p>1.434</p>
            </li>
            <li>
              <span>Monto Total</span>
              <p>$ 70M</p>
            </li>
          </ul>
          <h3 className="my-2 font-semibold">Cashback</h3>
          <ul className="[&>li]:flex [&>li]:justify-between">
            <li>
              <span>Acomulado</span>
              <p>61.434</p>
            </li>
            <li>
              <span>Facturado 01/11</span>
              <p>$1.434</p>
            </li>
            <li>
              <span>Facturado 10/11</span>
              <p>$1.434</p>
            </li>
            <li>
              <span>Facturado 20/11</span>
              <p>$1.434</p>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h4 className="text-center font-medium">Noviembre</h4>
          <ul className="[&>li]:flex [&>li]:justify-between">
            <li>
              <span>Clientes</span>
              <p>61.434</p>
            </li>
            <li>
              <span>Ventas Totales</span>
              <p>1.434</p>
            </li>
            <li>
              <span>Monto Total</span>
              <p>$ 70M</p>
            </li>
          </ul>
          <h3 className="my-2 font-semibold">Cashback</h3>
          <ul className="[&>li]:flex [&>li]:justify-between">
            <li>
              <span>Acomulado</span>
              <p>61.434</p>
            </li>
            <li>
              <span>Facturado 01/11</span>
              <p>$1.434</p>
            </li>
            <li>
              <span>Facturado 10/11</span>
              <p>$1.434</p>
            </li>
            <li>
              <span>Facturado 20/11</span>
              <p>$1.434</p>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h4 className="text-center font-medium">Noviembre</h4>
          <ul className="[&>li]:flex [&>li]:justify-between">
            <li>
              <span>Clientes</span>
              <p>61.434</p>
            </li>
            <li>
              <span>Ventas Totales</span>
              <p>1.434</p>
            </li>
            <li>
              <span>Monto Total</span>
              <p>$ 70M</p>
            </li>
          </ul>
          <h3 className="my-2 font-semibold">Cashback</h3>
          <ul className="[&>li]:flex [&>li]:justify-between">
            <li>
              <span>Acomulado</span>
              <p>61.434</p>
            </li>
            <li>
              <span>Facturado 01/11</span>
              <p>$1.434</p>
            </li>
            <li>
              <span>Facturado 10/11</span>
              <p>$1.434</p>
            </li>
            <li>
              <span>Facturado 20/11</span>
              <p>$1.434</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AsideCards;
