  
import {AddTag, AddTask, DeleteTask, SearchTask} from './actionConstants';

// actions
export const addTag = (tag) => {
    return {
      type: AddTag,
      payload: tag,
    };
  };

export const addTask = (task) => {
  return {
    type: AddTask,
    payload: task,
  };
};

export const deleteTask = (id) => {
  //console.log('ii')
  return {
    type: DeleteTask,
    payload: id,
  };
};

export const editTask = (id) => {
  return {
    type: DeleteTask,
    payload: id,
  };
};

export const searchTask = (value) => {
  return {
    type: SearchTask,
    payload: value,
  };
};



  