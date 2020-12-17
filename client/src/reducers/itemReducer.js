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
    default:
      return state;    
  }

}