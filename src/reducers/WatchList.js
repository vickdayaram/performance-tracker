export default function (state = [{symbol: "BLK"}], action) {
    switch (action.type) {
        case 'ADD_SELECTED':
            if(existsInState(state, action.payload)){
              return [...state]
              break;
            } else {
              return [...state, {symbol: action.payload}]
              break;
            }
        case 'DELETE_SELECTED':
            let update = state.filter((stock) => stock.symbol !== action.payload)
            return state.filter((stock) => stock.symbol !== action.payload )
            break;
    }
    return state;
}

const existsInState = (state, stock) => {
  let exists = state.filter((watchItem) =>  watchItem.symbol === stock)
  if(exists.length > 0)return true
  return false
}
