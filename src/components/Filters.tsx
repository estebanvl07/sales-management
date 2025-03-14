import { Tab, Tabs } from "@heroui/tabs";
import React from "react";
import { filterOptions } from "~/lib/config/filters";

const Filters = () => {
  return (
    <Tabs radius="full" variant="bordered" color="primary">
      {filterOptions.map((option) => (
        <Tab key={option.key} title={option.title}>
          {option.filters && (
            <Tabs radius="full" variant="bordered" color="primary">
              {option.filters?.map(({ key, title }) => (
                <Tab key={key} title={title}></Tab>
              ))}
            </Tabs>
          )}
        </Tab>
      ))}
    </Tabs>
  );
};

export default Filters;
