
/* UserInput Actions */

export const selectStock = (selection) => {
    return {
      type: 'STOCK_SELECTED',
      payload: selection
    }
};

export const resetSelectForRestart = () => {
  return {
    type: "RESET_SELECT_FOR_RESTART"
  }
}

/* WatchList Actions*/

export const addToWatchList = (selection) => {
    return {
      type: 'ADD_SELECTED',
      payload: selection
    }
}

export const deleteFromWatchList = (selection) => {
    return {
      type: 'DELETE_SELECTED',
      payload: selection
    }
}

export const checkForRestart = () => {
  return {
    type: "CHECK_FOR_RESTART"
  }
}


/* ChartData API Request Actions */

export const getChartData = (symbol) => {
   let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=NKIEQH9ZHQ1ZFJVL
     `
  return function(dispatch){
    dispatch(getRequestInProcess(true))
     return fetch(url)
    .then((res) => res.json())
    .then((data) => dispatch(chartData(data)))
    .catch(() => dispatch(getRequestHasErrors(true)))
  }
}

export const getRequestHasErrors = (bool) => {
  return {
    type: "ERRORS_IN_GET",
    hasErrored: bool
  }
}

export const getRequestInProcess = (bool) => {
  return {
    type: "IN_PROCESS",
    inProcess: bool
  }
}

export const chartData = (data) => {
  return {
    type: "SUCCESS",
    data: data
  }
}

/* Message handler actions */

export const showDeleteMessage = (symbol) => {
  return {
    type: "SHOW_DELETE_MESSAGE",
    payload: symbol
  }
}

export const showAddMessage = (symbol) => {
  return {
    type: "SHOW_ADD_MESSAGE",
    payload: symbol
  }
}

export const resetMessages = () => {
  return {
    type: "RESET_MESSAGES"
  }
}
