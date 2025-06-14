import React, { Fragment, useCallback } from "react";

const DataTable = ({ data, setDataBase }) => {
  // console.log("DataTable render ...");
  // console.log(JSON.stringify(data, null, 2));

  const handleDelete = useCallback(
    (id) => {
      console.log("Click");

      setDataBase((prev) => prev.filter((item) => item.ID !== id));
    },
    [setDataBase]
  );

  return (
    <div className="data-table">
      <div className="table-container">
        <table className="border text-center w-[100%]">
          <caption className="text-center text-[1.5rem]">DataTable</caption>
          <thead>
            <tr>
              <th className="w-[0.3rem]">id</th>
              <th className="w-[10rem]">Name</th>
              <th className="w-[10rem]">Specifications</th>
              <th className="w-[10rem]">Type</th>
              <th className="w-[0.8rem]">Price</th>
              <th className="w-[5rem]">DataDate</th>
              <th className="w-[0.5rem]">Del</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((d, index) => {
                const keyName = Object.keys(d).filter(
                  (key) => key !== "ID" && key !== "DataDate"
                )[0];
                return (
                  <Fragment key={index}>
                    <tr className="">
                      <td>{d.ID}</td>
                      <td>{keyName}</td>
                      <td>{d[keyName]}</td>
                      <td>{d.type}</td>
                      <td>{d.Price}</td>
                      <td>{d.DataDate}</td>
                      <td>
                        <button
                          className=" rounded-md p-1 bg-red-500 text-white w-100"
                          onClick={() => handleDelete(d.ID)}
                        >
                          Del
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
