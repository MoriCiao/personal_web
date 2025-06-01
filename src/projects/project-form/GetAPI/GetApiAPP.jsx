import React, { useEffect, useState } from "react";

const GetApiAPP = () => {
  const [produsts, setProdusts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData 嘗試請求資料匯入...");
      try {
        const res = await fetch("/project-objectFrom/fake_products.json");
        const data = await res.json();
        setProdusts(data);
        console.log(Object.keys(data[0]));
      } catch (error) {
        console.log(`Something Wrong !! ${error}`);
      } finally {
        console.log("FatchData 已結束 ...");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {produsts &&
        produsts.map((p, index) => {
          return (
            <div
              key={index}
              className="border border-3 border-black text-start"
            >
              <p>品名：{p.name}</p>
              <p>規格：{p.Specifications}</p>
              <p>價格：{p.Price}</p>
              <p>製造日期：{p["Date of manufacture"]}</p>
            </div>
          );
        })}
    </div>
  );
};

export default GetApiAPP;
