  
import {AddTag, GetTask, GetTag, GetTime, GetId} from './actionConstants';

// actions
export const addTag = (tag) => {
    return {
      type: AddTag,
      payload: tag,
    };
  };

export const getTask = (task) => {
  return {
    type: GetTask,
    payload: task,
  };
};

export const getTag = (tag) => {
  return {
    type: GetTag,
    payload: tag,
  };
};

export const getTime = (time) => {
  return {
    type: GetTime,
    payload: time,
  };
};

export const getTid = (id) => {
  return {
    type: GetId,
    payload: id,
  };
};


  