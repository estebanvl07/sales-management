import { Button } from "@heroui/react";
import clsx from "clsx";
import React from "react";
import { useFilterContext } from "~/context/filterContext";
import { useResize } from "~/hooks/useResize";

const GraphicOptions = () => {
  const {
    setGrapichOptionOne,
    setGrapichOptionTwo,
    grapichOptionOne,
    grapichOptionTwo,
  } = useFilterContext();

  const { isMobile } = useResize();

  return (
    <div className="flex items-center justify-between gap-4">
      <aside className="flex items-center gap-2">
        <Button
          className={clsx({
            "bg-primary text-white": grapichOptionOne === "clients",
          })}
          size={isMobile ? "sm" : "md"}
          onPress={() => setGrapichOptionOne && setGrapichOptionOne("clients")}
        >
          Clientes
        </Button>
        <Button
          className={clsx({
            "bg-primary text-white": grapichOptionOne === "transactions",
          })}
          size={isMobile ? "sm" : "md"}
          onPress={() =>
            setGrapichOptionOne && setGrapichOptionOne("transactions")
          }
        >
          Transacciones
        </Button>
      </aside>
      <aside className="flex items-center gap-2">
        <Button
          className={clsx({
            "bg-primary text-white": grapichOptionTwo === "cash",
          })}
          size={isMobile ? "sm" : "md"}
          onPress={() =>
            setGrapichOptionTwo &&
            setGrapichOptionTwo((prev) =>
              prev !== "cash" ? "cash" : undefined,
            )
          }
        >
          Cash
        </Button>
        <Button
          className={clsx({
            "bg-primary text-white": grapichOptionTwo === "cashback",
          })}
          size={isMobile ? "sm" : "md"}
          onPress={() =>
            setGrapichOptionTwo &&
            setGrapichOptionTwo((prev) =>
              prev !== "cashback" ? "cashback" : undefined,
            )
          }
        >
          Cashback
        </Button>
      </aside>
    </div>
  );
};

export default GraphicOptions;
