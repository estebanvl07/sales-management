import clsx from "clsx";
import React from "react";
import { monthlySummary } from "~/resource/monthlySumary.json";

interface StatisticsProps {
  className?: string;
}

const Statistics = ({ className }: StatisticsProps) => {
  return (
    <div
      className={clsx("flex flex-col gap-y-4 overflow-auto px-2", className)}
    >
      {monthlySummary.map(
        ({ month, clientes, cashback, ventas_totales, monto_total }) => {
          return (
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <h4 className="text-center font-medium">{month}</h4>
              <ul className="[&>li]:flex [&>li]:justify-between">
                <li>
                  <span>Clientes</span>
                  <p>{clientes.toLocaleString()}</p>
                </li>
                <li>
                  <span>Ventas Totales</span>
                  <p>{ventas_totales.toLocaleString()}</p>
                </li>
                <li>
                  <span>Monto Total</span>
                  <p>$ {monto_total.toLocaleString()}</p>
                </li>
              </ul>
              <h3 className="my-2 font-semibold">Cashback</h3>
              <ul className="[&>li]:flex [&>li]:justify-between">
                <li>
                  <span>Acomulado</span>
                  <p>{cashback.acumulado.toLocaleString()}</p>
                </li>
                {cashback.facturado.map(({ fecha, monto }) => (
                  <li>
                    <span>Facturado {fecha}</span>
                    <p>$ {monto.toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Statistics;
