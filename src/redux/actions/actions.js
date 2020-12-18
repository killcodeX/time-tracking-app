  
import {Add} from './actionConstants';

// actions
export const addTag = (tag) => {
    return {
      type: Add,
      payload: tag,
    };
  };


  