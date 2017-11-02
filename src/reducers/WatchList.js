
export default function (state = {watchlist: [{symbol: "BLK"}]}, action) {
    switch (action.type) {
        case 'ADD_SELECTED':
            return [...state, {symbol: action.payload}]
            break;
        case 'DELETE_SELECTED':
            let update = state.filter((stock) => stock.symbol !== action.payload)
            debugger
            return state.filter((stock) => stock.symbol !== action.payload )
            break;
    }
    return state;
}
