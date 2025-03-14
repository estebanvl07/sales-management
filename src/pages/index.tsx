import Link from "next/link";
import Filters from "~/components/Filters";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { api } from "~/utils/api";
import { CardBody } from "@heroui/react";
import AsideCards from "~/components/AsideCards";
import BarChart from "~/components/BarsChart/barsChart.component";
import Table from "~/components/Table";

export default function Home() {
  return (
    <div className="relative flex w-full justify-between gap-8">
      <section className="flex flex-grow flex-col gap-8">
        <div className="flex justify-between gap-6">
          <aside className="w-full">
            <Filters />
          </aside>
          <aside className="pt-2">
            <Link href={"#"} className="whitespace-nowrap text-primary">
              <VisibilityOutlinedIcon />
              <span className="ml-2">Ver detalle</span>
            </Link>
          </aside>
        </div>
        <div className="mt-4">
          <BarChart
            heightChart="400"
            series={[
              {
                color: "#EB7635",
                name: "Dic",
                data: [234, 332, 125],
              },
              {
                color: "#358DEB",
                name: "Noviembre",
                data: [134, 234, 234],
              },
            ]}
            showToolBar={false}
          />
        </div>
        <div className="mt-4 flex gap-x-4">
          <div>
            <Table
              headerConfig={{
                title: "Cashback",
              }}
              columns={[{ name: "Column 1", uid: "col" }]}
              data={[
                {
                  col: "00",
                },
                {
                  col: "00",
                },
                {
                  col: "00",
                },
              ]}
            />
          </div>
          <Table
            headerConfig={{
              title: "Cashback",
            }}
            columns={[
              { name: "Column 1", uid: "col" },
              { name: "Column 2", uid: "col" },
              { name: "Column 3", uid: "col" },
            ]}
            data={[
              {
                col: "00",
              },
              {
                col: "00",
              },
              {
                col: "00",
              },
            ]}
          />
        </div>
      </section>
      <AsideCards />
    </div>
  );
}
