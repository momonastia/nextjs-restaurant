const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Проверяем, есть ли уже товар с таким id в корзине
      const existingItem = state.orders.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // Если товар уже есть в корзине, увеличиваем его количество
        const updatedOrders = state.orders.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });

        return {
          ...state,
          orders: updatedOrders,
        };
      } else {
        // Если товара нет в корзине, добавляем его
        return {
          ...state,
          orders: [...state.orders, { ...action.payload, count: 1 }],
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== action.payload),
      };

      case "UPDATE_QUANTITY":
        const updatedOrders = state.orders.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: action.payload.quantity,
            };
          }
          return item;
        });
  
        return {
          ...state,
          orders: updatedOrders,
        };

    default:
      return state;
  }
};

export default mainReducer;
