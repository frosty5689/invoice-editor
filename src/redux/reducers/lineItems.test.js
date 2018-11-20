import reducer from './lineItems';
import * as types from '../actionTypes';

describe('lineItems reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      allIds: [],
      byIds: {}
    });
  });

  it('should handle ADD_LINE_ITEM', () => {
    const content = {};
    const id = 2;
    expect(
      reducer(undefined, {
        type: types.ADD_LINE_ITEM,
        payload: {
          id: 2,
          content: content
        }
      })
    ).toEqual({
      allIds: [id],
      byIds: {
        [id]: {
          content: content
        }
      }
    });
  });

  it('should handle DELETE_LINE_ITEM', () => {
    const id = 3;
    const content = {};
    const idToBeDeleted = 5;
    const contentToBeDeleted = {};
    expect(
      reducer({
        allIds: [id, idToBeDeleted],
        byIds: {
          [id]: {
            content: content
          },
          [idToBeDeleted]: {
            content: contentToBeDeleted
          }
        }
      }, {
        type: types.DELETE_LINE_ITEM,
        payload: {
          id: idToBeDeleted
        }
      })
    ).toEqual({
      allIds: [id],
      byIds: {
        [id]: {
          content: content
        }
      }
    });
  });

  it('should handle UPDATE_LINE_ITEM', () => {
    const id = 3;
    const content = {name: "haha"};
    const newContent = {name: "superb"};
    expect(
      reducer({
        allIds: [id,],
        byIds: {
          [id]: {
            content: content
          }
        }
      }, {
          type: types.UPDATE_LINE_ITEM,
          payload: {
            id: id,
            content: newContent
          }
        })
    ).toEqual({
      allIds: [id],
      byIds: {
        [id]: {
          content: newContent
        }
      }
    });
  });

});