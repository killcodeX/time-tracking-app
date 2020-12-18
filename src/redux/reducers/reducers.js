import { Add } from "../actions/actionConstants";

const initialState = {
  
};

// Reducers
const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    // case Add:
    //   return {
    //     ...state,
    //     contacts: [action.payload, ...state.contacts],
    //   };

    // case GET:
    //   let arr = state.contacts.filter(
    //     (contact) => contact.id == action.payload
    //   );
    //   arr = arr.values();
    //   for (let val of arr) {
    //     arr = val;
    //   }
    //   return {
    //     ...state,
    //     contact: arr,
    //   };

    // case UPDATE:
    //   return {
    //     ...state,
    //     contacts: state.contacts.map((contact) =>
    //       contact.id == action.payload.id ? action.payload : contact
    //     ),
    //   };

    // case DELETE:
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(
    //       (contact) => contact.id !== action.payload
    //     ),
    //   };

    // case SELECT:
    //   return {
    //     ...state,
    //     selectedContacts: action.payload,
    //   };

    // case CLEAR:
    //   return {
    //     ...state,
    //     selectedContacts: [],
    //   };
    // case DELETEALL:
    //   return {
    //     ...state,
    //     contacts: [],
    //   };
    default:
      return state;
  }
};

export default TaskReducer;
