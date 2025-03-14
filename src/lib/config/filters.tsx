import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import {
  MAIN_FILTERS,
  WEEK_FILTERS,
  SIX_MONTH_FILTERS,
  YEAR_FILTERS,
} from "~/types/filters";

export const filterOptions = [
  { title: "HOY", key: MAIN_FILTERS.today },
  {
    title: "7D",
    key: MAIN_FILTERS.week,
    filters: [
      { title: "Lunes", key: WEEK_FILTERS.monday },
      { title: "Martes", key: WEEK_FILTERS.tuesday },
      { title: "Miércoles", key: WEEK_FILTERS.wednesday },
      { title: "Jueves", key: WEEK_FILTERS.thursday },
      { title: "Viernes", key: WEEK_FILTERS.friday },
      { title: "Sábado", key: WEEK_FILTERS.saturday },
      { title: "Domingo", key: WEEK_FILTERS.sunday },
    ],
  },
  { title: "1 MES", key: MAIN_FILTERS.month },
  {
    title: "6 MESES",
    key: MAIN_FILTERS.six_month,
    filters: [
      { title: "Todos", key: SIX_MONTH_FILTERS.all },
      { title: "MES 1", key: SIX_MONTH_FILTERS.month_1 },
      { title: "MES 2", key: SIX_MONTH_FILTERS.month_2 },
      { title: "MES 3", key: SIX_MONTH_FILTERS.month_3 },
      { title: "MES 4", key: SIX_MONTH_FILTERS.month_4 },
      { title: "MES 5", key: SIX_MONTH_FILTERS.month_5 },
      { title: "MES 6", key: SIX_MONTH_FILTERS.month_6 },
    ],
  },
  { title: "YTD/YTG", key: MAIN_FILTERS.ytd },
  {
    title: "1 AÑO",
    key: MAIN_FILTERS.year,
    filters: [
      { title: "Todos", key: YEAR_FILTERS.all },
      { title: "Enero", key: YEAR_FILTERS.january },
      { title: "Febrero", key: YEAR_FILTERS.february },
      { title: "Marzo", key: YEAR_FILTERS.march },
      { title: "Abril", key: YEAR_FILTERS.april },
      { title: "Mayo", key: YEAR_FILTERS.may },
      { title: "Junio", key: YEAR_FILTERS.june },
      { title: "Julio", key: YEAR_FILTERS.july },
      { title: "Agosto", key: YEAR_FILTERS.august },
      { title: "Septiembre", key: YEAR_FILTERS.september },
      { title: "Octubre", key: YEAR_FILTERS.october },
      { title: "Noviembre", key: YEAR_FILTERS.november },
      { title: "Diciembre", key: YEAR_FILTERS.december },
    ],
  },
  { title: "MAX", key: MAIN_FILTERS.max },
  {
    title: (
      <div className="flex items-center gap-2">
        <InsertInvitationIcon /> <span>Personalizado</span>
      </div>
    ),
    key: MAIN_FILTERS.custom,
  },
];
