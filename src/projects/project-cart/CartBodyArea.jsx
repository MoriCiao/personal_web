import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import CartHeader from "./CartHeaderArea";
import CartMain from "./ProductPage";
import Light from "./LightSwitch.jsx";
import CartTopArea from "./CartTopArea.jsx";

export const ThemeContext = createContext();

const CartBody = () => {
  const ThemeProvider = ({ children }) => {
    // 第一類商品
    // const fruit = [
    //   { id: 1, name: "🍎 Apple - 蘋果香甜可口", price: 30 },
    //   { id: 2, name: "🍌 Banana - 補充能量的好選擇", price: 20 },
    //   { id: 3, name: "🍇 Grape - 多汁紫葡萄", price: 40 },
    //   { id: 4, name: "🍓 Strawberry - 少女最愛草莓", price: 35 },
    //   { id: 5, name: "🍍 Pineapple - 酸酸甜甜鳳梨", price: 45 },
    //   { id: 6, name: "🥝 Kiwi - 綠色營養炸彈", price: 28 },
    //   { id: 7, name: "🍒 Cherry - 小巧迷你櫻桃", price: 50 },
    //   { id: 8, name: "🍉 Watermelon - 夏日西瓜", price: 60 },
    //   { id: 9, name: "🍑 Peach - 蜜桃嫩嫩", price: 33 },
    //   { id: 10, name: "🍋 Lemon - 酸溜溜檸檬", price: 25 },
    //   { id: 11, name: "🥭 Mango - 熱帶芒果", price: 38 },
    //   { id: 12, name: "🥥 Coconut - 清爽椰子", price: 55 },
    //   { id: 13, name: "🍈 Melon - 蜜瓜來一片", price: 42 },
    //   { id: 14, name: "🍅 Tomato - 番茄其實是水果！", price: 18 },
    //   { id: 15, name: "🥬 Lettuce - 生菜清脆", price: 15 },
    //   { id: 16, name: "🥦 Broccoli - 健康花椰菜", price: 22 },
    //   { id: 17, name: "🥒 Cucumber - 解渴小黃瓜", price: 16 },
    //   { id: 18, name: "🌽 Corn - 黃金玉米棒", price: 24 },
    //   { id: 19, name: "🥕 Carrot - 小兔子最愛", price: 19 },
    //   { id: 20, name: "🧄 Garlic - 香味爆棚大蒜", price: 12 },
    //   { id: 21, name: "🧅 Onion - 洋蔥催淚彈", price: 14 },
    //   { id: 22, name: "🥔 Potato - 萬用馬鈴薯", price: 17 },
    //   { id: 23, name: "🍠 Sweet Potato - 地瓜溫暖心", price: 20 },
    //   { id: 24, name: "🥑 Avocado - 網美最愛酪梨", price: 48 },
    //   { id: 25, name: "🌶️ Chili - 辣椒讓你熱血", price: 10 },
    //   { id: 26, name: "🫑 Bell Pepper - 彩椒繽紛", price: 21 },
    //   { id: 27, name: "🥜 Peanut - 花生香脆", price: 15 },
    //   { id: 28, name: "🌰 Chestnut - 冬天剝剝剝", price: 18 },
    //   { id: 29, name: "🍄 Mushroom - 森林小菇", price: 23 },
    //   { id: 30, name: "🫒 Olive - 地中海橄欖", price: 26 },
    // ];
    // // 第二類商品
    // const daily = [
    //   { id: 31, name: "🧻 Toilet Paper - 柔軟三層紙", price: 35 },
    //   { id: 32, name: "🪥 Toothbrush - 牙齒清潔靠它", price: 20 },
    //   { id: 33, name: "🧼 Soap - 古早味香皂", price: 15 },
    //   { id: 34, name: "🧴 Shampoo - 洗髮精順順的", price: 45 },
    //   { id: 35, name: "🪒 Razor - 刮鬍乾淨俐落", price: 38 },
    //   { id: 36, name: "🧽 Sponge - 洗碗小幫手", price: 12 },
    //   { id: 37, name: "🪑 Chair - 居家簡約椅", price: 160 },
    //   { id: 38, name: "🛏️ Bed - 一覺好眠", price: 480 },
    //   { id: 39, name: "🧯 Fire Extinguisher - 滅火器備用", price: 300 },
    //   { id: 40, name: "🧃 Juice Box - 吸一口果汁", price: 25 },
    //   { id: 41, name: "🧵 Thread - 補衣小工具", price: 8 },
    //   { id: 42, name: "🪡 Needle - 裁縫專用", price: 5 },
    //   { id: 43, name: "🪞 Mirror - 照出你的帥氣", price: 45 },
    //   { id: 44, name: "🧺 Laundry Basket - 衣服收一收", price: 60 },
    //   { id: 45, name: "🧹 Broom - 掃地神器", price: 28 },
    //   { id: 46, name: "🪠 Plunger - 馬桶救星", price: 33 },
    //   { id: 47, name: "🧯 Fire Extinguisher - 安全第一", price: 300 },
    //   { id: 48, name: "🧂 Salt - 調味基本款", price: 10 },
    //   { id: 49, name: "🪤 Mousetrap - 居家守護者", price: 20 },
    //   { id: 50, name: "🪟 Window Cleaner - 擦窗神器", price: 25 },
    //   { id: 51, name: "🧊 Ice Tray - 製冰好幫手", price: 18 },
    //   { id: 52, name: "🪣 Bucket - 提水提心", price: 30 },
    //   { id: 53, name: "🧯 Fire Blanket - 火場救命布", price: 150 },
    //   { id: 54, name: "🧦 Socks - 溫暖你雙腳", price: 22 },
    //   { id: 55, name: "👕 T-shirt - 居家短T", price: 80 },
    //   { id: 56, name: "👖 Jeans - 牛仔褲耐穿", price: 120 },
    //   { id: 57, name: "👜 Bag - 日常背包", price: 90 },
    //   { id: 58, name: "🧢 Cap - 帽子遮陽又時尚", price: 60 },
    //   { id: 59, name: "🧤 Gloves - 冬日保暖", price: 35 },
    //   { id: 60, name: "🧳 Luggage - 小旅行必備", price: 240 },
    // ];
    const fruit = [
      {
        id: 1,
        name: "🍎 Apple - 蘋果香甜可口",
        price: 30,
        sort: "fruit 水果 吃的",
      },
      {
        id: 2,
        name: "🍌 Banana - 補充能量的好選擇",
        price: 20,
        sort: "fruit 水果 吃的",
      },
      {
        id: 3,
        name: "🍇 Grape - 多汁紫葡萄",
        price: 40,
        sort: "fruit 水果 吃的",
      },
      {
        id: 4,
        name: "🍓 Strawberry - 少女最愛草莓",
        price: 35,
        sort: "fruit 水果 吃的",
      },
      {
        id: 5,
        name: "🍍 Pineapple - 酸酸甜甜鳳梨",
        price: 45,
        sort: "fruit 水果 吃的",
      },
      {
        id: 6,
        name: "🥝 Kiwi - 綠色營養炸彈",
        price: 28,
        sort: "fruit 水果 吃的",
      },
      {
        id: 7,
        name: "🍒 Cherry - 小巧迷你櫻桃",
        price: 50,
        sort: "fruit 水果 吃的",
      },
      {
        id: 8,
        name: "🍉 Watermelon - 夏日西瓜",
        price: 60,
        sort: "fruit 水果 吃的",
      },
      {
        id: 9,
        name: "🍑 Peach - 蜜桃嫩嫩",
        price: 33,
        sort: "fruit 水果 吃的",
      },
      {
        id: 10,
        name: "🍋 Lemon - 酸溜溜檸檬",
        price: 25,
        sort: "fruit 水果 吃的",
      },
      {
        id: 11,
        name: "🥭 Mango - 熱帶芒果",
        price: 38,
        sort: "fruit 水果 吃的",
      },
      {
        id: 12,
        name: "🥥 Coconut - 清爽椰子",
        price: 55,
        sort: "fruit 水果 吃的",
      },
      {
        id: 13,
        name: "🍈 Melon - 蜜瓜來一片",
        price: 42,
        sort: "fruit 水果 吃的",
      },
      {
        id: 14,
        name: "🍅 Tomato - 番茄其實是水果！",
        price: 18,
        sort: "fruit 水果 吃的",
      },
      {
        id: 15,
        name: "🥬 Lettuce - 生菜清脆",
        price: 15,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 16,
        name: "🥦 Broccoli - 健康花椰菜",
        price: 22,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 17,
        name: "🥒 Cucumber - 解渴小黃瓜",
        price: 16,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 18,
        name: "🌽 Corn - 黃金玉米棒",
        price: 24,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 19,
        name: "🥕 Carrot - 小兔子最愛",
        price: 19,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 20,
        name: "🧄 Garlic - 香味爆棚大蒜",
        price: 12,
        sort: "vegetable 蔬菜 調味",
      },
      {
        id: 21,
        name: "🧅 Onion - 洋蔥催淚彈",
        price: 14,
        sort: "vegetable 蔬菜 調味",
      },
      {
        id: 22,
        name: "🥔 Potato - 萬用馬鈴薯",
        price: 17,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 23,
        name: "🍠 Sweet Potato - 地瓜溫暖心",
        price: 20,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 24,
        name: "🥑 Avocado - 網美最愛酪梨",
        price: 48,
        sort: "fruit 水果 吃的",
      },
      {
        id: 25,
        name: "🌶️ Chili - 辣椒讓你熱血",
        price: 10,
        sort: "vegetable 蔬菜 調味",
      },
      {
        id: 26,
        name: "🫑 Bell Pepper - 彩椒繽紛",
        price: 21,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 27,
        name: "🥜 Peanut - 花生香脆",
        price: 15,
        sort: "nut 堅果 零食",
      },
      {
        id: 28,
        name: "🌰 Chestnut - 冬天剝剝剝",
        price: 18,
        sort: "nut 堅果 零食",
      },
      {
        id: 29,
        name: "🍄 Mushroom - 森林小菇",
        price: 23,
        sort: "vegetable 菇類 吃的",
      },
      {
        id: 30,
        name: "🫒 Olive - 地中海橄欖",
        price: 26,
        sort: "fruit 水果 調味",
      },
    ];

    const daily = [
      {
        id: 31,
        name: "🧻 Toilet Paper - 柔軟三層紙",
        price: 35,
        sort: "daily 日用品 清潔",
      },
      {
        id: 32,
        name: "🪥 Toothbrush - 牙齒清潔靠它",
        price: 20,
        sort: "daily 日用品 清潔",
      },
      {
        id: 33,
        name: "🧼 Soap - 古早味香皂",
        price: 15,
        sort: "daily 日用品 清潔",
      },
      {
        id: 34,
        name: "🧴 Shampoo - 洗髮精順順的",
        price: 45,
        sort: "daily 日用品 清潔",
      },
      {
        id: 35,
        name: "🪒 Razor - 刮鬍乾淨俐落",
        price: 38,
        sort: "daily 日用品 個人護理",
      },
      {
        id: 36,
        name: "🧽 Sponge - 洗碗小幫手",
        price: 12,
        sort: "daily 日用品 廚房",
      },
      {
        id: 37,
        name: "🪑 Chair - 居家簡約椅",
        price: 160,
        sort: "daily 家具 生活",
      },
      {
        id: 38,
        name: "🛏️ Bed - 一覺好眠",
        price: 480,
        sort: "daily 家具 生活",
      },
      {
        id: 39,
        name: "🧯 Fire Extinguisher - 滅火器備用",
        price: 300,
        sort: "daily 安全 防火",
      },
      {
        id: 40,
        name: "🧃 Juice Box - 吸一口果汁",
        price: 25,
        sort: "daily 飲品 食物",
      },
      {
        id: 41,
        name: "🧵 Thread - 補衣小工具",
        price: 8,
        sort: "daily 手作 裁縫",
      },
      {
        id: 42,
        name: "🪡 Needle - 裁縫專用",
        price: 5,
        sort: "daily 手作 裁縫",
      },
      {
        id: 43,
        name: "🪞 Mirror - 照出你的帥氣",
        price: 45,
        sort: "daily 居家 美容",
      },
      {
        id: 44,
        name: "🧺 Laundry Basket - 衣服收一收",
        price: 60,
        sort: "daily 洗衣 收納",
      },
      {
        id: 45,
        name: "🧹 Broom - 掃地神器",
        price: 28,
        sort: "daily 清潔 工具",
      },
      {
        id: 46,
        name: "🪠 Plunger - 馬桶救星",
        price: 33,
        sort: "daily 清潔 工具",
      },
      {
        id: 47,
        name: "🧯 Fire Extinguisher - 安全第一",
        price: 300,
        sort: "daily 安全 防火",
      },
      {
        id: 48,
        name: "🧂 Salt - 調味基本款",
        price: 10,
        sort: "daily 食品 調味",
      },
      {
        id: 49,
        name: "🪤 Mousetrap - 居家守護者",
        price: 20,
        sort: "daily 居家 防護",
      },
      {
        id: 50,
        name: "🪟 Window Cleaner - 擦窗神器",
        price: 25,
        sort: "daily 清潔 工具",
      },
      {
        id: 51,
        name: "🧊 Ice Tray - 製冰好幫手",
        price: 18,
        sort: "daily 廚房 小物",
      },
      {
        id: 52,
        name: "🪣 Bucket - 提水提心",
        price: 30,
        sort: "daily 清潔 工具",
      },
      {
        id: 53,
        name: "🧯 Fire Blanket - 火場救命布",
        price: 150,
        sort: "daily 安全 防火",
      },
      {
        id: 54,
        name: "🧦 Socks - 溫暖你雙腳",
        price: 22,
        sort: "daily 衣物 穿搭",
      },
      {
        id: 55,
        name: "👕 T-shirt - 居家短T",
        price: 80,
        sort: "daily 衣物 穿搭",
      },
      {
        id: 56,
        name: "👖 Jeans - 牛仔褲耐穿",
        price: 120,
        sort: "daily 衣物 穿搭",
      },
      { id: 57, name: "👜 Bag - 日常背包", price: 90, sort: "daily 衣物 配件" },
      {
        id: 58,
        name: "🧢 Cap - 帽子遮陽又時尚",
        price: 60,
        sort: "daily 衣物 配件",
      },
      {
        id: 59,
        name: "🧤 Gloves - 冬日保暖",
        price: 35,
        sort: "daily 衣物 配件",
      },
      {
        id: 60,
        name: "🧳 Luggage - 小旅行必備",
        price: 240,
        sort: "daily 出遊 收納",
      },
    ];

    const cart = [];
    const products = [...fruit, ...daily];

    const [theme, setTheme] = useState("bulb-dark");
    // 開闔設定
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => {
      setIsOpen(!isOpen);
      //
    };
    const [item, setItem] = useState("fruit");
    const handleItems = (e) => {
      if (e.target.value === "fruit") {
        setItem("fruit");
        console.log(e.target.value);
      } else if (e.target.value === "daily") {
        setItem("daily");
        console.log(e.target.value);
      }
    };

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    const handleSearch = () => {
      const filtered = products.filter((item) =>
        item.sort.toLowerCase().includes(query.toLowerCase())
      );
      setResult(filtered);
      setQuery("");

      console.log("搜尋已點擊!!");
    };
    useEffect(() => {
      document.body.className = "";
      document.body.classList.add(theme);
      // console.log(theme);
    }, [theme]);

    // useReducer

    // console.log(products);
    function productRudcer(state, action) {
      switch (action.type) {
        case "ADD_Item": {
          // 先判斷是否存在
          // console.log("ADD ...");
          const existingItem = state.find(
            (item) => item.id === action.payload.id
          );
          if (existingItem) {
            return state.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...state, { ...action.payload, quantity: 1 }];
          }
        }
        case "REMOVE_Item": {
          return state.filter((item) => item.id !== action.payload.id);
        }
        default:
          return state;
      }
    }

    const [cartItem, dispatch] = useReducer(productRudcer, cart);

    return (
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
          isOpen,
          toggleCart,
          fruit,
          daily,
          dispatch,
          cartItem,
          products,
          query,
          setQuery,
          result,
          setResult,
          handleSearch,
          item,
          setItem,
          handleItems,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  return (
    <div>
      <ThemeProvider>
        <CartTopArea />
        <Light />
        <CartHeader />
        <CartMain />
      </ThemeProvider>
    </div>
  );
};

export default CartBody;
