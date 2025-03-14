import React, { Key } from "react";
import Paper from "@mui/material/Paper";
import TableLayout from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import type { TableProps } from "./type";

const Table = <T,>({
  columns,
  data,
  headerConfig,
  isLoading,
  hasTopContent,
  maxWidth,
}: TableProps<T>) => {
  const getValueKey = (item: any, key: string) => {
    return item[key] || "";
  };

  return (
    <TableContainer
      className="!rounded-xl border !bg-content3 pt-3 !shadow-sm"
      component={Paper}
    >
      {hasTopContent && headerConfig.title && (
        <h2 className="text-center text-sm font-semibold">
          {headerConfig.title}
        </h2>
      )}
      <TableLayout sx={{ maxWidth }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                align="center"
                className="!border-zinc-300"
                key={col.uid}
              >
                <span className="whitespace-nowrap">{col.name}</span>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: any, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {columns.map(({ uid }, index) => (
                <TableCell
                  key={index}
                  className="!border-none !py-3"
                  align="center"
                >
                  {getValueKey(item, uid)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableLayout>
    </TableContainer>
  );
};

export default Table;
