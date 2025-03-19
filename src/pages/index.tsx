import Link from "next/link";
import Filters from "~/components/Filters";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import BarChart from "~/components/BarsChart/barsChart.component";
import { useResize } from "~/hooks/useResize";
import ViewToggle from "~/components/ViewToggle";
import { AsidePanel, StatisticsDrawer } from "~/components/StatisticsPanel";
import { useFilterContext } from "~/context/filterContext";
import GraphicOptions from "~/components/GraphicOptions";
import { Alert } from "@mui/material";

export default function Home() {
  const { size } = useResize();
  const { series, labels, mode } = useFilterContext();

  const isXl = size && size > 1280;

  return (
    <div className="relative flex w-full flex-row justify-between gap-8">
      <section className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-3 xl:flex-row xl:gap-6">
          <aside className="flex w-full flex-col items-center xl:items-start">
            <Filters />
          </aside>
          {!isXl && (
            <div className="flex items-center gap-3">
              <ViewToggle />
              <StatisticsDrawer />
            </div>
          )}
          <aside className="xl:pt-2">
            <Link href={"#"} className="whitespace-nowrap text-primary">
              <VisibilityOutlinedIcon />
              <span className="ml-2">Ver detalle</span>
            </Link>
          </aside>
        </div>
        <div className="mt-4">
          {mode === "graphic" && <GraphicOptions />}
          {series && (
            <BarChart
              heightChart="400"
              widthChart="100%"
              hasZoom
              keys={labels}
              series={series}
              showToolBar={false}
            />
          )}
        </div>
        <div className="max-w-screen mt-4 flex gap-x-4 overflow-x-auto">
          <Alert variant="standard" color="warning" className="w-full">
            La tabla no se encuentra disponible, Incongruencias con el diseño
          </Alert>
        </div>
      </section>
      {isXl && (
        <div className="min-w-[20rem] max-w-[32rem]">
          <AsidePanel />
        </div>
      )}
    </div>
  );
}
