import Card from "./TableComponents/Card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { useMemo } from "react";

const ComplexTable = (props) => {
  const { columnsData, tableData, title, pnl } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 100;

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-black">
          {title}
        </div>
        <div className={` font-semibold ${pnl >= 0 ? "text-green-500" : "text-red-500"}`}>{pnl}</div>
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-hidden custom-scrollbar">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps()}
                    key={index}
                    className="border-b border-gray-200  pb-[10px] text-start  dark:!border-navy-700"
                    style={{ minWidth: '60px' }} // Adjust the min-width as needed
                  >
                    <p className="text-[10px] tracking-wide text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    // Check if the cell corresponds to 'currentPnl' column
                    if (cell.column.id === 'currentPnl') {
                      return (
                        <td
                          className="pt-[10px] pb-[10px] sm:text-[10px] "
                          {...cell.getCellProps()}
                          key={index}
                          style={{ minWidth: '60px' }} // Adjust the min-width as needed
                        >
                          <p className={` font-semibold ${cell.value >= 0 ? "text-green-500" : "text-red-500"}`}>
                            {cell.value}
                          </p>
                        </td>
                      );
                    } else {
                      return (
                        <td
                          className="pt-[10px] pb-[10px] sm:text-[10px] text-black"
                          {...cell.getCellProps()}
                          key={index}
                          style={{ minWidth: '60px' }} // Adjust the min-width as needed
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ComplexTable;
