  
import {Add} from './actionContants';



// actions
export const addContact = (contact) => {
    return {
      type: Add ,
      payload: contact,
    };
  };


  