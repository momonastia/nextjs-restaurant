const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("Global state", state);
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case "REMOVE_ITEM":
      console.log("Global state", state);
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
