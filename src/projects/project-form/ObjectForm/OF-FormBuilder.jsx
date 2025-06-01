import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });
const SubmitBtn = ({ onClick }) => {
  return (
    <button
      type="submit"
      className={`bg-blue-900 text-white font-bold border-2 mx-2 px-2 rounded 
        col-start-6 col-span-2
      `}
      onClick={onClick}
    >
      Submit
    </button>
  );
};
const SearchBtn = ({ searchTerm, searchData }) => {
  const [isSearch, setIsSearch] = useState(false);
  console.log("目前搜尋：" + { searchTerm });

  return (
    <div>
      {/* 搜尋視窗按鈕 */}
      <button
        className="bg-blue-900 text-white font-bold border-2 mx-2 px-2 rounded relative"
        onClick={() => setIsSearch(true)}
      >
        Search
      </button>
      {isSearch && (
        <div className="search-box fixed top-[25%] left-[5%] w-[90%] h-[70%] z-40 p-4 border-3 border-green-500 bg-yellow-100 ">
          <button
            className="bg-blue-900 text-white font-bold border-2 px-2 rounded absolute top-[0px] right-[0px]"
            onClick={() => setIsSearch(false)}
          >
            X
          </button>
          <div>
            <div>
              <table className="border text-center w-[100%]">
                <caption className="text-start px-3 text-[1.5rem]">
                  搜尋內容：{searchTerm}
                </caption>
                <thead>
                  <tr>
                    <th className="w-[0.3rem]">id</th>
                    <th className="w-[10rem]">Name</th>
                    <th className="w-[10rem]">Specifications</th>
                    <th className="w-[0.8rem]">Price</th>
                    <th className="w-[5rem]">DataDate</th>
                  </tr>
                </thead>
                <tbody>
                  {searchData &&
                    searchData.map((d, index) => {
                      return (
                        <Fragment key={index}>
                          <tr>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.Specifications}</td>
                            <td>{d.Price}</td>
                            <td>{d["Date of manufacture"]}</td>
                          </tr>
                        </Fragment>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const RaiseBtn = () => {
  return (
    <button className="bg-blue-900 text-white font-bold border-2 mx-2 rounded col-start-1 col-span-2">
      A→Z
    </button>
  );
};

const DecreaseBtn = () => {
  return (
    <button className="bg-blue-900 text-white font-bold border-2 mx-2 rounded col-start-3 col-span-2">
      Z→A
    </button>
  );
};

const ResetBtn = () => {
  return (
    <button className="bg-blue-900 text-white font-bold border-2 mx-2 rounded col-start-5 col-span-2">
      Reset
    </button>
  );
};

const FormBuilder = ({
  dataKey,
  setDataKey,
  dataValue,
  setDataValue,
  dataPrice,
  setDataPrice,
  dataBase,
  handleSubmit,
}) => {
  console.log("FormBuilder render ...");
  const keyRef = useRef(null);
  const valueRef = useRef(null);
  const priceRef = useRef(null);
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchValueRef = useRef(null);

  useEffect(() => {
    keyRef.current.focus();
    // 加載預設的資料
    const fatchJsonDat = async () => {
      console.log("加載資料中....");
      try {
        const res = await fetch("/project-objectFrom/fake_products.json");
        const data = await res.json();
        setSearchData(data);
      } catch (e) {
        console.log(e);
      } finally {
        console.log("載入完畢...");
      }
    };
    fatchJsonDat();
  }, []);

  useEffect(() => {
    console.log(`SerachData資料更`);
  }, []);

  return (
    <div className="form-builder m-auto p-4 sticky absolute top-0 bg-gray-300 z-2 text-black grid grid-cols-12 gap-4 items-center">
      <h1 className="text-[1rem] text-center absolute top-2 right-4">
        FormBuilder
      </h1>
      <div className="col-start-1 col-span-4">
        <form
          className="flex h-[3.5rem] items-center justify-center mt-2 grid grid-cols-7"
          action=""
          // 注意事項, 可防止按 Enter 自動刷新頁面
          onSubmit={(e) => {
            e.preventDefault();
            // 連動 Enter
            handleSubmit({ dataKey, dataValue });
            // 資料輸入進 database後，自動導向 inputkey
            keyRef.current.focus();
          }}
        >
          <section className="px-1 col-start-1 col-span-1">
            <label htmlFor="" className="">
              新增資料
            </label>
          </section>
          <section className="input-area rounded-md mx-2 col-start-2 col-span-4">
            <input
              className="input-data bg-gray-200 text-black w-100 rounded-md border border-black"
              type="text"
              placeholder="Name..."
              ref={keyRef}
              value={dataKey}
              required
              onChange={(e) => {
                setDataKey(e.target.value);
              }}
            />
            <input
              className="input-data bg-gray-200 text-black w-100 mt-1 rounded-md border border-black"
              type="text"
              placeholder="Specifications..."
              ref={valueRef}
              value={dataValue}
              required
              onChange={(e) => {
                setDataValue(e.target.value);
              }}
            />
            <input
              className="input-data bg-gray-200 text-black w-100 mt-1 rounded-md border border-black"
              type="number"
              placeholder="Price..."
              ref={priceRef}
              value={dataPrice}
              required
              onChange={(e) => {
                setDataPrice(e.target.value);
              }}
            />
          </section>
          <SubmitBtn />
        </form>
      </div>
      <div className="col-start-5 col-span-4">
        <input
          type="text"
          placeholder=" 請輸入要查詢的值 ..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <SearchBtn
          searchTerm={searchTerm}
          searchData={searchData}
          searchValueRef={searchValueRef}
        />
      </div>
      <div className="col-start-9 col-span-3 grid grid-cols-6 h-[2rem]">
        <RaiseBtn />
        <DecreaseBtn />
        <ResetBtn />
      </div>
    </div>
  );
};

export default FormBuilder;
