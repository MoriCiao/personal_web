import { data } from "autoprefixer";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useReducer,
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
const SearchBtn = ({ searchTerm, searchData, dataKey }) => {
  const [isSearch, setIsSearch] = useState(false);
  const initailSearchList = [];
  // console.log("目前搜尋：" + searchTerm);
  function searchRudcer(state, action) {
    switch (action.type) {
      case "Filter_Name": {
        const filterName = searchData.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        console.log(filterName);

        return filterName;
      }
      case "Filter_Specifications": {
        const filterSpec = searchData.filter((item) =>
          item.Specifications.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(filterSpec);
        return filterSpec;
      }
      case "Filter_Type": {
        const filterType = searchData.filter((item) =>
          item.Type.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(filterType);
        return filterType;
      }
      case "Filter_Bigger_Price": {
        const filterPrice = searchData.filter(
          (item) => item.Price.slice(1, 6) > searchTerm
        );
        console.log(filterPrice);
        return filterPrice;
      }
      case "Filter_smaller_Price": {
        const filterPrice = searchData.filter(
          (item) => item.Price.slice(1, 6) < searchTerm
        );
        console.log(filterPrice);
        return filterPrice;
      }
      // case "Reset": {
      //   return state;
      // }

      default: {
        console.log("default");
        return state;
      }
    }
  }

  const [searchList, dispatch] = useReducer(searchRudcer, initailSearchList);

  useEffect(() => {
    // 將資料庫資料可以搜尋出來變成表格
    // useRudecer 多條件
    console.log(searchTerm);
  }, [searchTerm, searchData]);

  return (
    <div className="">
      {/* 搜尋視窗按鈕 */}
      <button
        className="bg-blue-900 text-white font-bold border-2 mx-1 px-2 rounded relative"
        onClick={() => setIsSearch(true)}
      >
        Search
      </button>
      {isSearch && (
        <div className="search-box fixed top-[25%] left-[5%] w-[90%] h-[70%] z-40 p-4 border-3 border-green-500 bg-yellow-100">
          <button
            className="bg-blue-900 text-white font-bold border-2 px-2 rounded absolute top-[0px] right-[0px]"
            onClick={() => setIsSearch(false)}
          >
            X
          </button>
          <div>
            <div>
              <div className="w-100 grid grid-cols-12 gap-2 items-center mb-2">
                <h1 className="col-start-1 col-span-4 px-3 text-[1.5rem] text-start">
                  搜尋內容：{searchTerm}
                </h1>
                <button
                  className="bg-yellow-400 text-black font-bold  col-start-7 col-span-1 border-4 rounded-md my-1"
                  onClick={() => dispatch({ type: "Filter_Name" })}
                >
                  Name
                </button>
                <button
                  className="bg-yellow-400 text-black font-bold  col-start-8 col-span-2 border-4 rounded-md my-1"
                  onClick={() => dispatch({ type: "Filter_Specifications" })}
                >
                  Specifications
                </button>
                <button
                  className="bg-yellow-400 text-black font-bold  col-start-10 col-span-1 border-4 rounded-md my-1"
                  onClick={() => dispatch({ type: "Filter_Type" })}
                >
                  Type
                </button>
                <button
                  className="bg-yellow-400 text-black font-bold  col-start-11 col-span-1 border-4 rounded-md my-1"
                  onClick={() => dispatch({ type: "Filter_Bigger_Price" })}
                >
                  <span>＞</span>Price
                </button>
                <button
                  className="bg-yellow-400 text-black font-bold  col-start-12 col-span-1 border-4 rounded-md my-1"
                  onClick={() => dispatch({ type: "Filter_smaller_Price" })}
                >
                  <span>＜</span>Price
                </button>
                {/* <button
                  className="bg-yellow-400 text-black font-bold  col-start-12 col-span-1 border-4 rounded-md my-1"
                  onClick={() => dispatch({ type: "Reset" })}
                >
                  Reset
                </button> */}
              </div>
              <table className="border text-center w-[100%]">
                <thead>
                  <tr>
                    <th className="w-[0.3rem]">id</th>
                    <th className="w-[10rem]">Name</th>
                    <th className="w-[10rem]">Specifications</th>
                    <th className="w-[0.8rem]">Type</th>
                    <th className="w-[0.8rem]">Price</th>
                    <th className="w-[5rem]">DataDate</th>
                  </tr>
                </thead>
                <tbody>
                  {searchList &&
                    searchList.map((d, index) => {
                      return (
                        <Fragment key={index}>
                          <tr>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.Specifications}</td>
                            <td>{d.Type}</td>
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
const RaiseBtn = ({ dataBase, setDataBase }) => {
  const raiseSort = () => {
    console.log("RaiseBtn render ...");
    const RaiseData = [...dataBase].sort((a, b) => a.Price - b.Price);
    console.log(RaiseData);
    setDataBase(RaiseData);
  };
  return (
    <button
      onClick={() => raiseSort()}
      className="bg-blue-900 text-white font-bold border-2 mx-2 rounded col-start-1 col-span-2"
    >
      A→Z
    </button>
  );
};

const DecreaseBtn = ({ dataBase, setDataBase }) => {
  const DecreaseSort = () => {
    console.log("RaiseBtn render ...");
    const DecreaseData = [...dataBase].sort((a, b) => b.Price - a.Price);
    console.log(DecreaseData);
    setDataBase(DecreaseData);
  };
  return (
    <button
      onClick={() => DecreaseSort()}
      className="bg-blue-900 text-white font-bold border-2 mx-2 rounded col-start-3 col-span-2"
    >
      Z→A
    </button>
  );
};

const ResetBtn = ({ dataBase, setDataBase }) => {
  const ResetSort = () => {
    console.log("ResetBtn render ...");
    const ResetData = [...dataBase].sort((a, b) => a.ID - b.ID);
    setDataBase(ResetData);
  };
  return (
    <button
      onClick={() => ResetSort()}
      className="bg-blue-900 text-white font-bold border-2 mx-2 rounded col-start-5 col-span-2"
    >
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
  setDataBase,
  handleSubmit,
  dataSelect,
  setDataSelect,
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
    <div className="form-builder m-auto p-4 sticky absolute top-0 bg-gray-300 z-2 text-black grid grid-cols-12 gap-4 items-center h-25">
      <h1 className="text-[1rem] text-center absolute top-2 right-4">
        FormBuilder
      </h1>
      <div className="col-start-1 col-span-6 ">
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
          <section className="input-area rounded-md mx-2 col-start-2 col-span-4 grid grid-cols-2 gap-1">
            <input
              className="input-data h-[2rem] bg-gray-200 text-black w-100 rounded-md border border-black"
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
              className="input-data h-[2rem] bg-gray-200 text-black w-100 rounded-md border border-black"
              type="text"
              placeholder="Specifications..."
              ref={valueRef}
              value={dataValue}
              required
              onChange={(e) => {
                setDataValue(e.target.value);
              }}
            />
            <select
              className="w-100 h-[2rem] rounded-md border border-black mt-1 bg-gray-200 text-gray-400"
              name=""
              id="dataSelect"
              value={dataSelect}
              onChange={(e) => {
                setDataSelect(e.target.value);
              }}
            >
              <option value="">Select ...</option>
              <option className="text-black" value="Type-1">
                Type-1
              </option>
              <option className="text-black" value="Type-2">
                Type-2
              </option>
              <option className="text-black" value="Type-3">
                Type-3
              </option>
              <option className="text-black" value="Type-4">
                Type-4
              </option>
              <option className="text-black" value="Type-5">
                Type-5
              </option>
            </select>
            <input
              className="input-data h-[2rem] bg-gray-200 text-black w-100 mt-1 rounded-md border border-black"
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
      <div className="col-start-7 col-span-2 flex relative">
        <input
          type="text"
          placeholder=" 請輸入要查詢的值 ..."
          className="rounded-md"
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
      <div className="col-start-10 col-span-3 grid grid-cols-6 h-[2rem]">
        <RaiseBtn dataBase={dataBase} setDataBase={setDataBase} />
        <DecreaseBtn dataBase={dataBase} setDataBase={setDataBase} />
        <ResetBtn dataBase={dataBase} setDataBase={setDataBase} />
      </div>
    </div>
  );
};

export default FormBuilder;
