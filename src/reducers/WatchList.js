
export default function (state = { watchlist: [{symbol: "BLK"}]}, action) {
    switch (action.type) {
        case 'ADD_SELECTED':
            return [...state, {symbol: action.payload}]
            break;
        case 'DELETE_SELECTED':
            return action.payload;
            break;
    }
    return state;
}
