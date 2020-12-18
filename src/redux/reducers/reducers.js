import { AddTag, GetTask, GetTag, GetTime, GetId } from "../actions/actionConstants";

const initialState = {
  Tasks: [],
  Tags: [],
  id: 0,
  task: "",
  tag: "",
  StartingTime: "0:00:00",
  EndTime: "0:00:00",
};

// Reducers
const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddTag:
      return {
        ...state,
        Tags: [action.payload, ...state.Tags],
      };

    case GetTask:
      return {
        ...state,
        task: action.payload,
      };

    case GetTag:
      return {
        ...state,
        tag: action.payload,
      };
    case GetTime:
      return {
        ...state,
        EndTime: action.payload,
      };
      case GetId:
        return {
          ...state,
          id: action.payload,
        };

    default:
      return state;
  }
};

export default TaskReducer;
