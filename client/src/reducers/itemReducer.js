import { v4 as uuid } from "uuid";
import {GET_ITEMS, ADD_ITEM, DELETE_ITEMS} from '../actions/types';

const intialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Water" },
  ],
}

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_ITEMS: 
        return{
          ...state,
        }
    case DELETE_ITEMS: 
        return{
          ...state,
          items: state.items.filter((item) => item.id !== action.payload)
        }
    case ADD_ITEM: 
         state.items.push(action.payload)
        return{
          ...state, 
        }
    default:
      return state;    
  }

}