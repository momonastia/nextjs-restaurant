const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("Global state", state);
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    default:
      return state;
  }
};

export default mainReducer;
