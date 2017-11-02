


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

// export const getChartData = (url) => {
//   return (dispatch) => {
//     dispatch(getRequestInProcess(true))
//   }
//
//   fetch(url)
//   .then((res) => {
//     if(!res.ok) {
//       throw Error(res.statusText)
//     }
//
//     dispatch(getRequestInProcess(false))
//
//     return res
//   })
//   .then((res) => res.json())
//   .then((data) => dispatch(chartData(data)))
//   .then(() => dispatch(getRequestHasErrors(true)))
// }
