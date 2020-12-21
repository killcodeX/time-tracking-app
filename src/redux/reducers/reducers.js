import { AddTag, AddTask, DeleteTask, SearchTask } from "../actions/actionConstants";

const initialState = {
  Tasks: [],
  Tags: [],
  works:[],
  value:''
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

    case SearchTask: {
      const result = state.Tasks.filter((val) => val.task.toLowerCase().includes(action.payload.toLowerCase()));
      console.log(result)
      if(result.length < 1){
        return {
          ...state
        }
      }
      return { 
        ...state,
         works : [...result],
        }
    }

    default:
      return state;
  }
};

export default TaskReducer;
