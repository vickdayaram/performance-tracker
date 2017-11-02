
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

export const deleteFromWatchList = (selection) => {
    return {
      type: 'DELETE_SELECTED',
      payload: selection
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

export const checkForRestart = () => {
  return {
    type: "CHECK_FOR_RESTART"
  }
}

export const resetSelectForRestart = () => {
  return {
    type: "RESET_SELECT_FOR_RESTART"
  }
}
