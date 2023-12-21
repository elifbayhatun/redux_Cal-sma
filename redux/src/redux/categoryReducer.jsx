const initialState = {
  todos: [],
  sayı: 0,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
    case "DELETE_TODO":
    default:
      state;
  }
};
export default categoryReducer;
