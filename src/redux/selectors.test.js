import * as selectors from './selectors';

describe('lineItem selectors', () => {
  it('getLineItemList should return lineItems as an array', () => {
    const state = { lineItems: {allIds: [1]} }
    const result = [1];
    expect(selectors.getLineItemList(state)).toEqual(result);
  });

  it('getLineItemList should return lineItems as an array of ids', () => {
    const state = { lineItems: { allIds: [1] } }
    const result = [1];
    expect(selectors.getLineItemList(state)).toEqual(result);
  });

  it('getLineItemById should return a lineItem that matches the id', () => {
    const id = 2;
    const content = {};
    const state = {
      lineItems: {
        allIds: [id],
        byIds: {
          [id]: {
            content: content
          }
        }
      }
    };
    const result = {
      id: id,
      content: content
    };
    expect(selectors.getLineItemById(state, id)).toEqual(result);
  });

  it('getLineItems should return a list of lineItems', () => {
    const id = 2;
    const id2 = 3;
    const content = {};
    const state = {
      lineItems: {
        allIds: [id, id2],
        byIds: {
          [id]: {
            content: content
          },
          [id2]: {
            content: content
          }
        }
      }
    };

    const result = [{
      id: id,
      content: content
    }, {
        id: id2,
        content: content
    }];

    expect(selectors.getLineItems(state)).toEqual(result);
  });
});