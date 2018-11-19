export const getLineItemsState = store => store.lineItems;

export const getLineItemList = store => getLineItemsState(store) ? getLineItemsState(store).allIds : [];

export const getLineItemById = (store, id) => getLineItemsState(store) ? { ...getLineItemsState(store).byIds[id], id} : {};

export const getLineItems = store => getLineItemList(store).map(id => getLineItemById(store, id));