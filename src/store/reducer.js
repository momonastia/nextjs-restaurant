const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("Global state", action.payload.id, state.orders);

      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    /* orders: state.orders.map(
          (item) => */
    /* if (item.id === action.payload.id) {
            return {
              ...item,
              count: ++item.count,
            };
          } */
    /*  item
        ), */

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
