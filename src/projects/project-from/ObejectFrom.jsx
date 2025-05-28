import React, { useCallback, useMemo, useState } from "react";
import "./ObejectForm.css";
import FormBuilder from "./OF-FormBuilder";
import JsonPreview from "./OF-JsonPreview";
import DataTable from "./OF-DataTable";

const ObejectForm = () => {
  const [dataKey, setDataKey] = useState("");
  const [dataValue, setDataValue] = useState("");
  const [dataBase, setDataBase] = useState([]);
  const [prevId, setPrevId] = useState(0);

  const handleSubmit = ({ dataKey, dataValue }) => {
    // 需要抓取key & value的值，導入至inputData
    console.log("handleSubmit render ...");
    // !
    if (dataKey !== "" && dataValue !== "") {
      const now = new Date();
      const dataDate = `${now.toLocaleString()}`;
      const newData = {
        ID: prevId,
        [dataKey]: dataValue,
        DataDate: dataDate,
      };
      setDataBase((prev) => [...prev, newData]);
      setPrevId((prev) => prev + 1);
      setDataKey("");
      setDataValue("");
    } else {
      // 重製input
      setDataKey("");
      setDataValue("");
    }
  };

  const memoizedJsonData = useMemo(() => dataBase, [dataBase]);
  return (
    <div className="obeject-from h-screen w-100 ">
      <div className=" grid grid-cols-2 gap-4 p-4 h-screen ">
        <div className="obeject-item bg-gray-400 text-white rounded-xl relative">
          {/* props 傳遞參數 */}
          <FormBuilder
            dataKey={dataKey}
            setDataKey={setDataKey}
            dataValue={dataValue}
            setDataValue={setDataValue}
            handleSubmit={handleSubmit}
          />
          <DataTable data={dataBase} setDataBase={setDataBase} />
        </div>
        <div className="obeject-item bg-gray-100 p-2 rounded-xl ">
          <JsonPreview jsonData={memoizedJsonData} />
        </div>
      </div>
    </div>
  );
};

export default ObejectForm;
