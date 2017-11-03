import _ from 'lodash'

export default function (state = [{symbol: "BLK", name: "BlackRock, Inc"}], action) {
    switch (action.type) {
        case 'ADD_SELECTED':
              let addUpdate = [...state, {symbol: action.payload.symbol, name: action.payload.name}]
              let unique = _.uniqWith(addUpdate, _.isEqual)
              localStorage.setItem('watchlist', JSON.stringify(unique))
              return unique
              break;
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
