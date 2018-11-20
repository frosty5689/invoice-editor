import * as actions from './actions';
import * as types from './actionTypes';

describe('invoice actions', () => {
  it('addLineItem should create ADD_LINE_ITEM action', () => {
    const content = {};
    expect(actions.addLineItem(content)).toEqual({
      type: types.ADD_LINE_ITEM,
      payload: {
        id: 1,
        content: content
      }
    });
  });

  it('deleteLineItem should create ADD_LINE_ITEM action', () => {
    const id = 2;
    expect(actions.deleteLineItem(id)).toEqual({
      type: types.DELETE_LINE_ITEM,
      payload: {
        id: id
      }
    });
  });

  it('updateLineItem should create UPDATE_LINE_ITEM action', () => {
    const id = 3;
    const content = {};
    expect(actions.updateLineItem(id, content)).toEqual({
      type: types.UPDATE_LINE_ITEM,
      payload: {
        id: id,
        content: content
      }
    });
  });
});