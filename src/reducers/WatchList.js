export default function (state = [{symbol: "BLK", name: "BlackRock"}], action) {
    switch (action.type) {
        case 'ADD_SELECTED':
            if(existsInState(state, action.payload)){
              return [...state]
              break;
            } else {
              return [...state, {symbol: action.payload.symbol, name: action.payload.name}]
              break;
            }
        case 'DELETE_SELECTED':
            return state.filter((stock) => stock.symbol !== action.payload.symbol )
            break;
    }
    return state;
}

const existsInState = (state, stock) => {
  let exists = state.filter((watchItem) =>  watchItem.symbol === stock.symbol)
  if(exists.length > 0)return true
  return false
}
