export const selectStock = (selection) => {
    return {
        type: 'STOCK_SELECTED',
        payload: selection
    }
};

export const addToWatchList = (selection) => {
    return {
      type: 'ADD_SELECTED',
      payload: selection
    }
}
