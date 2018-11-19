import { ADD_LINE_ITEM, DELETE_LINE_ITEM, UPDATE_LINE_ITEM } from './actionTypes';

let nextLineItemId = 0;

export const addLineItem = content => ({
  type: ADD_LINE_ITEM,
  payload: {
    id: ++nextLineItemId,
    content
  }
});

export const deleteLineItem = id => ({
  type: DELETE_LINE_ITEM,
  payload: { id }
});

export const updateLineItem = (id, content) => ({
  type: UPDATE_LINE_ITEM,
  payload: { id, content }
});