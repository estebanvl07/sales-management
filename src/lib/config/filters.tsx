import { Series } from "~/types/chart.types";
import {
  MAIN_FILTERS,
  WEEK_FILTERS,
  SIX_MONTH_FILTERS,
  YEAR_FILTERS,
  PULSE_FILTERS,
} from "~/types/filters";

const onNewArray = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

const generateArrayRandoms = (lenght: number, min: number, max: number) => {
  return [...Array(lenght)].map(
    () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
};

type GraphicDataProps = {
  labels: string[];
  pulse?: {
    series: Series[];
  };
  graphic?: {
    clientsSeries: Series[];
    transactionsSeries: Series[];
    cashSeries: Series[];
    cashbackSeries: Series[];
  };
};

export type FilterOptions = {
  title: string;
  key: string;
  pulseMode: boolean;
  graphicMode: boolean;
  filters?: { title: string; key: string; value?: number }[];
  graphicData?: GraphicDataProps;
};

export const filterOptions: FilterOptions[] = [
  {
    title: "Pulso",
    key: MAIN_FILTERS.pulse,
    pulseMode: true,
    graphicMode: false,
    filters: [
      { title: "Todos", key: PULSE_FILTERS.all },
      { title: "Septiembre", value: 1, key: PULSE_FILTERS.month_1 },
      { title: "Octubre", value: 2, key: PULSE_FILTERS.month_2 },
      { title: "Noviembre", value: 3, key: PULSE_FILTERS.month_3 },
    ],
    graphicData: {
      labels: ["Septiembre", "Octubre", "Noviembre"],
      pulse: {
        series: [
          {
            color: "#2DCF5A",
            type: "bar",
            name: "Dia 1",
            data: [350000, 330000, 350000],
          },
          {
            color: "#358DEB",
            name: "Dia 10",
            type: "bar",
            data: [380000, 400000, 420000],
          },
          {
            color: "#EB7635",
            name: "Dia 20",
            type: "bar",
            data: [120000, 130000, 140000],
          },
          {
            name: "Cashback Acomulado",
            type: "line",
            color: "#7A35EB",
            data: [350000, 330000, 350000],
          },
        ],
      },
    },
  },
  {
    title: "HOY",
    key: MAIN_FILTERS.today,
    pulseMode: false,
    graphicMode: true,
    graphicData: {
      labels: onNewArray(0, 23).map((n) => {
        if (n <= 9) {
          return `0${n}:00`;
        }
        return `${n}:00`;
      }),
      graphic: {
        clientsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Clientes Nuevos",
            data: generateArrayRandoms(23, 100, 60),
          },
          {
            color: "#358DEB",
            type: "bar",
            name: "Compraron",
            data: generateArrayRandoms(23, 100, 500),
          },
        ],
        transactionsSeries: [
          {
            color: "#358DEB",
            type: "bar",
            name: "Transacciones",
            data: generateArrayRandoms(23, 200000, 1300000),
          },
        ],
        cashSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Dinero Total",
            data: generateArrayRandoms(23, 200000, 130000000),
          },
          {
            color: "#7A35EB",
            name: "Ventas",
            type: "line",
            data: generateArrayRandoms(23, 100, 40000),
          },
          {
            color: "#48454E",
            name: "Devoluciones",
            type: "line",
            data: generateArrayRandoms(23, 100, 40000),
          },
        ],
        cashbackSeries: [
          {
            color: "#EB7635",
            name: "Cashback Generado",
            type: "line",
            data: generateArrayRandoms(23, 200000, 130000000),
          },
          {
            color: "#358DEB",
            name: "Cashback Acomulado",
            type: "line",
            data: generateArrayRandoms(23, 200000, 13000000),
          },
          {
            color: "#EB35AD",
            name: "Cashback Total",
            type: "line",
            data: generateArrayRandoms(23, 200000, 130000000),
          },
        ],
      },
    },
  },
  {
    title: "7D",
    key: MAIN_FILTERS.week,
    pulseMode: false,
    graphicMode: true,
    filters: [
      { title: "Todos", key: "all" },
      { title: "Lunes", value: 1, key: WEEK_FILTERS.monday },
      { title: "Martes", value: 2, key: WEEK_FILTERS.tuesday },
      { title: "Miércoles", value: 3, key: WEEK_FILTERS.wednesday },
      { title: "Jueves", value: 4, key: WEEK_FILTERS.thursday },
      { title: "Viernes", value: 5, key: WEEK_FILTERS.friday },
      { title: "Sábado", value: 6, key: WEEK_FILTERS.saturday },
      { title: "Domingo", value: 7, key: WEEK_FILTERS.sunday },
    ],
    graphicData: {
      labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ],
      graphic: {
        clientsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Clientes Nuevos",
            data: generateArrayRandoms(7, 100, 2000),
          },
          {
            color: "#358DEB",
            type: "bar",
            name: "Compraron",
            data: generateArrayRandoms(7, 100, 2000),
          },
        ],
        transactionsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Transacciones",
            data: generateArrayRandoms(7, 100000, 6000000),
          },
        ],
        cashSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Dinero Total",
            data: generateArrayRandoms(7, 1000000, 60000000),
          },
          {
            color: "#7A35EB",
            name: "Ventas",
            type: "line",
            data: generateArrayRandoms(7, 1000000, 6000000),
          },
          {
            color: "#48454E",
            type: "line",
            name: "Devoluciones",
            data: generateArrayRandoms(7, 1000000, 6000000),
          },
        ],
        cashbackSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Cashback Generado",
            data: generateArrayRandoms(7, 1000000, 6000000),
          },
          {
            color: "#358DEB",
            type: "line",
            name: "Cashback Acomulado",
            data: generateArrayRandoms(7, 1000000, 6000000),
          },
          {
            color: "#EB35AD",
            type: "line",
            name: "Cashback Total",
            data: generateArrayRandoms(7, 1000000, 6000000),
          },
        ],
      },
    },
  },
  {
    title: "1 MES",
    key: MAIN_FILTERS.month,
    pulseMode: false,
    graphicMode: true,
    graphicData: {
      labels: onNewArray(1, 30).map((v) => `${v}`),
      graphic: {
        clientsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Clientes Nuevos",
            data: generateArrayRandoms(30, 10, 200),
          },
          {
            color: "#358DEB",
            type: "bar",
            name: "Compraron",
            data: generateArrayRandoms(30, 10, 200),
          },
        ],
        transactionsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Transacciones",
            data: generateArrayRandoms(30, 100000, 6000000),
          },
        ],
        cashSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Dinero Total",
            data: generateArrayRandoms(30, 1600000, 6000000),
          },
          {
            color: "#7A35EB",
            name: "Ventas",
            type: "line",
            data: generateArrayRandoms(30, 1000000, 6000000),
          },
          {
            color: "#48454E",
            type: "line",
            name: "Devoluciones",
            data: generateArrayRandoms(30, 1000000, 6000000),
          },
        ],
        cashbackSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Cashback Generado",
            data: generateArrayRandoms(30, 1000000, 6000000),
          },
          {
            color: "#358DEB",
            type: "line",
            name: "Cashback Acomulado",
            data: generateArrayRandoms(30, 1000000, 6000000),
          },
          {
            color: "#EB35AD",
            type: "line",
            name: "Cashback Total",
            data: generateArrayRandoms(30, 1000000, 6000000),
          },
        ],
      },
    },
  },
  {
    title: "6 MESES",
    key: MAIN_FILTERS.six_month,
    pulseMode: true,
    graphicMode: true,
    filters: [
      { title: "Todos", key: SIX_MONTH_FILTERS.all },
      { title: "MES 1", value: 1, key: SIX_MONTH_FILTERS.month_1 },
      { title: "MES 2", value: 2, key: SIX_MONTH_FILTERS.month_2 },
      { title: "MES 3", value: 3, key: SIX_MONTH_FILTERS.month_3 },
      { title: "MES 4", value: 4, key: SIX_MONTH_FILTERS.month_4 },
      { title: "MES 5", value: 5, key: SIX_MONTH_FILTERS.month_5 },
      { title: "MES 6", value: 6, key: SIX_MONTH_FILTERS.month_6 },
    ],
    graphicData: {
      labels: ["MES 1", "MES 2", "MES 3", "MES 4", "MES 5", "MES 6"],
      pulse: {
        series: [
          {
            color: "#2DCF5A",
            type: "bar",
            name: "Dia 1",
            data: [350000, 330000, 350000, 350000, 330000, 350000],
          },
          {
            color: "#358DEB",
            name: "Dia 10",
            type: "bar",
            data: [380000, 400000, 420000, 380000, 400000, 420000],
          },
          {
            color: "#EB7635",
            name: "Dia 20",
            type: "bar",
            data: [120000, 130000, 140000, 120000, 130000, 140000],
          },
          {
            name: "Cashback Acomulado",
            type: "line",
            color: "#7A35EB",
            data: [350000, 330000, 350000, 350000, 330000, 350000],
          },
        ],
      },
      graphic: {
        clientsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Clientes Nuevos",
            data: generateArrayRandoms(6, 1000, 2000),
          },
          {
            color: "#358DEB",
            type: "bar",
            name: "Compraron",
            data: generateArrayRandoms(6, 1000, 50000),
          },
        ],
        transactionsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Transacciones",
            data: generateArrayRandoms(6, 16000000, 60000000),
          },
        ],
        cashSeries: [
          {
            color: "#EB7635",
            name: "Dinero Total",
            type: "line",
            data: generateArrayRandoms(6, 16000000, 60000000),
          },
          {
            color: "#7A35EB",
            name: "Ventas",
            type: "line",
            data: generateArrayRandoms(6, 16000000, 60000000),
          },
          {
            color: "#48454E",
            name: "Devoluciones",
            type: "line",
            data: generateArrayRandoms(6, 16000000, 60000000),
          },
        ],
        cashbackSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Cashback Generado",
            data: generateArrayRandoms(6, 16000000, 60000000),
          },
          {
            color: "#358DEB",
            type: "line",
            name: "Cashback Acomulado",
            data: generateArrayRandoms(6, 16000000, 60000000),
          },
          {
            color: "#EB35AD",
            type: "line",
            name: "Cashback Total",
            data: generateArrayRandoms(6, 16000000, 60000000),
          },
        ],
      },
    },
  },
  {
    title: "YTD/YTG",
    key: MAIN_FILTERS.ytd,
    pulseMode: true,
    graphicMode: true,
    graphicData: {
      labels: ["2022-2023", "2023-2024"],
      pulse: {
        series: [
          {
            color: "#2DCF5A",
            type: "bar",
            name: "Dia 1",
            data: [350000, 350000],
          },
          {
            color: "#358DEB",
            name: "Dia 10",
            type: "bar",
            data: [234555, 420000],
          },
          {
            color: "#EB7635",
            name: "Dia 20",
            type: "bar",
            data: [120000, 140000],
          },
          {
            name: "Cashback Acomulado",
            type: "line",
            color: "#7A35EB",
            data: [980565, 676766],
          },
        ],
      },
      graphic: {
        clientsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Clientes Nuevos",
            data: generateArrayRandoms(2, 10000, 20000),
          },
          {
            color: "#358DEB",
            type: "bar",
            name: "Compraron",
            data: generateArrayRandoms(2, 10000, 500000),
          },
        ],
        transactionsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Transacciones",
            data: generateArrayRandoms(2, 100000, 5000000),
          },
        ],
        cashSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Dinero Total",
            data: generateArrayRandoms(2, 100000, 5000000),
          },
          {
            color: "#7A35EB",
            type: "line",
            name: "Ventas",
            data: generateArrayRandoms(2, 100000, 5000000),
          },
          {
            color: "#48454E",
            type: "line",
            name: "Devoluciones",
            data: generateArrayRandoms(2, 100000, 5000000),
          },
        ],
        cashbackSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Cashback Generado",
            data: generateArrayRandoms(2, 100000, 5000000),
          },
          {
            color: "#358DEB",
            type: "line",
            name: "Cashback Acomulado",
            data: generateArrayRandoms(2, 100000, 5000000),
          },
          {
            color: "#EB35AD",
            type: "line",
            name: "Cashback Total",
            data: generateArrayRandoms(2, 100000, 5000000),
          },
        ],
      },
    },
  },
  {
    title: "1 AÑO",
    key: MAIN_FILTERS.year,
    pulseMode: true,
    graphicMode: true,
    filters: [
      { title: "Todos", key: YEAR_FILTERS.all },
      { title: "Enero", value: 1, key: YEAR_FILTERS.january },
      { title: "Febrero", value: 2, key: YEAR_FILTERS.february },
      { title: "Marzo", value: 3, key: YEAR_FILTERS.march },
      { title: "Abril", value: 4, key: YEAR_FILTERS.april },
      { title: "Mayo", value: 5, key: YEAR_FILTERS.may },
      { title: "Junio", value: 6, key: YEAR_FILTERS.june },
      { title: "Julio", value: 7, key: YEAR_FILTERS.july },
      { title: "Agosto", value: 8, key: YEAR_FILTERS.august },
      { title: "Septiembre", value: 9, key: YEAR_FILTERS.september },
      { title: "Octubre", value: 10, key: YEAR_FILTERS.october },
      { title: "Noviembre", value: 11, key: YEAR_FILTERS.november },
      { title: "Diciembre", value: 12, key: YEAR_FILTERS.december },
    ],
    graphicData: {
      labels: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      pulse: {
        series: [
          {
            color: "#2DCF5A",
            type: "bar",
            name: "Dia 1",
            data: [
              350000, 330000, 350000, 350000, 330000, 350000, 350000, 330000,
              350000, 350000, 330000, 350000,
            ],
          },
          {
            color: "#358DEB",
            name: "Dia 10",
            type: "bar",
            data: [
              380000, 400000, 420000, 380000, 400000, 420000, 380000, 400000,
              420000, 380000, 400000, 420000,
            ],
          },
          {
            color: "#EB7635",
            name: "Dia 20",
            type: "bar",
            data: [
              120000, 130000, 140000, 120000, 130000, 140000, 120000, 130000,
              140000, 120000, 130000, 140000,
            ],
          },
          {
            name: "Cashback Acomulado",
            type: "line",
            color: "#7A35EB",
            data: [
              350000, 330000, 350000, 350000, 330000, 350000, 350000, 330000,
              350000, 350000, 330000, 350000,
            ],
          },
        ],
      },
      graphic: {
        clientsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Clientes Nuevos",
            data: generateArrayRandoms(12, 1000, 2000),
          },
          {
            color: "#358DEB",
            type: "bar",
            name: "Compraron",
            data: generateArrayRandoms(12, 1000, 2000),
          },
        ],
        transactionsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Transacciones",
            data: generateArrayRandoms(12, 100000, 5000000),
          },
        ],
        cashSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Dinero Total",
            data: generateArrayRandoms(12, 100000, 5000000),
          },
          {
            color: "#7A35EB",
            type: "line",
            name: "Ventas",
            data: generateArrayRandoms(12, 100000, 5000000),
          },
          {
            color: "#48454E",
            type: "line",
            name: "Devoluciones",
            data: generateArrayRandoms(12, 100000, 5000000),
          },
        ],
        cashbackSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Cashback Generado",
            data: generateArrayRandoms(12, 100000, 5000000),
          },
          {
            color: "#358DEB",
            type: "line",
            name: "Cashback Acomulado",
            data: generateArrayRandoms(12, 100000, 5000000),
          },
          {
            color: "#EB35AD",
            type: "line",
            name: "Cashback Total",
            data: generateArrayRandoms(12, 100000, 5000000),
          },
        ],
      },
    },
  },
  {
    title: "MAX",
    key: MAIN_FILTERS.max,
    pulseMode: true,
    graphicMode: true,
    filters: [
      { title: "Todos", key: "all" },
      { title: "Año 1", value: 1, key: "year_1" },
      { title: "Año 2", value: 2, key: "year_2" },
      { title: "Año 3", value: 3, key: "year_3" },
      { title: "Año 4", value: 4, key: "year_4" },
    ],
    graphicData: {
      labels: ["Año 1", "Año 2", "Año 3", "Año 4", "Año 5"],
      pulse: {
        series: [
          {
            color: "#2DCF5A",
            type: "bar",
            name: "Dia 1",
            data: [350000, 330000, 350000, 350000],
          },
          {
            color: "#358DEB",
            name: "Dia 10",
            type: "bar",
            data: [380000, 400000, 420000, 380000],
          },
          {
            color: "#EB7635",
            name: "Dia 20",
            type: "bar",
            data: [120000, 130000, 140000, 120000],
          },
          {
            name: "Cashback Acomulado",
            type: "line",
            color: "#7A35EB",
            data: [350000, 330000, 350000, 350000, 330000],
          },
        ],
      },
      graphic: {
        clientsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Clientes Nuevos",
            data: generateArrayRandoms(5, 100000, 200000),
          },
          {
            color: "#358DEB",
            type: "bar",
            name: "Compraron",
            data: generateArrayRandoms(5, 100000, 200000),
          },
        ],
        transactionsSeries: [
          {
            color: "#EB7635",
            type: "bar",
            name: "Transacciones",
            data: generateArrayRandoms(5, 100000, 5000000),
          },
        ],
        cashSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Dinero Total",
            data: generateArrayRandoms(5, 100000000, 5000000000),
          },
          {
            color: "#7A35EB",
            type: "line",
            name: "Ventas",
            data: generateArrayRandoms(5, 100000000, 5000000000),
          },
          {
            color: "#48454E",
            type: "line",
            name: "Devoluciones",
            data: generateArrayRandoms(5, 100000000, 5000000000),
          },
        ],
        cashbackSeries: [
          {
            color: "#EB7635",
            type: "line",
            name: "Cashback Generado",
            data: generateArrayRandoms(5, 100000000, 5000000000),
          },
          {
            color: "#358DEB",
            type: "line",
            name: "Cashback Acomulado",
            data: generateArrayRandoms(5, 100000000, 5000000000),
          },
          {
            color: "#EB35AD",
            type: "line",
            name: "Cashback Total",
            data: generateArrayRandoms(5, 100000000, 5000000000),
          },
        ],
      },
    },
  },
  // {
  //   title: (
  //     <div className="flex items-center gap-2">
  //       <InsertInvitationIcon /> <span>Personalizado</span>
  //     </div>
  //   ),
  //   key: MAIN_FILTERS.custom,
  //   pulseMode: true,
  //   graphicMode: true,
  // },
];
