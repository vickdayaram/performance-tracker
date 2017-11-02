export default function (state = [{symbol: "BLK", name: "BlackRock"}], action) {
    switch (action.type) {
        case 'ADD_SELECTED':
            if(existsInState(state, action.payload)){
              return [...state]
              break;
            } else {
              let addUpdate = [...state, {symbol: action.payload.symbol, name: action.payload.name}]
              localStorage.setItem('watchlist', JSON.stringify(addUpdate))
              return addUpdate
              break;
            }
        case 'DELETE_SELECTED':
              let deleteUpdate = state.filter((stock) => stock.symbol !== action.payload.symbol )
              localStorage.setItem('watchlist', JSON.stringify(deleteUpdate))
              return deleteUpdate
              break;
        case 'CHECK_FOR_RESTART':
              if(localStorage.getItem('watchlist')){
                 let previous = localStorage.getItem('watchlist')
                 let updated = JSON.parse(previous)
                 return updated
              } else {
                 return state
              }
            return
            break;
    }
    return state;
}

const existsInState = (state, stock) => {
  let exists = state.filter((watchItem) =>  watchItem.symbol === stock.symbol)
  if(exists.length > 0)return true
  return false
}
