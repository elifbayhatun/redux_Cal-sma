const initialState = {
  todos: [],
  sayı: 0,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("ekleme var");
    case "DELETE_TODO":
    default:
      state;
  }
};
export default todoReducer;
