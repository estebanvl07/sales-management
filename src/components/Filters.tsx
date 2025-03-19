import { Tab, Tabs } from "@heroui/tabs";
import React from "react";
import { useFilterContext } from "~/context/filterContext";
import { filterOptions } from "~/lib/config/filters";

const Filters = () => {
  const { filter, subFilter, setFilter, setSubFilter, mode } =
    useFilterContext();

  return (
    <Tabs
      radius="full"
      variant="bordered"
      color="primary"
      classNames={{
        tabList: "max-w-[15rem] sm:max-w-full",
      }}
      defaultSelectedKey={undefined}
      onSelectionChange={(key) => setFilter(key as string)}
    >
      {filterOptions.map((option) => {
        if (mode === "pulse") {
          if (!option.pulseMode) return null;
          return (
            <Tab key={option.key} title={option.title}>
              {option.filters && (
                <Tabs
                  radius="full"
                  classNames={{
                    tabList: " max-w-[16rem] sm:max-w-[42rem]",
                  }}
                  variant="bordered"
                  onSelectionChange={(key) => setSubFilter(key as string)}
                  color="primary"
                >
                  {option.filters?.map(({ key, title }) => (
                    <Tab key={key} title={title}></Tab>
                  ))}
                </Tabs>
              )}
            </Tab>
          );
        }
        if (!option.graphicMode) return null;
        return (
          <Tab key={option.key} title={option.title}>
            {option.filters && (
              <Tabs
                radius="full"
                classNames={{
                  tabList: " max-w-[16rem] sm:max-w-[42rem]",
                }}
                variant="bordered"
                onSelectionChange={(key) => setSubFilter(key as string)}
                color="primary"
              >
                {option.filters?.map(({ key, title }) => (
                  <Tab key={key} title={title}></Tab>
                ))}
              </Tabs>
            )}
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default Filters;
