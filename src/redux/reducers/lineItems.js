import { ADD_LINE_ITEM, DELETE_LINE_ITEM, UPDATE_LINE_ITEM } from '../actionTypes';
import _ from 'underscore';
import update from 'immutability-helper';

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LINE_ITEM: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content
          }
        }
      };
    }
    case DELETE_LINE_ITEM: {
      const { id } = action.payload;
      return {
        allIds: state.allIds.filter(itemId => itemId !== id),
        byIds: _.omit(state.byIds, id)
      };
    }
    case UPDATE_LINE_ITEM: {
      const { id, content } = action.payload;

      const newState = update(state, {
        byIds: {
          [id]: {
            $set: {
              content: content
            }
          }
        }
      });
      return newState;
    }
    default:
      return state;
  }
}