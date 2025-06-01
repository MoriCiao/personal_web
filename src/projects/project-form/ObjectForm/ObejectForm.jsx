import React, { useCallback, useEffect, useMemo, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import "./ObejectForm.css";
import FormBuilder from "./OF-FormBuilder";
import JsonPreview from "./OF-JsonPreview";
import DataTable from "./OF-DataTable";

const ObejectForm = () => {
  const [dataKey, setDataKey] = useState("");
  const [dataValue, setDataValue] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBase, setDataBase] = useState([]);
  const [prevId, setPrevId] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = ({ dataKey, dataValue }) => {
    // 需要抓取key & value & price的值，導入至inputData
    console.log("handleSubmit render ...");
    // !
    if (dataKey !== "" && dataValue !== "") {
      const now = new Date();
      const dataDate = `${now.getFullYear()}/ ${
        now.getMonth() + 1
      }/ ${now.getDate()}`;
      const newData = {
        ID: prevId,
        [dataKey]: dataValue,
        Price: `${dataPrice}`,
        DataDate: `${dataDate}`,
      };
      setDataBase((prev) => [...prev, newData]);
      setPrevId((prev) => prev + 1);
      setDataKey("");
      setDataValue("");
      setDataPrice("");
    } else {
      // 重製input
      setDataKey("");
      setDataValue("");
      setDataPrice("");
    }
  };
  useEffect(() => {
    localStorage.setItem("my-data", dataBase);
  }, [dataBase]);
  const memoizedJsonData = useMemo(() => dataBase, [dataBase]);
  return (
    <div className="obeject-from h-screen w-100  relative">
      <motion.button
        whileTap={{
          x: [0, 3, 0],
          y: [0, 3, 0],
          transition: { duration: 0.5, ease: easeInOut },
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="Open-Btn text-white border-b-2 border-r-2 border-gray-900 px-2 py-1 rounded bg-gray-500 fixed z-10 right-4 top-4"
      >
        JsonData
      </motion.button>
      <div className={`grid gap-4 p-4 h-screen `}>
        <div className="obeject-item col-start-1 col-span-3 bg-gray-400 text-white rounded-xl relative">
          {/* props 傳遞參數 */}
          <FormBuilder
            dataKey={dataKey}
            setDataKey={setDataKey}
            dataValue={dataValue}
            setDataValue={setDataValue}
            dataPrice={dataPrice}
            setDataPrice={setDataPrice}
            handleSubmit={handleSubmit}
            dataBase={dataBase}
            setDataBase={setDataBase}
          />
          <DataTable data={dataBase} setDataBase={setDataBase} />
        </div>

        <motion.div
          className={`obeject-item col-start-4 col-span-2 bg-gray-400 p-2 rounded-xl absolute z-50 top-4  right-4 
        ${isOpen ? "opacity-50" : "hidden opacity-0"}`}
          whileHover={{ opacity: 1 }}
        >
          <JsonPreview jsonData={memoizedJsonData} />
        </motion.div>
      </div>
    </div>
  );
};

export default ObejectForm;
