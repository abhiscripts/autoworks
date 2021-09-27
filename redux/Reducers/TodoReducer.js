const initialState = {todoData: 0};
const AddTodo = 'AddTodo';
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddTodo:
      return {todoData: state.todoData + 1};
    default:
      return state;
  }
};

export default TodoReducer;
