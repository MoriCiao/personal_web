import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import CartHeader from "./CartHeaderArea";
import CartMain from "./ProductPage";

export const ThemeContext = createContext();

const CartBody = () => {
  const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("bulb-dark");
    // 開闔設定
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => {
      setIsOpen(!isOpen);
      //
    };
    useEffect(() => {
      document.body.className = "";
      document.body.classList.add(theme);
      // console.log(theme);
    }, [theme]);

    // 第一類商品
    const fruit = [
      { id: 1, name: "🍎 Apple - 蘋果香甜可口", price: 30 },
      { id: 2, name: "🍌 Banana - 補充能量的好選擇", price: 20 },
      { id: 3, name: "🍇 Grape - 多汁紫葡萄", price: 40 },
      { id: 4, name: "🍓 Strawberry - 少女最愛草莓", price: 35 },
      { id: 5, name: "🍍 Pineapple - 酸酸甜甜鳳梨", price: 45 },
      { id: 6, name: "🥝 Kiwi - 綠色營養炸彈", price: 28 },
      { id: 7, name: "🍒 Cherry - 小巧迷你櫻桃", price: 50 },
      { id: 8, name: "🍉 Watermelon - 夏日西瓜", price: 60 },
      { id: 9, name: "🍑 Peach - 蜜桃嫩嫩", price: 33 },
      { id: 10, name: "🍋 Lemon - 酸溜溜檸檬", price: 25 },
      { id: 11, name: "🥭 Mango - 熱帶芒果", price: 38 },
      { id: 12, name: "🥥 Coconut - 清爽椰子", price: 55 },
      { id: 13, name: "🍈 Melon - 蜜瓜來一片", price: 42 },
      { id: 14, name: "🍅 Tomato - 番茄其實是水果！", price: 18 },
      { id: 15, name: "🥬 Lettuce - 生菜清脆", price: 15 },
      { id: 16, name: "🥦 Broccoli - 健康花椰菜", price: 22 },
      { id: 17, name: "🥒 Cucumber - 解渴小黃瓜", price: 16 },
      { id: 18, name: "🌽 Corn - 黃金玉米棒", price: 24 },
      { id: 19, name: "🥕 Carrot - 小兔子最愛", price: 19 },
      { id: 20, name: "🧄 Garlic - 香味爆棚大蒜", price: 12 },
      { id: 21, name: "🧅 Onion - 洋蔥催淚彈", price: 14 },
      { id: 22, name: "🥔 Potato - 萬用馬鈴薯", price: 17 },
      { id: 23, name: "🍠 Sweet Potato - 地瓜溫暖心", price: 20 },
      { id: 24, name: "🥑 Avocado - 網美最愛酪梨", price: 48 },
      { id: 25, name: "🌶️ Chili - 辣椒讓你熱血", price: 10 },
      { id: 26, name: "🫑 Bell Pepper - 彩椒繽紛", price: 21 },
      { id: 27, name: "🥜 Peanut - 花生香脆", price: 15 },
      { id: 28, name: "🌰 Chestnut - 冬天剝剝剝", price: 18 },
      { id: 29, name: "🍄 Mushroom - 森林小菇", price: 23 },
      { id: 30, name: "🫒 Olive - 地中海橄欖", price: 26 },
    ];
    // 第二類商品
    const daily = [
      { id: 31, name: "🧻 Toilet Paper - 柔軟三層紙", price: 35 },
      { id: 32, name: "🪥 Toothbrush - 牙齒清潔靠它", price: 20 },
      { id: 33, name: "🧼 Soap - 古早味香皂", price: 15 },
      { id: 34, name: "🧴 Shampoo - 洗髮精順順的", price: 45 },
      { id: 35, name: "🪒 Razor - 刮鬍乾淨俐落", price: 38 },
      { id: 36, name: "🧽 Sponge - 洗碗小幫手", price: 12 },
      { id: 37, name: "🪑 Chair - 居家簡約椅", price: 160 },
      { id: 38, name: "🛏️ Bed - 一覺好眠", price: 480 },
      { id: 39, name: "🧯 Fire Extinguisher - 滅火器備用", price: 300 },
      { id: 40, name: "🧃 Juice Box - 吸一口果汁", price: 25 },
      { id: 41, name: "🧵 Thread - 補衣小工具", price: 8 },
      { id: 42, name: "🪡 Needle - 裁縫專用", price: 5 },
      { id: 43, name: "🪞 Mirror - 照出你的帥氣", price: 45 },
      { id: 44, name: "🧺 Laundry Basket - 衣服收一收", price: 60 },
      { id: 45, name: "🧹 Broom - 掃地神器", price: 28 },
      { id: 46, name: "🪠 Plunger - 馬桶救星", price: 33 },
      { id: 47, name: "🧯 Fire Extinguisher - 安全第一", price: 300 },
      { id: 48, name: "🧂 Salt - 調味基本款", price: 10 },
      { id: 49, name: "🪤 Mousetrap - 居家守護者", price: 20 },
      { id: 50, name: "🪟 Window Cleaner - 擦窗神器", price: 25 },
      { id: 51, name: "🧊 Ice Tray - 製冰好幫手", price: 18 },
      { id: 52, name: "🪣 Bucket - 提水提心", price: 30 },
      { id: 53, name: "🧯 Fire Blanket - 火場救命布", price: 150 },
      { id: 54, name: "🧦 Socks - 溫暖你雙腳", price: 22 },
      { id: 55, name: "👕 T-shirt - 居家短T", price: 80 },
      { id: 56, name: "👖 Jeans - 牛仔褲耐穿", price: 120 },
      { id: 57, name: "👜 Bag - 日常背包", price: 90 },
      { id: 58, name: "🧢 Cap - 帽子遮陽又時尚", price: 60 },
      { id: 59, name: "🧤 Gloves - 冬日保暖", price: 35 },
      { id: 60, name: "🧳 Luggage - 小旅行必備", price: 240 },
    ];
    // useReducer
    const cart = [];
    const products = [...fruit, ...daily];

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
    console.log(cartItem);
    console.log(cart);
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
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  return (
    <div>
      <ThemeProvider>
        <CartHeader />
        <CartMain />
      </ThemeProvider>
    </div>
  );
};

export default CartBody;
