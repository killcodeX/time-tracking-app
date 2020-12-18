import { AddTag, AddTask, DeleteTask } from "../actions/actionConstants";

const initialState = {
  Tasks: [],
  Tags: [],
};

// Reducers
const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddTag:
      return {
        ...state,
        Tags: [action.payload, ...state.Tags],
      };

    case AddTask:
      return {
        ...state,
        Tasks: [action.payload, ...state.Tasks],
      };

      case DeleteTask:
      return {
        ...state,
        Tasks: state.Tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default TaskReducer;
