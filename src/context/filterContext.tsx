import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FilterOptions, filterOptions } from "~/lib/config/filters";
import { Series } from "~/types/chart.types";
import { MAIN_FILTERS } from "~/types/filters";

export type GraphicMode = "graphic" | "pulse";
export type GraphicOptionOne = "clients" | "transactions";
export type GraphicOptionTwo = "cash" | "cashback";

type ContextProps = {
  filter: string;
  mode?: GraphicMode;
  series?: Series[];
  labels?: string[];
  subFilter: string;
  subFilterData?: Series[];
  subFilterLabel?: string[];
  currrentGraphicOpt?: FilterOptions;
  grapichOptionOne?: GraphicOptionOne;
  grapichOptionTwo?: GraphicOptionTwo;
  setGrapichOptionOne?: Dispatch<SetStateAction<GraphicOptionOne>>;
  setGrapichOptionTwo?: Dispatch<SetStateAction<GraphicOptionTwo | undefined>>;
  setSeries?: Dispatch<SetStateAction<Series[]>>;
  setMode: Dispatch<SetStateAction<GraphicMode>>;
  setFilter: Dispatch<SetStateAction<string>>;
  setSubFilter: Dispatch<SetStateAction<string>>;
};

const FilterContext = createContext<ContextProps | null>(null);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<string>(MAIN_FILTERS.today);
  const [currrentGraphicOpt, setCurrentGraphicOpt] = useState<FilterOptions>();
  const [graphicOptOne, setGraphicOptOne] =
    useState<GraphicOptionOne>("clients");
  const [graphicOptTwo, setGraphicOptTwo] = useState<GraphicOptionTwo>();
  const [series, setSeries] = useState<Series[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [mode, setMode] = useState<GraphicMode>("graphic");
  const [subFilter, setSubFilter] = useState<string>("");

  const currentSubFilterValue =
    currrentGraphicOpt?.filters?.find((f) => f.key === subFilter)?.value ||
    null;

  const { subFilterData, subFilterLabel } = useMemo(() => {
    if (!subFilter || subFilter === "all" || currentSubFilterValue === null) {
      return { subFilterData: [], subFilterLabel: [] };
    }

    const subFilterData = series.map((s) => {
      const dataPoint = s.data[currentSubFilterValue - 1]; // Obtener el índice exacto
      return {
        ...s,
        data: dataPoint ? [dataPoint] : [],
      };
    });

    const subFilterLabel = labels[currentSubFilterValue - 1] || "";

    return { subFilterData, subFilterLabel: [subFilterLabel] };
  }, [currentSubFilterValue, subFilter, filter, series, labels]);

  useMemo(() => {
    filterOptions.forEach((option) => {
      if (option.key === filter) {
        setCurrentGraphicOpt(option);
      }
    });
  }, [filter, mode]);

  useMemo(() => {
    if (!currrentGraphicOpt) return;
    const { graphicData } = currrentGraphicOpt;
    if (graphicData) {
      // select graphic series
      if (mode === "graphic") {
        setLabels(graphicData.labels || []);
        const { graphic } = graphicData;

        if (graphicOptOne === "clients")
          setSeries(graphic?.clientsSeries || []);
        if (graphicOptOne === "transactions")
          setSeries(graphic?.transactionsSeries || []);
        if (graphicOptTwo === "cash")
          setSeries((prev) =>
            graphicData.graphic?.cashSeries
              ? [...prev, ...graphicData.graphic?.cashSeries]
              : prev,
          );
        if (graphicOptTwo === "cashback")
          setSeries((prev) =>
            graphicData.graphic?.cashSeries
              ? [...prev, ...graphicData.graphic?.cashbackSeries]
              : prev,
          );
        return;
      }
      // select pulse series
      setLabels(graphicData.labels || []);
      setSeries(graphicData.pulse?.series || []);
    }
  }, [currrentGraphicOpt, mode, graphicOptOne, graphicOptTwo]);

  useEffect(() => {
    setSubFilter("");
  }, [filter]);

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        subFilter,
        setSubFilter,
        mode,
        setMode,
        currrentGraphicOpt,
        setGrapichOptionOne: setGraphicOptOne,
        setGrapichOptionTwo: setGraphicOptTwo,
        grapichOptionOne: graphicOptOne,
        grapichOptionTwo: graphicOptTwo,
        labels: subFilterLabel.length > 0 ? subFilterLabel : labels,
        series: subFilterData.length > 0 ? subFilterData : series,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const filterContext = useContext(FilterContext);
  if (!filterContext) {
    throw new Error("Require Provider");
  }
  return filterContext;
};
